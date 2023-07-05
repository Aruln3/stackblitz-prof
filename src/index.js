import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom';

import App from './App';
import MyComponent from './MyComponent';
import Header from './Header';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <MyComponent />
    <Header />
  </StrictMode>
);
