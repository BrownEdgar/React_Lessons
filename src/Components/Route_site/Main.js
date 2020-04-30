// The Main component renders one of the three provided Routes (provided that
// one matches). Both the /roster and /schedule routes will match any pathname
// that starts with /roster or /schedule. The / route will only match when the
// pathname is exactly the string "/"
import React, {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Home from "./Home";
import Roster from './Roster';

export default class Main extends Component {
    state = {
        isLogin: true
    }
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home}/> 
					{	
						this.state.isLogin
                        ? <Route path='/roster' component={Roster}/>
                        : <Redirect from={'/roster'} to={'/'}/>
					}

                </Switch>
            </main>
        )
    }
}
