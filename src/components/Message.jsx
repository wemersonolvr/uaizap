import React from 'react';
import styled from 'styled-components';

const SenderName = styled.span`
  font-weight: ${({ isMyMessage }) => (isMyMessage ? 'bold' : 'bold')};
  color: ${({ isMyMessage }) => (isMyMessage ? 'yellow' : 'red')};
`;

const StyledMessage = styled.div`
  display: inline-block; /* Torna a caixa do tamanho da mensagem */
  padding: 10px;
  flex-direction: column; /* A mensagem é exibida em uma coluna */
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 10px; /* Adiciona margens para afastar das bordas da tela */
  border-radius: 10px;
  background-color: ${({ isMyMessage }) => (isMyMessage ? 'red' : 'white')};
  color: ${({ isMyMessage }) => (isMyMessage ? 'white' : 'black')};
  text-align: ${({ isMyMessage }) => (isMyMessage ? 'right' : 'left')};
  word-wrap: break-word; /* Quebra de palavras quando necessário */
  max-width: 10%; /* Define um limite de largura para a caixa da mensagem */
  margin-left: ${({ isMyMessage }) => (isMyMessage ? 'auto' : '0')}; /* Move a mensagem 'eu' para a direita */
`;

const Message = ({ message, onDelete }) => {
  const { sender, content } = message;
  const isMyMessage = sender === 'eu';
  const handleDoubleClick = () => {
    onDelete(); // Chama a função onDelete quando ocorrer um clique duplo na mensagem
  };

  return (
    <StyledMessage isMyMessage={isMyMessage} onDoubleClick={handleDoubleClick}>
      <SenderName isMyMessage={isMyMessage}>{sender}</SenderName>
      <div className="content">{content}</div>
    </StyledMessage>
  );
};

export default Message;



