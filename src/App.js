import React from 'react';
import MessageList from './components/MessageList';
import styled from 'styled-components';
import Uaizap from './assets/UAI-ZAP.png';
import './App.css';

const StyledHeader = styled.header`
  background-color: orange; 
  display: flex;
  align-items: center;
  padding: 10px; 
`;

const LogoImage = styled.img`
  width: 10%; 
  height: 10%; 
  margin-right: 10px; 
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
