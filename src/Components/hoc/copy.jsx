// //////////////////////////////////////////////////////////////////////////////
// SuperF-ը այստեղ Higher-Order Components է:
//
// -this.props.handleChange-ը այստեղ կոմպոնենտին փոխանցում է HOC-ը, ոչ թե նրա ծնող՝ App.js-ը
////////////////////////////////////////////////////////////////////////////////
import React from 'react';
import SuperF from './superF';

class Copy extends React.Component {
  state = {
    count: 0,
  };

  incrementvalue = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  };
  render() {
    const { count } = this.state;
    return (
      <>
        <p>{this.props.name}</p>
        <button onClick={this.incrementvalue}>Click {count} angam</button>
        <button onClick={this.props.handleChange}>handleChange</button>
      </>
    );
  }
}
export default SuperF(Copy);
