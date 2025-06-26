import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

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
  setIsLoading(true);  // 

  try {
    const res = await axios.post('http://localhost:11434/api/generate', {
      model: "llama3.2",
      prompt: input,
      stream: false
    });

    const botMsg = { role: 'assistant', content: res.data.response };
    setMessages(prev => [...prev, botMsg]);
  } catch (error) {
    console.error("LLM request failed:", error);
    setMessages(prev => [
      ...prev,
      { role: 'error', content: 'LLM error. Check console for details.' }
    ]);
  }

  setIsLoading(false);  // 
  setInput('');
};  

  // Auto-scroll to the latest message
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
