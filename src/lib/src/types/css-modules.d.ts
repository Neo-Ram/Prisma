// Declaraciones de tipos para módulos CSS
// Esto permite que TypeScript entienda las importaciones de archivos CSS

// Solo para archivos CSS globales específicos (no módulos)
declare module '*/globals.css' {
  const content: string;
  export default content;
}

// Para módulos CSS (.module.css)
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.sass' {
  const classes: { [key: string]: string };
  export default classes;
}