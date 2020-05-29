import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css'; 
// import App from "./App" 
import App from "./Components/React_HOOKS/useReducer/App"
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	//<React.StrictMode>
	<App />,
	//</React.StrictMode>,
	document.getElementById('root'));

serviceWorker.unregister();
// <React.StrictMode> ռեժիմում React--ը աշխատում է 2 փուլով/Էտապով :
//	- ՌԵՆԴԵՌԻՆԳԻ փուլ(render phase)Կանխորոշում է ,
// թե ինչ փոփոխություններ պետք է արվեն DOM-ում,
// այս փուլի ընթացքում React-ը կանչում է render-ը,
// և հետո արդյունքը համեմատում է նախորդ render-ի արդյունքի հետ
//	- ՖԻՔՍՄԱՆ/ԱՐՁԱՆԱԳՐՄԱՆ ՓՈՒԼ(commit phase) — այստեղ React- ը կիրառում է
// գրանցված ցանկացած փոփոխություն, թարմացնում և ջնջում է DOM հանգույցները
// կանչում է ՝կյանքի ցիկլի՝ մեթոդներ componentDidMount և componentDidUpdate-ը:

// Դրա համար ՝կյանքի ցիկլի՝ որոշ մեթոդներ կանչվում են 2 անգամ

//font-family: 'Montserrat', sans-serif;