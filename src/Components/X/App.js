import React from 'react';
import MapMethod from './Mapmethod'

class App extends React.Component {
    state = {
        countNumnber: 0,
		questions:[
            { question: "Հարց առաջին",
              answers: "Պատասխան առաջին"
              
            },
            { question: "Հարց երկրորդ",
              answers: "Պատասխան Երկորդ"
              
            },
            { question: "Հարց երրորդ",
              answers: "Պատասխան երրորդ"
              
            },
            { question: "Հարց չորրորդ",
              answers: "Պատասխան չորրորդ"
              
            }
        ],
        answer: "",
        generatedText:""
    }

    showAnswerHandler = (arg) => {
       this.setState({
        answer: arg  
       }
        
       );
    }
    generateHnandler = (event) => {
      this.setState({
        generatedText: event.target.value
      })
    }
    render(){
        const allQuestions = this.state.questions;
        return(
            <div className="anotherbox">
                <div><h1>{this.state.countNumnber}</h1></div>
                <div className="anotherbox__buttons">
                <button onClick={() => this.setState({countNumnber: this.state.countNumnber + 5})}>5</button>
                <button onClick={() => this.setState({countNumnber: this.state.countNumnber + 15})}>15</button>
				<button onClick={() => this.setState({ countNumnber: this.state.countNumnber + Math.floor(Math.random() * (20 - 1) + 1 )  })}>1-20</button>
                <button onClick={() => this.setState({countNumnber: this.state.countNumnber = 0})}>0</button>
                </div>
           
            <div className="box">
               {allQuestions.map((elem, index) =>{
                   return(
                    <MapMethod 
                    key={index} 
                    quest = {elem.question}
                    answ = {this.state.answer}
                    showAnswer = {this.showAnswerHandler.bind(this, elem.answers)}
                    generate = {this.generateHnandler}
                    willGenerate = {this.state.generatedText}
                    />
                   )
               })}
            </div>
            </div>
            
        )
        
    }
}
export default App