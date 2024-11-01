import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
  return (
    <div>
      <div>hello</div>
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
