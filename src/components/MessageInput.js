import React, { useState } from 'react';
import '../styles/MessageInput.css';

function MessageInput({ onSend }) {
  const [sender, setSender] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSend({ sender, content });
    setSender('');
    setContent('');
  };

  return (
    <form className="message-input" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome do Remetente"
        value={sender}
        onChange={(e) => setSender(e.target.value)}
      />
      <input
        type="text"
        placeholder="Digite sua mensagem"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default MessageInput;