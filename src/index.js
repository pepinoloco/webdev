// Import react and react-dom
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
const App = () => {
    return <div>Hi there!</div>;
}

// Show the react component on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
