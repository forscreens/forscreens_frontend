// src/index.js

import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const root = createRoot(document.getElementById('root'));
console.log('Rendering index.js');
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
