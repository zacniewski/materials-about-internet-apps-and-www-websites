import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // importujemy "główny" plik CSS
import App from './App' // nasz komponent App

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);