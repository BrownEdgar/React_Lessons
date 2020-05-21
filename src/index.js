import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css'; 
// import App from "./App" 
// import App from './Components/Exersizes/Part_4/App';
// import App from"./Components/Simple_form/App" 
// import App from "./Components/Navbar/App"
// import App from "./Components/Site/App" 
// import App from "./Components/Route_site/App"
// import App from "./Components/Error/App" 
// import App from "./Components/React_Fragment/App"
// import App from "./Components/LifeCycle/Example2/ErrorMethods/App"
// import App from "./Components/Exersizes/Das8-9/App"
// import App from "./Components/SITE/App";
// import data from "./Components/SITE/data"
// import App from "./Components/Context/App"
// import App from "./Components/Auth/App"
// import App from "./Components/Quiz/QuizCreator"
// import App from "./Components/hoc/App"
// import App from "./Components/hoc/Without_HOC/App"
//import App from "./Components/MyContext/App"
//import App from "./Components/HOC_test/App"
//import App from "./Components/Timer/start/App";
import App from "./Components/React_HOOKS/useRef/functionalRef";
//import App from "./Components/React_HOOKS/useRef/functionalRef";
//import App from "./Components/React_HOOKS/useEffect/NetWorkStatus";
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