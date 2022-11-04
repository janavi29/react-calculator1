import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

import Calculator from './calculator';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Calculator />
  </StrictMode>
);
