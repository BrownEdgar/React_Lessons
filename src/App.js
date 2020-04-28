import React, {Component} from 'react';
import Developers from './Components/Developer/Developers';

class App extends Component {
    state = {
        developers: [
            {
                name: "Sebastian",
                skilss: "Html, css"
            }, {
                name: "Baghdaser",
                skilss: "Html, css, js"
            }, {
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
        const d = this.state.developers;
        let result = null;

        if (this.state.showDiv) {
            result = d.map((elem, index) => {
                return (<Developers
                    click={() => this.deletePersonHandler(index)}
                    key={index}
                    name={elem.name}
                    skilss={elem.skilss}
                    changeTitle={this
                    .changeTitleHandler
                    .bind(this, elem.name)}/>);
            })
        }
        return (
            <div>
                <h1>{this.state.title}</h1>
                {result}
                {/*
			<Developers
			name={d[0].name}
			skilss={d[0].skilss}/>
				<Developers
			name={d[0].name}
			skilss={d[0].skilss}/>
			<Developers
				name={d[1].name}
				skilss={d[1].skilss} />
			<Developers
				name={d[2].name}
				skilss={d[2].skilss}
			/> */}
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
