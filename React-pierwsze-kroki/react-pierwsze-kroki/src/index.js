import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // importujemy "główny" plik CSS
import Hello from './Hello' // nasz komponent Hello

ReactDOM.render(
  <React.StrictMode>
    <Hello />
  </React.StrictMode>,
  document.getElementById('root')
);