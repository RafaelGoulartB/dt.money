import React from 'react';
import { GlobalStyle } from './styles/global';
import { Header } from './components/Header/Header';
import { Dashboard } from './components/Dashboard/Dashboard';

const App: React.FC = () => {
  return ( 
    <>
      <GlobalStyle />
      <Header />
      <Dashboard />
    </>
  );
}

export { App };
