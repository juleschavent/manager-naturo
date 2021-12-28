import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import StateContextProvider from './Context/StateContext';

ReactDOM.render(
  <React.StrictMode>
    <StateContextProvider>
      <App />
    </StateContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);