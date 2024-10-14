import React from 'react'
import { createRoot } from 'react-dom/client';

const App = () => {
  return (
    <div>
       <p>Assignment 1 - Part 1</p>
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
