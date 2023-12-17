import { Component } from 'react';
import Users from "./Users";
import Photos from './Photos';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        <Users />
        <Photos />
      </div>
    );
  }
}

export default App;