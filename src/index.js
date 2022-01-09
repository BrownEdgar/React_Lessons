import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/submit_disabled/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router} from 'react-router-dom'

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<App />
		</Router>


	</React.StrictMode>,
	document.getElementById('root')
);

reportWebVitals();
