import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
   
    state = { lat:null, errorMessage: ''};
    /*
    constructor(props) {
        super(props);

        //THIS IS THE ONLY TIME we do direct assignment
        // to this.state
        this.state = { lat:null, errorMessage: ''};
    }
*/
    
    componentDidMount() {
            console.log('My component was rendered to the screen,componentDidMount() before calling geolocation');   
            window.navigator.geolocation.getCurrentPosition(
                (position) => {
                    console.log(position)
                    //we called setState
                    this.setState({ lat: position.coords.latitude})
                    console.log("aftger set state, inside successfull getCurrentPosition");
                    // we do not do this!!
                    //this.state.lat = position.coords.latitude
                },
                (err) =>  {
                        console.log(err)
                        this.setState( { errorMessage: err.message})
                        console.log("aftger set state, inside unsuccessfull getCurrentPosition, error:"+err);
                }
            );
            console.log('My component was rendered to the screen,componentDidMount() after calling geolocation');   
    }

    /*
    componentDidUpdate() {
        console.log('My component was just updated - it rerendered!');
    }
    */
    //React says we have to define render!!
    render() {
        
        //have error message and no latitude
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }
        //have no error message and have latitude
        if (!this.state.errorMessage && this.state.lat) {
            return <div>Latitude: {this.state.lat}</div>
        }

        //no error message and no error message
        return <div>Loading!</div>
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);