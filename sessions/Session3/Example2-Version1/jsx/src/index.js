// Import the React and ReactDOm libraries
import React from 'react';
import ReactDOM from 'react-dom';
import additionFunction from "./sum"

function getButtonText() {
    return 'Click on me!';
}

// Create a 2015 Arror function
const App = () => {

    let values = [10,20,30,40,50];
    let total = additionFunction(values);
    console.log(`Total: ${total}`);
    
    return (
        <div>
        <label className="label" htmlFor="name">Enter name:</label>
        <input id="name" type="text"/>
        <button style={{backgroundColor: "blue", color: "white"}}>{getButtonText()}</button>
        </div>
        );
}

 // Tale the react component and show it on the screen
 ReactDOM.render(
    <App />,
    document.querySelector('#root')
 );
