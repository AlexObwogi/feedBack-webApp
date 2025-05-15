import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// This is like planting your app in the webpage's garden
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
