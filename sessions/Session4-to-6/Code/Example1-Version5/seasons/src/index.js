import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {

    constructor(props) {
        super(props);

        //THIS IS THE ONLY TIME we do direct assignment
        // to this.state
        this.state = { lat:null};

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                 console.log(position)
                //we called setState
                this.setState({ lat: position.coords.latitude})

                // we do not do this!!
                //this.state.lat = position.coords.latitude
            },
            (err) => console.log(err)
        );

    }
     //React says we have to define render!!
    render() {
        
        return <div>Latitude: {this.state.lat} </div>
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);