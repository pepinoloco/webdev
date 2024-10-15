// Import the React and ReactDOm libraries
import React from 'react';
import ReactDOM from 'react-dom';
import additionFunction from "./sum"
import { asyncAdd } from "./async";

function getButtonText() {
   
    return 'Click on me!';
}

function testIt() {
    let values = [10, 20, 30, 40, 50];
    let total = asyncAdd(values);
    console.log(`Main Total: ${total}`);
}
// Create a 2015 Arror function
const App = () => {

    
    
    return (
        <div>
        <label className="label" htmlFor="name">Enter name:</label>
        <input id="name" type="text"/>
        <button style={{backgroundColor: "blue", color: "white"}} onClick={testIt}>{getButtonText()}</button>
        </div>
        );
}

 // Tale the react component and show it on the screen
 ReactDOM.render(
    <App />,
    document.querySelector('#root')
 );
