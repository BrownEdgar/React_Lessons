import { Component } from 'react';
import classes from './Child.module.css';
export default class Child extends Component {
  render() {
    return (
      <div className={classes.infobox}>
        <span>AxonVip | 01 Aug, 2019</span>
        <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
        <button onClick={() => this.props._deleter(this.props.id)}>
          Delete
        </button>
      </div>
    );
  }
}
