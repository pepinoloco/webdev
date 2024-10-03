import React from 'react'
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));

const App = () => {
  return <div>Hi there!</div>;
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
