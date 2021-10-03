import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css'; 
import App from "./Components/X/Example2/App" 
// import App from "./Components/10_React_app/image-gallery/finished/App"

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	// <React.StrictMode>
	<App/>,
	// </React.StrictMode>,
	document.getElementById('root'));

serviceWorker.unregister();




