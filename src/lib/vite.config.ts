import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      // Punto de entrada de la librería
      entry: './src/index.ts',
      name: 'PrismaUI',
      // Nombres de archivos de salida que coincidan con package.json
      fileName: (format) => {
        if (format === 'es') return 'index.es.js'
        if (format === 'umd') return 'index.umd.js'
        return `index.${format}.js`
      }
    },
    rollupOptions: {
      // Asegurar que React no se incluya en el bundle
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    },
    // Generar archivos .d.ts
    emptyOutDir: true
  }
})