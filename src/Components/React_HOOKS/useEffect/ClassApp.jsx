import React, {Component} from 'react'
import "../index.css"

export default class ClassApp extends Component {
    state = {
        count: 0,
        x: null,
        y: null
    }
    inctementHandler = () => {
        this.setState({
            count: this.state.count + 1
        });
    }
    //----------------------- add start-----------------------
    componentDidMount() {
        document.title = `Clickeld ${this.state.count} times`;
        window.addEventListener("mousemove", this.handleMouseMove)
    }
    componentDidUpdate() {
        document.title = `Clickeld ${this.state.count} times`;
    }
    handleMouseMove = event => {
        this.setState({x: event.pageX, y: event.pageY});

    }
    componentWillUnmount() {
        window.removeEventListener("mousemove", this.handleMouseMove);
    }

    //----------------------- add end-----------------------
    render() {
        return (
            <div className="main">
                <h1>With Classes</h1>
                <button onClick={this.inctementHandler}>Increment Me {this.state.count}</button>
                <hr/>
                <h2>x position : {this.state.x}</h2>
                <h2>y position : {this.state.y}</h2>
                <form action="">
                    <input type="text"/>
					<input type="text"/>
				</form>
				
            </div>
        )
    }
}
