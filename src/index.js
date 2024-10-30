import { StrictMode, Component } from 'react';
import { createRoot } from 'react-dom/client';

// Fallback coordinates for London
const mockPosition = {
  coords: {
    latitude: 51.5074,
    longitude: -0.1278,
  }
};

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
      (err) => this.setState({ lat: mockPosition.coords.latitude })
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
