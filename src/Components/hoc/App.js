import React, {
	Component
} from 'react';
import ClickButton from './ClickButton';
import Copy from './copy';




class App extends Component {

	render() {
	
		return ( 
		<div className = "App" >
			<ClickButton/>
			<Copy/>
		</div>
		);
	}
}

export default App;