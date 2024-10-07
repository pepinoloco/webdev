import React from 'react'
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));

const App = () => {

/*
  const buttonText = { text: 'Click me' };
  const style = { backgroundColor: "blue", color: "white" };

  return (
    <div>
      <label className="label" htmlFor="name">Enter name:</label>
      <input id="name" type="text" />
      <button style={style}>{buttonText.text}</button>
    </div>
  );
*/
	return <div>Hi there</div>
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
