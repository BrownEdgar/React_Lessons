import { Component } from 'react';
import ClickButton from './ClickButton';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange() {
    console.log('handleChange');
  }
  render() {
    return (
      <div className='App'>
        <ClickButton name='N1' handleChange={this.handleChange} />
      </div>
    );
  }
}

export default App;
