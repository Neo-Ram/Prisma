import { VercelRequest, VercelResponse } from '@vercel/node';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Contexto del sistema para Spectrum
const SPECTRUM_SYSTEM_PROMPT = `Eres Spectrum, chatbot experto en daltonismo y neo-ram-prisma.

IDIOMA: Responde SIEMPRE en el idioma del usuario.

TEMAS VÁLIDOS:
• Daltonismo (protanopia, deuteranopia, tritanopia)
• Accesibilidad visual y colores
• Uso de neo-ram-prisma y customColors
• Recomendaciones de colores para cada modo de visión

TEMAS NO VÁLIDOS:
• Programación general
• Otras librerías
• Temas no relacionados

INFORMACIÓN: Usa SOLO:
1. https://www.npmjs.com/package/neo-ram-prisma
2. https://prisma-drab.vercel.app/

FORMATO DE RESPUESTA:
- Máximo 150 palabras
- Sé directo y conciso
- Si muestras código, respeta saltos de línea como lo harías normalmente
- Usa viñetas para listas
- Una sola idea por respuesta

SOBRE NEO-RAM-PRISMA:
- 13 componentes: Button, Alert, Breadcrumb, Checkbox, Input, Pagination, Radiogroup, Select, Slider, Spinner, Textarea, Toggle, Tooltip
- Patrón: variant="custom" + customColors prop
- Soporta 4 modos de visión: normal, protanopia, deuteranopia, tritanopia
- 236+ propiedades personalizables
- WCAG 2.1 AA compliant

Personalidad: Profesional, directo, sin enredos. Tipo Gustavo Fring.`;

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  // Solo aceptar POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Verificar que la API key exista
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error('GEMINI_API_KEY no está configurada');
      return res.status(500).json({ 
        error: 'Internal server error',
        message: 'API key no configurada'
      });
    }

    const { message } = req.body;

    // Validar que el mensaje exista
    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Inicializar Gemini con la API key
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

    // Generar respuesta con el contexto de Spectrum
    const result = await model.generateContent([
      {
        text: SPECTRUM_SYSTEM_PROMPT,
      },
      {
        text: `User message: ${message}`,
      },
    ]);

    const response = result.response;
    const text = response.text();

    return res.status(200).json({ response: text });
  } catch (error) {
    console.error('Error completo:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
