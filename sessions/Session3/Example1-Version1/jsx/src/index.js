// Import the React and ReactDOm libraries
import React from 'react';
import ReactDOM from 'react-dom';
import person from './person';
import prs from './person';

import { baseData } from './utility';
import { clean } from './utility';


function getButtonText() {
    return 'Click on me!';
}

// Create a 2015 Arror function
const App = () => {
    
    return (
        <div>
        <label className="label" htmlFor="name"> { person.name } </label>
       
        { baseData }
        { clean() }
        </div>
        );
}

 // Tale the react component and show it on the screen
 ReactDOM.render(
    <App />,
    document.querySelector('#root')
 );
