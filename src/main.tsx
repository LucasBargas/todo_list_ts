import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ThemeProvider } from 'styled-components';
import { Theme } from './styles/Theme.ts';
import Globals from './styles/Globals.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <App />
      <Globals />
    </ThemeProvider>
  </React.StrictMode>,
);
