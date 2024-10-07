// Import the React and ReactDom libraries
import React from 'react';
import ReactDOM from 'react-dom'

function getButtonText() {
  return 'Click on me!';
}


//Create a react component
const App = () => {
  const buttonText = { text: 'Click me' };
  const style = {backgroundColor: "blue", color: "white"};

  return (
    <div>
      <label className="label" htmlFor="name">Enter name:</label>
      <input id="name" type="text" />
     
      
      <button style={style}>{buttonText.text}</button>

    </div>
  );

}

//Take the react component and show it on the screen.
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);