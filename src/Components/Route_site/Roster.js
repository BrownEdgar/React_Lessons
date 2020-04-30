// Roster- ի բաղադրիչը համապատասխանում է երկու տարբեր ուղղություններից մեկին
// կախված URL-ից նկարում է ՝FullRoster՝ կամ ՝Player՝ կոմպոնենտներից մեկը
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import FullRoster from './FullRoster'
import Player from './Player/Player'

export default function Roster() {
	return (
		<Switch>
			<Route exact path='/roster' render={(props) => <FullRoster {...props} />} />
			<Route path='/roster/:number' component={Player} />
		</Switch>
	)
}

