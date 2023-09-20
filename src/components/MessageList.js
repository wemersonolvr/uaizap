import React, { useState, useEffect, useRef} from 'react'
import Message from './Message'
import MessageInput from './MessageInput'
import styled from 'styled-components'

const StyledMessageList = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 70vh;
  overflow-y: auto;
`;

function MessageList() {
  const [messages, setMessages] = useState([]);
  const [lastPosition, setLastPosition] = useState('right');
  const messageListRef = useRef(null);

  const addMessage = (message) => {
    const newPosition = lastPosition === 'right' ? 'left' : 'right';
    setLastPosition(newPosition);

    const newMessage = {
      sender: message.sender,
      content: message.content,
      position: newPosition,
    };

    // Inverte a ordem das mensagens, colocando a mais recente no topo
    setMessages((prevMessages) => [newMessage, ...prevMessages]);
  };

  const deleteMessage = (index) => {
    const updatedMessages = messages.filter((_, i) => i !== index);
    setMessages(updatedMessages);
  };

  // Rolagem automática para o topo da lista de mensagens
  useEffect(() => {
    if (messageListRef.current) {
      messageListRef.current.scrollTop = 0;
    }
  }, [messages]);

  return (
    <StyledMessageList ref={messageListRef}>
      {messages.map((message, index) => (
        <Message
          key={index}
          message={message}
          onDelete={() => deleteMessage(index)}
        />
      ))}
      <MessageInput onSend={addMessage} />
    </StyledMessageList>
  );
}

export default MessageList;