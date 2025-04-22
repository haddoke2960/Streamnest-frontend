import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // <-- no extension = best practice in Vite
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);