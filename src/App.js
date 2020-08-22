import React, {Component} from 'react';
import BetterDevelopers from './Components/Developer/BetterDevelopers';
class App extends Component {
    state = {
        developers: [
            {
                name: "Sebastian",
                skilss: "Html, css"
            }, 
            {
                name: "Baghdaser",
                skilss: "Html, css, js"
            }, 
            {
                name: "Mix",
                skilss: "Html, css, js, React.js, Node.js"
            }
        ],
        title: "Our Developers",
        count: 0,
        showDiv: false
    }

    changeTitleHandler = (arg) => {
        //this.state.title = "new Title"
        this.setState({title: arg})
    }

    changeCount = () => {
        // this.setState({ count: this.state.count + 1   }); այս օրինակով մենք
        // պաշտպանված ենք state-ի ասինխռոն փոփողուտյուններից այս օրինակը շատ դեպքերում
        // ավելի ճիշտ է, և անվտանգ
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })
    }

    showDivHandler = () => {
        this.setState({
            showDiv: !this.state.showDiv
        });
    }

    deletePersonHandler = (devIndex) => {
        const developers = [...this.state.developers];
        developers.splice(devIndex, 1);
        this.setState({developers: developers});
    }
    render() {
        let result = null;
        if (this.state.showDiv) {
			result = <BetterDevelopers
				developers={this.state.developers}
				changeTitleHandler={this.changeTitleHandler.bind(this)}
				clicked={this.deletePersonHandler.bind(this)}
				/>            
            }
        return (
            <div>
                <h1>{this.state.title}</h1>
                {result}
                <button
                    onClick={this
                    .changeTitleHandler
                    .bind(this, "sdadas")}>Change Title</button>
                <button onClick={this.showDivHandler}>Show div</button>

                {/* increment Button */}
                <h2>{this.state.count}</h2>
                <button onClick={this.changeCount}>Increment
                </button>
                <button
                    onClick={() => this.setState({
                    count: this.state.count - 1
                })}>Decriment
                </button>
            </div>
        );
    }
}
export default App;
