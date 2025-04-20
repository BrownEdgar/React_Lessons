////////////////////////////////////////////////////////////////////////////////
// Exercise:
//
// - Ցույց տալ `DATA.title` արժեքը <h1>-ի մեջ
// - Ցույց տալ <ul> թեգ ամեն մի  `state.items` Էլեմենտներով <li>-ի մեջ
// - Հետո ցույց տալ միայն ՝type: "mexican"՝ <li>-ը, (հուշում: կիրառեք this.state.items.filter(...))
//
////////////////////////////////////////////////////////////////////////////////

import { Component } from 'react';

export class Exercise extends Component {
  state = {
    title: 'Menu',
    items: [
      { id: 1, name: 'tacos', type: 'mexican' },
      { id: 2, name: 'burrito', type: 'mexican' },
      { id: 3, name: 'tostada', type: 'mexican' },
      { id: 4, name: 'mushy peas', type: 'english' },
      { id: 5, name: 'fish and chips', type: 'english' },
      { id: 6, name: 'black pudding', type: 'english' },
    ],
  };
  render() {
    return <div></div>;
  }
}

export default Exercise;
