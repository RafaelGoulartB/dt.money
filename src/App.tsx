import React from 'react';
import { GlobalStyle } from './styles/global';
import { Header } from './components/Header/Header';

const App: React.FC = () => {
  return ( 
    <>
      <GlobalStyle />
      <Header />
    </>
  );
}

export { App };
