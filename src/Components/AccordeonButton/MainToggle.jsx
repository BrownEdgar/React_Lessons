// 	1. Այս օրինակում ներկայացված է կոճակի միջոցով "state"-ում առկա արժեքի փոփոխության օրինակ, որը նաև հանգեցնում է նոր կոնտենտի արտածմանը html-ում կախված արժեքից 
//	2. արժեքի ստուգում && օպերատորի միջոցով  Условный рендеринг
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { Component } from 'react';
import './contentToggle.css';

class MainToggle extends Component {
  state = {
    isOpen: false
  }

  changeClassHandler = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render() {
    const isOpen = this.state.isOpen;
    let summaryClassName = "content-toggle-summary";

    if (isOpen) {
      summaryClassName += " content-toggle-summary-open";
    }
    return (
      <div className="App">
        <button onClick={this.changeClassHandler} className={summaryClassName}>change Title</button>
        {isOpen && (
          <div className="content-toggle-details">
            <p>
              A taco is a traditional Mexican dish composed of a corn or
              wheat tortilla folded or rolled around a filling.
            </p>
          </div>
        )}
      </div>
    );
  }

}
export default MainToggle;


