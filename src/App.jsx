import React from 'react';
import Chatbot from './chatbot';

function App() {
  return (
    <div
      style={{
        backgroundImage: "url('/background.png')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div className="w-100 px-3" style={{ maxWidth: '900px' }}>
        <Chatbot />
      </div>
    </div>
  );
}

export default App;
