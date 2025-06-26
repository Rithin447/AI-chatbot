import React from 'react';
import Chatbot from './chatbot';

function App() {
  return (
   
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
  <div className="w-100 px-3" style={{ maxWidth: '900px' }}>
    <Chatbot />
  </div>
</div>

  );
}

export default App;
