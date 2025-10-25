# 🎭 Spectrum - Chatbot Setup Guide

## ¿Qué se ha creado?

Has configurado **Spectrum**, un chatbot experto en daltonismo y accesibilidad visual con la personalidad de Gustavo Fring de Breaking Bad.

### Archivos creados/modificados:

1. **`api/chat.ts`** - API serverless para Vercel
   - Procesa mensajes desde el frontend
   - Comunica con Gemini API de forma segura (API key protegida en variables de entorno)
   - Implementa el sistema de prompts de Spectrum

2. **`src/pages/All_components/CustomColors.tsx`** - Interfaz del chat mejorada
   - Chat interactivo en tiempo real
   - Auto-scroll al nuevo mensaje
   - Estados de carga

3. **`src/pages/All_components/CustomColors.module.css`** - Estilos modernos
   - Diseño gradiente sofisticado
   - Animaciones suaves
   - Responsive design

4. **`vercel.json`** - Configuración de Vercel
   - ⚠️ **IMPORTANTE**: Tu API key está aquí en texto plano. Necesitas modificarlo.

---

## ⚠️ PASO IMPORTANTE: Proteger tu API Key

Tu API key NO debe estar en el repositorio en texto plano. Vercel tiene una forma segura de manejar esto:

### En Vercel Dashboard:

1. Ve a tu proyecto en [vercel.com](https://vercel.com)
2. Click en **Settings** → **Environment Variables**
3. Agrega una nueva variable:
   - **Name**: `GEMINI_API_KEY`
   - **Value**: Tu API key de Google Gemini
   - **Environments**: Production, Preview, Development

4. Luego actualiza tu `vercel.json` a esto:

```json
{
  "buildCommand": "tsc -b && vite build",
  "outputDirectory": "dist",
  "devCommand": "vite",
  "functions": {
    "api/**/*.ts": {
      "runtime": "nodejs20.x"
    }
  }
}
```

### En desarrollo local:

Crea un archivo `.env.local` en la raíz del proyecto:

```
GEMINI_API_KEY=tu_api_key_aqui
```

**NO commits este archivo** - añádelo a `.gitignore` si no está ya.

---

## 🚀 Instrucciones para desplegar

### 1. Push a GitHub con los cambios

```bash
git add .
git commit -m "feat: add Spectrum chatbot with Gemini integration"
git push origin gemini-update
```

### 2. En Vercel:

- Vercel detectará automáticamente el archivo `/api/chat.ts`
- Compilará todo automáticamente
- Los endpoints estarán disponibles en `https://tu-dominio.vercel.app/api/chat`

### 3. Configurar Environment Variables:

En Vercel Dashboard → Settings → Environment Variables:
- Agrega `GEMINI_API_KEY` con tu API key

---

## 🎭 Personalidad de Spectrum

Spectrum tiene estas características:

- ✅ **Experto en**: Daltonismo, accesibilidad visual, colores seguros
- ✅ **Especializado en**: neo-ram-prisma library y customColors prop
- ✅ **Personalidad**: Seria y profesional como Gustavo Fring, pero carismática
- ✅ **Lenguaje**: Inglés elegante y sofisticado
- ❌ **NO discute**: Otros temas no relacionados con colores/accesibilidad

### Ejemplos de preguntas válidas para Spectrum:

- "What colors should I use for protanopia users?"
- "How do I use the customColors prop in a Button component?"
- "Explain the difference between deuteranopia and tritanopia"
- "What are safe color combinations for colorblind accessibility?"
- "How do I implement custom colors for all 4 vision modes?"

### Ejemplos de preguntas que rechazará:

- "What's the weather like?"
- "Tell me a joke"
- "How do I use React Router?"
- "How do I deploy to AWS?"

---

## 🔧 Cómo funciona la arquitectura

```
Usuario escribe en CustomColors.tsx
          ↓
Frontend envía POST a /api/chat
          ↓
Vercel ejecuta api/chat.ts (serverless)
          ↓
Spectrum (con Gemini) genera respuesta
          ↓
Respuesta vuelve al frontend
          ↓
Se muestra en el chat
```

**Ventajas:**
- 🔒 API key nunca se expone en el frontend
- 🚀 Escalado automático con Vercel
- 💰 Gratis (serverless functions incluidas)
- 🌍 Disponible en internet automáticamente

---

## 📝 Estructura de mensajes

### Request:
```json
{
  "message": "What colors should I use for deuteranopia?"
}
```

### Response:
```json
{
  "response": "Well, well, well... let me explain something about deuteranopia..."
}
```

---

## 🐛 Troubleshooting

### "Error: Cannot find module '@google/generative-ai'"
- Ya instalado ✅
- Si persiste: `npm install @google/generative-ai`

### "Error: API key not found"
- Asegúrate de haber añadido `GEMINI_API_KEY` en Vercel Environment Variables
- En desarrollo local, verifica `.env.local`

### "CORS error"
- No debería haber, porque el frontend y API están en el mismo dominio (Vercel)
- Si ocurre, contacta a soporte de Vercel

---

## 📚 Documentación útil

- [neo-ram-prisma npm](https://www.npmjs.com/package/neo-ram-prisma)
- [Prisma UI Demo](https://prisma-drab.vercel.app/)
- [Google Gemini API](https://ai.google.dev/)
- [Vercel Functions](https://vercel.com/docs/functions/serverless-functions)

---

¡Listo! Tu chatbot Spectrum está configurado y listo para desplegar. 🎉
