import React from 'react';
import Selectors from "./Selectors";
import Panel from "./Panel";
import "./App.css"

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      activeID: 0,
      wrapperStyle: {
        backgroundImage: `url('${this.props.data[0].img}')`
      },
      panelStyle: {
        background: this.props.data[0].colour
      },
      buttonHover: false,
      buttonStyle: {
        color: '#ffffff'
      }
    };
  }
  _changeActive(id) {
    this.setState({
      activeID: id,
      wrapperStyle: {
        backgroundImage: `url('${this.props.data[id].img}')`
      },
      panelStyle: {
        backgroundColor: this.props.data[id].colour
      }
    });
  }
  _buttonColour() {
    if (!this.state.buttonHover) {
      this.setState({
        buttonHover: true,
        buttonStyle: {
          color: this.props.data[this.state.activeID].colour
        }
      });
    } else {
      this.setState({
        buttonHover: false,
        buttonStyle: {
          color: '#ffffff'
        }
      });
    }
  }
  render() {

    return (
      <section className="wrapper" style={this.state.wrapperStyle}>
        <Selectors
          data={this.props.data}
          activeID={this.state.activeID}
          _changeActive={this._changeActive.bind(this)}
        />
        <Panel
          data={this.props.data[this.state.activeID]}
          panelStyle={this.state.panelStyle}
          buttonStyle={this.state.buttonStyle}
          _buttonColour={this._buttonColour.bind(this)}
        />

      </section>
    );
  }
}
export default App;