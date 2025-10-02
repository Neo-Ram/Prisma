// Prisma Components Library - Punto de entrada principal
// Librería de componentes React accesibles para daltonismo, baja visión y alto contraste

// Importar estilos globales automáticamente
import './styles/globals.css';

// Exportamos todos los componentes disponibles en nuestra librería

// ====== COMPONENTES ======
// PButton - Botón accesible con soporte para daltonismo
export { 
  PButton,                   // Componente principal
  type PButtonProps,         // Propiedades del PButton
  type PButtonSize,          // Tamaños disponibles
  type PButtonVariant,       // Variantes visuales
  type ColorBlindnessVariant // Tipos de daltonismo soportados
} from './components/Button';

// ====== EXPORTACIÓN POR DEFECTO ======
// Objeto con todos los componentes para importación fácil
import { PButton } from './components/Button';

export default {
  PButton,
};
