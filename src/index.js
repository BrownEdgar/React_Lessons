import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css'; 
import App from "./Components/Auth/App"
import { BrowserRouter as Router } from 'react-router-dom'

// import App from "./Components/10_React_app/image-gallery/finished/App"

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<React.StrictMode>
	
		<Router>
			<App />
		</Router>

	</React.StrictMode>,
	document.getElementById('root'));

serviceWorker.unregister();




