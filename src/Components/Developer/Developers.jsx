import React from 'react';
import s from './Developers.module.css'


class Developers extends React.Component {

  //Component-ը DOM-ից ջնջելու առաջ
  //մյուս դասի թեմա 
  componentWillUnmount() {
    console.log("jnjvec");
  }

  render() {
    return (
      <div className={s.box} onClick={this.props.click}>
        <h1>Name: {this.props.name}</h1>
        <h4>Skilss: {this.props.skilss}</h4>
        <button onClick={this.props.changeTitle}>Change Title</button>
      </div>
    );
  }
}
export default Developers;