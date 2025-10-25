import styles from './CustomColors.module.css';
import { useState, useEffect, useRef } from 'react';

interface Message {
  id: string;
  type: 'user' | 'bot';
  text: string;
}

function CustomColors() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '0',
      type: 'bot',
      text: "I'm Spectrum. I can help you understand colorblindness and guide you through neo-ram-prisma's customColors system. What would you like to know?",
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async () => {
    if (!inputValue.trim()) return;

    // Agregar mensaje del usuario
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      text: inputValue,
    };

    setMessages((prev) => [...prev, userMessage]);
    const currentMessage = inputValue;
    setInputValue('');
    setIsLoading(true);

    try {
      // Llamar a tu API serverless en Vercel
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: currentMessage }),
      });

      if (!response.ok) {
        throw new Error('Error en la respuesta del servidor');
      }

      const data = await response.json();

      // Agregar respuesta del bot
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        text: data.response,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage: Message = {
        id: (Date.now() + 2).toString(),
        type: 'bot',
        text: 'I apologize, but I encountered an issue processing your message. Please try again.',
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !isLoading) {
      sendMessage();
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.chat}>
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={msg.type === 'user' ? styles.message : styles.messagebot}
          >
            <p>{msg.text}</p>
          </div>
        ))}
        {isLoading && (
          <div className={styles.messagebot}>
            <p>Analyzing your inquiry...</p>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>
      <div className={styles.inputArea}>
        <input
          type="text"
          placeholder="Ask me about colorblindness, colors, or neo-ram-prisma..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          disabled={isLoading}
        />
        <button onClick={sendMessage} disabled={isLoading}>
          {isLoading ? 'Sending...' : 'Send'}
        </button>
      </div>
    </div>
  );
}

export default CustomColors;