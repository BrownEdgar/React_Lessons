import React, {Component} from 'react'
import MyComponent from '../Part_4/MyComponent'

export class App extends Component {
    state = {
        isOpen: false
    }
    render() {
        return (
            <div>
                {this.state.isOpen && (
                    <div>
                        <h1>Hedding</h1>
                        <MyComponent/>
                    </div>
                )}
                <p>aranc heder</p>

            </div>
        )
    }
}

export default App
