
import React, { useState, useRef, useEffect } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const bottomRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('http://localhost:11434/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'llama3.2',
          prompt: input,
          stream: true,
        }),
      });

      const reader = res.body.getReader();
      const decoder = new TextDecoder('utf-8');
      let botText = '';

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value);

        chunk.split('\n').forEach(line => {
          if (line.trim()) {
            try {
              const json = JSON.parse(line);
              if (json.response) {
                botText += json.response;
                setMessages(prev => [
                  ...prev.filter(m => m.role !== 'assistant'),
                  { role: 'assistant', content: botText },
                ]);
              }
            } catch (e) {
              console.error('Stream parse error:', e);
            }
          }
        });
      }

    } catch (error) {
      console.error("LLM stream failed:", error);
      setMessages(prev => [
        ...prev,
        { role: 'error', content: 'LLM error. Check console for details.' }
      ]);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const CHATBOX_HEIGHT = '90vh';
  const HEADER_FOOTER_HEIGHT = 140;

  return (
    <div className="card shadow-lg w-100" style={{ height: CHATBOX_HEIGHT }}>
      <div className="card-header bg-primary text-white">
        <h4 className="mb-0">Chat Conversation</h4>
      </div>

      <div
        className="card-body"
        style={{
          height: `calc(${CHATBOX_HEIGHT} - ${HEADER_FOOTER_HEIGHT}px)`,
          overflowY: 'auto',
          backgroundColor: '#f9f9f9',
          paddingBottom: '1rem'
        }}
      >
        {messages.map((msg, i) => (
          <div key={i} className="mb-2">
            <div
              className={`p-2 rounded ${
                msg.role === 'user'
                  ? 'bg-light text-end'
                  : msg.role === 'assistant'
                  ? 'bg-success text-white'
                  : 'bg-danger text-white'
              }`}
            >
              <strong>
                {msg.role === 'user'
                  ? 'You'
                  : msg.role === 'assistant'
                  ? 'Bot'
                  : 'Error'}
                :
              </strong>{' '}
              {msg.content}
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="text-muted fst-italic">Bot is typing...</div>
        )}
        <div ref={bottomRef}></div>
      </div>

      <div className="card-footer">
        <div className="input-group input-group-lg">
          <input
            type="text"
            className="form-control"
            placeholder="Ask me something..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          />
          <button className="btn btn-primary" onClick={sendMessage}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
