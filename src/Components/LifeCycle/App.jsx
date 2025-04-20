import { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    console.log('constructor');
    super(props);
    this.state = {
      name: 'b',
    };
  }
  // UNSAFE_componentWillMount() {
  // 	console.log('componentWillMount');
  // }
  componentDidMount() {
    console.log('done!');
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps');
    if (prevState.name === 'a') {
      return { name: 'levon' };
    } else {
      return { name: 'Anihit' };
    }
  }

  shouldComponentUpdate(nextProps, nextState) {}
  render() {
    console.log('render');
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}
