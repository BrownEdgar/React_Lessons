import { Component } from 'react'
import MyComponent from './MyComponent'
import "./style.css";

export class App extends Component {
  state = {
    questions: [
      {
        description: "React.js-ը գրադարան է՞, թե Ֆռեյմվո՞րկ",
        answer: "React.js-ը գրադարան է",
        isOpen: false
      },
      {
        description: "ԻՆչ ունի 'Class' Կոմպոնենտը, ի տարբերություն 'Function' Կոմպոնենտի՞",
        answer: "state",
        isOpen: false
      },
      {
        description: "React-ում, որ մեթոդն է կանչվում ԱՌԱՋԻՆԸ՞ ",
        answer: "Առաջինը կանչվում է `ReactDom.render()` մեթոդը",
        isOpen: false
      },
      {
        description: "Որ Ընկերությունն է ստեղծել React․js-ը՞ ",
        answer: "Facebook",
        isOpen: false
      },
    ],
  }

  showDivHandler = (index) => {

    this.setState(this.state.questions.map((elem, i) => {

      if (i === index) {
        elem.isOpen = !elem.isOpen;
      } else {
        elem.isOpen = false;
      }
      return elem;
    }));
  }

  render() {
    const question = this.state.questions;
    return (
      <div className="App">
        <div className="faqs">
          {question.map((faq, i) => (
            <MyComponent faq={faq} key={i} index={i} toggleFAQ={(e) => this.showDivHandler(e)} />
          ))}
        </div>
      </div>
    );
  }
}

export default App
// with Hooks gitHub link --> https://github.com/TylerPottsDev/react-accordion