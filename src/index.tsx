import React from 'react';
import ReactDOM from 'react-dom';
import { Globalstyle } from './style'
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Globalstyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
