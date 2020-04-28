////////////////////////////////////////////////////////////////////////////////
// - Router - սահմանում է մի շարք երթուղիներ(href) և երբ հարցում է գալիս Router-ը կատարում է URL հարցման և երթուղու համեմատություն։Եվ եթե որևիցե ՛href՛ համապատասխանում է URL հարցման-ը, ապա այդ երթուղին ընտրվում է հարցումը մշակելու համար:
// - <Route/> Կոմպոնենտը  React Router-ի գլխավոր կառուցողական բլոկն է.Route-ը օբյեկտ է, որը ներկաըացնում է ամեն մի լինկը, ունի մի շարք ատրիբուտներ։Այստեղ օգտագործված են 2-ը
//		paht։ հասցեի "շաբլոնը",որի հետ  համեմատվելու է URL հասցեն, որին մենք դիմել ենք
//		component: Այն կոմպոնենտը,որը պատասխանատու է տվյալ ուղու մշակման համար
// 		path="/" - համարաժեք է գլխավոր էջին 
// - Switch -  Նաև երթուղի ընտրելու համար սահմանվում է  Switch օբյեկտը. Այն թույլ է տալիս ընտրել գտած առաջին երթուղին և օգտագործել այն հարցման մշակման համար։ Առանց այս օբյեկտի, Router-ը տեսականորեն կարող է օգտագործել մի քանի երթուղի՝ մեկ հարցումը մշակելու համար,եթե դրանք համապատասխանում են հարցման տողին

// կարևոր է իմանալ
//- Այս դեպքում մեզ սերվերից գալիս է միայն մեկ HTML էջ,URL հասցեն կապ չունի
//- <Route>, <Switch> թեգերը պետք է դրված լինի <Router>/<BrowserRouter>-ի մեջ
//- Կոմպոնենտը, որտեղ օգտագործված է <NavLink>-ը նույնպես
//-  exact կվալիֆիկատորը  մատնանշում է, որ հարցման տողը պետք է "խիստ" համապատասխանի "path" արգումենտին /about և /about/
//-  strict "/about/" -միայն "/about/" ոչ /about 
////////////////////////////////////////////////////////////////////////////////

import React, { Component } from 'react'
import Navbar from './Navbar'
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import About from './About/About'
import Developers from '../Developer/Developers';
import Blog from './Blog';


export class App extends Component {
	render() {
		return (
			<Router>
			<div>
				<Navbar/>
					{/* exact եթե չգրենք '/header' էջ չի գնա '/' կտեսնի և կկանգնի*/}
				<Switch>
						<Route exact  path='/' render={()=><h1>Home page</h1>} />
						{/* <Route exact path='/about' render={(props) => <About {...props} name="part2"/>} /> */}
						<Route path='/about/:id?/:name?' render={(props) => <About {...props} name="part2" />}  />
					{/* <Route path='/developers' component={Developers}/> */}
						<Route exact path='/blog' render={() => <Blog title="Blog Page" />}/>
						{/* <Redirect to={'/'} /> */}
				</Switch>
			</div>
			</Router>
		)
	}
}

export default App
