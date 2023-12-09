import React, { Component } from 'react'
import MyComponent from './MyComponent'
import Children from './Children'

class App extends Component {
  state = {
    data: [
      {
        description: "1Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id impedit eum accusa" +
          "ntium maiores optio sequi porro, voluptatem aliquam quae sint facere tempore?"
      }, {
        description: "1Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id impedit eum accusa" +
          "ntium maiores optio sequi porro, voluptatem aliquam quae sint facere tempore?"
      }
    ]
  }

  render() {
    return (
      <div>

        <MyComponent>

          <p>"1Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id impedit eum accusantium maiores optio sequi porro, voluptatem aliquam quae sint facere tempore?"
            <span>sdadlsd  SPAN</span>
          </p>
          <p>{this.state.data[0].description}</p>
          <p>"1Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id impedit eum accusantium maiores optio sequi porro, voluptatem aliquam quae sint facere tempore?"</p>
          <p>{this.state.data[1].description}</p>

        </MyComponent>
        <Children>
          <h1>heddings for props.children</h1>
          <p>{this.state.data[0].description}</p>
          <h3>Այս տվյալները տպված են "props.children"-ով</h3>
          <p>"props.children"-ը ԳՐՎՈՒՄ Է ԿՈՄՊՈՆԵՆՏԻ ՄԵՋ</p>
        </Children>

      </div>
    )
  }
}

export default App
