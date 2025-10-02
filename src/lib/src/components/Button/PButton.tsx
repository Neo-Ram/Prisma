import React from 'react';
import styles from './PButton.module.css';

// Definimos los tipos de variantes para diferentes tipos de daltonismo
export type ColorBlindnessVariant = 
  | 'protanopia'    // Dificultad para ver rojos
  | 'deuteranopia'  // Dificultad para ver verdes  
  | 'tritanopia'    // Dificultad para ver azules
  | 'normal';       // Visión normal

// Definimos los tamaños disponibles del botón
export type PButtonSize = 'small' | 'medium' | 'large';

// Definimos las variantes visuales del botón
export type PButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';

// Interfaz que define todas las propiedades que puede recibir nuestro PButton
export interface PButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  // Propiedades específicas de nuestro componente Prisma
  variant?: PButtonVariant;           // Estilo visual del botón
  size?: PButtonSize;                 // Tamaño del botón
  colorBlindness?: ColorBlindnessVariant; // Tipo de daltonismo a soportar
  highContrast?: boolean;            // Si debe usar alto contraste
  fullWidth?: boolean;               // Si debe ocupar todo el ancho disponible
  loading?: boolean;                 // Si está en estado de carga
  
  // Propiedades heredadas del elemento HTML button
  children: React.ReactNode;         // Contenido del botón (texto, iconos, etc.)
  disabled?: boolean;                // Si está deshabilitado
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; // Función que se ejecuta al hacer clic
}

// Componente PButton de Prisma - Accesible para diferentes tipos de daltonismo
export const PButton: React.FC<PButtonProps> = ({
  // Valores por defecto para las propiedades
  variant = 'primary',
  size = 'medium', 
  colorBlindness = 'normal',
  highContrast = false,
  fullWidth = false,
  loading = false,
  children,
  disabled = false,
  className = '',
  ...props // Resto de propiedades HTML que se pasan al elemento button
}) => {
  
  // Creamos un string con todas las clases CSS que necesita nuestro botón
  const buttonClasses = [
    styles.button,                    // Clase base con estilos comunes
    styles[variant],                  // Clase de variante (primary, secondary, etc.)
    styles[size],                     // Clase de tamaño (small, medium, large)
    styles[colorBlindness],           // Clase para tipo de daltonismo
    highContrast && styles.highContrast, // Clase de alto contraste si está habilitada
    fullWidth && styles.fullWidth,    // Clase de ancho completo si está habilitada
    loading && styles.loading,        // Clase de carga si está habilitada
    disabled && styles.disabled,      // Clase de deshabilitado si está habilitada
    className                         // Clases adicionales pasadas desde el componente padre
  ]
    .filter(Boolean)                  // Removemos valores falsy (null, undefined, false)
    .join(' ');                       // Unimos todas las clases con espacios

  return (
    <button
      className={buttonClasses}
      disabled={disabled || loading}  // Deshabilitar si está disabled o loading
      aria-label={loading ? 'Loading...' : undefined} // Accesibilidad para lectores de pantalla
      {...props}                      // Expandimos el resto de propiedades HTML
    >
      {/* Contenido del botón */}
      {loading ? (
        // Si está cargando, mostramos un indicador de carga
        <span className={styles.loadingSpinner} aria-hidden="true">
          ⟳
        </span>
      ) : (
        // Si no está cargando, mostramos el contenido normal
        children
      )}
    </button>
  );
};

// Exportamos por defecto el componente para facilitar las importaciones
export default PButton;