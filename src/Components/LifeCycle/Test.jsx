import { Component } from 'react'
import LifeComponent from './LifeComponent';

export default class Test extends Component {
  constructor(props) {
    super(props);
    console.log("------------------------");
    console.log("constructor run");
    this.state = {
      count: 0,

    }
  }
  UNSAFE_componentWillMount() {
    console.log('UNSAFE_componentWillMount');
  }


  componentDidMount() {
    console.log("------------------------");
    console.log("componentDidMount");
  }


  render() {
    console.log("------------------------");
    console.log("render run");
    return (
      <div>{this.state.count}</div>
    )
  }
}

