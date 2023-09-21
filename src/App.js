import React from 'react';
import MessageList from './components/MessageList';
import styled from 'styled-components';
import Uaizap from './assets/UAI-ZAP.png';
import './App.css';

const StyledHeader = styled.header`
  background-color: orange; /* Define a cor de fundo do header como vermelho */
  display: flex;
  align-items: center;
  padding: 10px; /* Adicione algum espaço interno para o conteúdo do header */
`;

const LogoImage = styled.img`
  width: 10%; /* Defina a largura desejada para a imagem do logo */
  height: 10%; /* Defina a altura desejada para a imagem do logo */
  margin-right: 10px; /* Adicione algum espaço à direita da imagem */
`;

function App() {
  return (
    <div className="App">
      <StyledHeader>
        <LogoImage src={Uaizap} alt="Uaizap Logo" /> 
        <h1>UAIZAP</h1>
      </StyledHeader>
      <main className="App-main">
        <MessageList />
      </main>
    </div>
  );
}

export default App;