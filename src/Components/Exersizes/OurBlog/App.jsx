import React, { Component } from 'react'
import BlogComponent from './BlogComponent'
import s from './BlogComponent.module.css'
export class App extends Component {
  state = {
    data: [
      {
        id: 1,
        hedding: "Aliquam Hendrerit Mi Metus",
        description: "1Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id impedit eum accusantium maiores optio sequi porro, voluptatem aliquam quae sint facere tempore?"
      },
      {
        id: 2,
        hedding: "Mauris Vulpytatw Cras Amet",
        description: "2Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id impedit eum accusantium maiores optio sequi porro, voluptatem aliquam quae sint facere tempore?"
      },
      {
        id: 3,
        hedding: "Suspendisse Nullam Sodales",
        description: "3Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id impedit eum accusantium maiores optio sequi porro, voluptatem aliquam quae sint facere tempore?"
      }
    ]
  }
  render() {
    const data = this.state.data;
    let result = data.map((elem, index) => {
      return (
        <BlogComponent
          key={elem.id}
          heddings={elem.hedding}>
          {/* props.children  */}
          {elem.description}
        </BlogComponent>

      );
    })
    return (
      <div className={s.box} >
        <h1>Our Blog</h1>
        {result}
      </div>
    )
  }
}

export default App
