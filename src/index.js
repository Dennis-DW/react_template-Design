import React from 'react';
import { createRoot } from 'react-dom';
import App from './App';
import './index.css';

const root = document.getElementById('root'); // Replace 'root' with the ID of your root HTML element

const appRoot = createRoot(root);
appRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

