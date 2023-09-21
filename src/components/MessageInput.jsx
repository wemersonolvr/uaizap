import React, { useState } from 'react';
import '../styles/MessageInput.css';

function MessageInput({ onSend }) {
  const [sender, setSender] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verifica se ambos os campos não estão vazios
    if (sender.trim() === '' || content.trim() === '') {
      alert('Ambos os campos devem ser preenchidos');
      return; // Impede o envio da mensagem se houver campos vazios
    }

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
