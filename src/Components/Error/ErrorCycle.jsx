// error-ի մշակումը կատարվում է componentDidCatch մեթոդի օգնությամբ
// որը 

import { Component } from 'react';

class ErrorClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myerror: false,
      errorMessage: ""
    }
  }
  //Բռնում է սխալները և սիրուն մատուցում այն
  componentDidCatch(error, info) {
    console.log(info);
    this.setState({
      myerror: true,
      errorMessage: error.message
    })
  }
  render() {
    const { myerror, errorMessage } = this.state;
    if (myerror) {
      return (
        <div>
          <h1 style={{ color: 'red' }}>{errorMessage}</h1>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorClass;