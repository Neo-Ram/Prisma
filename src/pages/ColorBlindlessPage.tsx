import styles from './ColorBlindlessPage.module.css';
import { Button } from 'neo-ram-prisma';
import { useRef, useState } from 'react';

/**
 * PÁGINA DE SIMULACIÓN DE DALTONISMO (Color Blindness Simulator)
 * 
 * Esta página permite a los usuarios:
 * 1. Subir sus propias imágenes
 * 2. Simular cómo verían la imagen personas con diferentes tipos de daltonismo
 * 
 * El proceso funciona transformando matemáticamente los valores RGB de cada píxel
 * de la imagen usando matrices de transformación de color específicas para cada tipo
 * de deficiencia visual.
 */
function ColorBlindnessPage() {
    // Estado: URL de la imagen original cargada
    const [imageSrc, setImageSrc] = useState('/public/admin.jpeg');
    
    // Estado: tipo de filtro actualmente aplicado (ej: 'protanopia', 'deuteranopia')
    const [activeFilter, setActiveFilter] = useState<string | null>(null);
    
    // Estado: URL de la imagen mostrada (puede ser original o procesada con filtro)
    const [displayedImage, setDisplayedImage] = useState('/public/admin.jpeg');
    
    // Estado: controla la animación de salto
    const [isJumping, setIsJumping] = useState(false);
    
    // Referencias del DOM
    const canvasRef = useRef<HTMLCanvasElement>(null); // Canvas para procesar la imagen
    const fileInputRef = useRef<HTMLInputElement>(null); // Input file oculto
    const imgRef = useRef<HTMLImageElement>(null); // Imagen original como referencia

    /**
     * MATRICES DE TRANSFORMACIÓN DE COLOR PARA SIMULAR DALTONISMO
     * ============================================================
     * 
     * ¿Por qué es válido este método?
     * 
     * El daltonismo es una deficiencia en los conos del ojo que detectan ciertos colores.
     * Existen 3 tipos principales de fotorreceptores (conos):
     * - Conos L (Long): detectan colores rojos/naranjas
     * - Conos M (Medium): detectan colores verdes
     * - Conos S (Short): detectan colores azules/violetas
     * 
     * Las personas con daltonismo tienen problemas con uno o más de estos conos.
     * Para simular esto, usamos matrices matemáticas que transforman los valores RGB.
     * 
     * Cada matriz está compuesta por 3 filas y 3 columnas:
     * - Fila 1: cómo combinar R, G, B para obtener el nuevo valor de ROJO
     * - Fila 2: cómo combinar R, G, B para obtener el nuevo valor de VERDE
     * - Fila 3: cómo combinar R, G, B para obtener el nuevo valor de AZUL
     * 
     * Ejemplo con Protanopia (ceguera de rojo):
     * newRed   = 0.567 * R + 0.433 * G + 0 * B
     * newGreen = 0.558 * R + 0.442 * G + 0 * B
     * newBlue  = 0 * R     + 0.242 * G + 0.758 * B
     * 
     * Esto simula cómo alguien con Protanopia verría esos colores, dado que sus
     * conos L (rojo) no funcionan correctamente.
     * 
     * Fuente científica: https://mapeper.github.io/jsColorblindSimulator/
     * Basado en: Brettel et al. (1997) - Color Vision Research Laboratory
     */
    const colorBlindnessMatrices: Record<string, number[][]> = {
        // Visión normal: matriz identidad (sin cambios)
        normal: [
            [1, 0, 0],
            [0, 1, 0],
            [0, 0, 1],
        ],
        
        // Protanopia: deficiencia de conos L (sensibilidad al rojo)
        // Causa: incapacidad para distinguir rojo y verde
        protanopia: [
            [0.567, 0.433, 0],    // El rojo se mezcla con verde
            [0.558, 0.442, 0],    // El verde se mezcla con rojo
            [0, 0.242, 0.758],    // El azul permanece relativamente normal
        ],
        
        // Deuteranopia: deficiencia de conos M (sensibilidad al verde)
        // Causa: incapacidad para distinguir rojo y verde (diferente a protanopia)
        deuteranopia: [
            [0.625, 0.375, 0],    // El rojo absorbe verde
            [0.7, 0.3, 0],        // El verde absorbe rojo
            [0, 0.3, 0.7],        // El azul permanece relativamente normal
        ],
        
        // Tritanopia: deficiencia de conos S (sensibilidad al azul)
        // Causa: incapacidad para distinguir azul y amarillo (muy rara)
        tritanopia: [
            [0.95, 0.05, 0],      // El rojo permanece bastante normal
            [0, 0.433, 0.567],    // El verde absorbe azul
            [0, 0.475, 0.525],    // El azul absorbe verde
        ],
    };

    /**
     * FUNCIÓN: Aplicar filtro de simulación de daltonismo
     * 
     * Proceso:
     * 1. Obtiene referencias al canvas y la imagen original
     * 2. Dibuja la imagen original en el canvas
     * 3. Extrae los datos de píxeles (RGBA)
     * 4. Itera sobre cada píxel (grupos de 4 bytes: R, G, B, A)
     * 5. Aplica la matriz de transformación a los valores RGB
     * 6. Reemplaza los datos de píxeles en el canvas
     * 7. Convierte el canvas procesado a una URL de imagen
     * 8. Actualiza el estado con transición suave
     */
    const applyColorFilter = (filterType: string) => {
        const canvas = canvasRef.current;
        const img = imgRef.current;
        
        if (!canvas || !img) return;

        // willReadFrequently: optimiza el canvas cuando se leen datos frecuentemente (getImageData)
        const ctx = canvas.getContext('2d', { willReadFrequently: true });
        if (!ctx) return;

        // Esperar a que la imagen esté cargada completamente
        if (img.complete) {
            processImage();
        } else {
            img.onload = processImage;
        }

        function processImage() {
            if (!img || !canvas || !ctx) return;
            
            // Configurar dimensiones del canvas según la imagen
            canvas.width = img.width;
            canvas.height = img.height;
            
            // Dibujar la imagen original en el canvas
            ctx.drawImage(img, 0, 0);

            // Obtener todos los datos de píxeles de la imagen (RGBA)
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const data = imageData.data; // Array tipado: [R1, G1, B1, A1, R2, G2, B2, A2, ...]
            
            // Obtener la matriz de transformación correspondiente al filtro
            const matrix = colorBlindnessMatrices[filterType] || colorBlindnessMatrices.normal;

            /**
             * TRANSFORMACIÓN DE PÍXELES
             * Itera sobre cada píxel (i += 4) porque cada píxel tiene 4 valores:
             * - data[i] = Rojo (0-255)
             * - data[i+1] = Verde (0-255)
             * - data[i+2] = Azul (0-255)
             * - data[i+3] = Alfa/Transparencia (0-255) - NO se modifica
             */
            for (let i = 0; i < data.length; i += 4) {
                // Guardar valores RGB originales
                const r = data[i];
                const g = data[i + 1];
                const b = data[i + 2];

                /**
                 * Aplicar la matriz de transformación:
                 * 
                 * Cada nueva componente es la suma ponderada de R, G y B
                 * Ejemplo (fila 0 de la matriz para nuevo valor de Rojo):
                 * newRed = (r * matrix[0][0]) + (g * matrix[0][1]) + (b * matrix[0][2])
                 * 
                 * Math.max(0, ...) asegura que el valor no sea negativo
                 * Math.min(255, ...) asegura que el valor no supere 255
                 */
                data[i] = Math.max(0, Math.min(255, r * matrix[0][0] + g * matrix[0][1] + b * matrix[0][2]));
                data[i + 1] = Math.max(0, Math.min(255, r * matrix[1][0] + g * matrix[1][1] + b * matrix[1][2]));
                data[i + 2] = Math.max(0, Math.min(255, r * matrix[2][0] + g * matrix[2][1] + b * matrix[2][2]));
                // data[i+3] (Alfa) se mantiene igual
            }

            // Colocar los datos modificados de vuelta en el canvas
            ctx.putImageData(imageData, 0, 0);
            
            // Iniciar animación de salto
            setIsJumping(true);
            
            // A mitad de la animación (cuando está en el aire), cambiar la imagen
            setTimeout(() => {
                setDisplayedImage(canvas.toDataURL());
            }, 100);
            
            // Después de terminar el salto, resetear el estado
            setTimeout(() => {
                setIsJumping(false);
                setActiveFilter(filterType);
            }, 200);
        }
    };

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const src = e.target?.result as string;
                setImageSrc(src);
                setDisplayedImage(src);
                setActiveFilter(null);
                setIsJumping(false);
            };
            reader.readAsDataURL(file);
        }
    };

    const triggerFileInput = () => {
        fileInputRef.current?.click();
    };

    return (
        <>
            <div className={styles.box}>
                <p>Press the button to simulate different types of color blindness</p>
                <canvas
                    ref={canvasRef}
                    className={styles.canvas}
                    style={{ display: 'none' }}
                />
                <img 
                    ref={imgRef}
                    src={imageSrc} 
                    alt="The admin" 
                    className={styles.image}
                    style={{ display: 'none' }}
                />
                {/* 
                    Imagen mostrada al usuario: efecto de salto cuando cambia de color
                    La imagen salta hacia arriba y cuando regresa, ya tiene el nuevo color
                */}
                <img 
                    src={displayedImage} 
                    alt="Filtered image" 
                    className={styles.image}
                    style={{ 
                        transform: isJumping ? 'translateY(-20px)' : 'translateY(0)',
                        transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
                    }}
                />
                <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    style={{ display: 'none' }}
                />
                <Button variant='secondary' onClick={triggerFileInput}>
                    Upload my image
                </Button>
            </div>
            <div className={styles.buttonBox}>
                <Button
                    onClick={() => applyColorFilter('normal')}
                    className={activeFilter === 'normal' ? styles.active : ''}
                >
                    Simulate Normal
                </Button>
                <Button
                    variant='success'
                    onClick={() => applyColorFilter('protanopia')}
                    className={activeFilter === 'protanopia' ? styles.active : ''}
                >
                    Simulate Protanopia
                </Button>
                <Button
                    colorVision='deuteranopia'
                    onClick={() => applyColorFilter('deuteranopia')}
                    className={activeFilter === 'deuteranopia' ? styles.active : ''}
                >
                    Simulate Deuteranopia
                </Button>
                <Button
                    variant='danger'
                    onClick={() => applyColorFilter('tritanopia')}
                    className={activeFilter === 'tritanopia' ? styles.active : ''}
                >
                    Simulate Tritanopia
                </Button>
            </div>
        </>
    );
}

export default ColorBlindnessPage;