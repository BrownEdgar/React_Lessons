////////////////////////////////////////////////////////////////////////////////
// BrowserRouter & HashRouter:
//
// - BrowserRouter — հարկ է օգտագործել երբ սերվերում մշակում ենք դինամիկ փոփողվող տվյալներ 
// - HashRouter — հարկ է օգտագործել երբ ունենք "static" կայք.
////////////////////////////////////////////////////////////////////////////////
import React, {Component} from 'react';
import {HashRouter} from 'react-router-dom'
import Header from "./Header/Header";
import Main from "./Main";

class App extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <Header/>
                    <Main/>
                </div>
            </HashRouter>
        )
    }
}

export default App
