import { StrictMode, Component } from 'react';
import { createRoot } from 'react-dom/client';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { lat: null };
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => console.log(err)
    );
  }

  render() {
    return (
      <div>Latitude: {this.state.lat}</div>
    );
  }
}

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
