import React, { Component } from 'react'
import ReactDOM from 'react-dom'


class MyPortal extends Component {
  el = document.createElement('div');
  componentDidMount() {
    document.body.appendChild(this.el);
  }
  componentWillUnmount() {
    // որտեղ տեղադրել
    document.body.removeChild(this.el);
  }

  render() {
    //Պորտալի ստեղծում !
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

export default class App extends Component {
  state = {
    count: 0
  }
  handlerClick = () => {
    this.setState(({ count }) => { return { count: count + 1 } })

  }
  render() {
    return (
      <div style={{ fontSize: "3em", textAlign: 'center', }} onClick={this.handlerClick}>
        <h1>About Portals</h1>
        <p style={{ borderBottom: `2px solid #222`, width: "20%", margin: "35px auto", }}>{this.state.count}</p>
        <MyPortal>
          <div style={{
            textAlign: 'center',
            border: "2px solid #000",
            width: "80%",
            margin: "0 auto",
            padding: "10px 30px"
          }}>
            <h1>This is portal</h1>
            <p>Ipsum, dolor sit amet consectetur adipisicing elit. <span>PORTAL TEXT</span> Vero esse fugit dolores saepe odio minima ipsum rem excepturi aperiam. Labore!</p>
            <button>Click to change count</button>
          </div>
        </MyPortal>
      </div>
    )
  }
}
