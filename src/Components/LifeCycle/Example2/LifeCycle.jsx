////////////////////////////////////////////////////////////////////////////////
// - կոմպոնենտում դիտարկվում են 1․ ՛կյանքի փուլերը ՛ 2․ console.log-ին css
// կարգավորումներ տալու եղանակը 3․ Կոնպոնենտին `props`-ով զանգված փոխանցելը
// //////////////////////////////////////////////////////////////////////////////
import React, {Component} from 'react'
import ChildComponent from './ChildComponent'
import Error from './Error'
import "./LifeCycle.css";

// styles for console.log
const color = `
	border-bottom:2px solid tomato; 
	color: #000;
	background:#f2f2f2;
	border-radius:3px;
	font-family: 'Indie Flower', cursive;
	padding:5px;`;

export default class LifeCycle extends Component {
    constructor(props) {
        console.log("%c App constructor Run", color);
        console.log(`-------------------`);
        super(props);
        this.state = {
            params: [
                {
                    constructorValue: `Parent Constructor`,
					CDU1: "shouldComponentUpdate",
					CDU2: "shouldComponentUpdate",
					CDU3: "shouldComponentUpdate",
					CDU4: "shouldComponentUpdate"
                }
            ],
            name: "LifeCycle Methods",
            renderCount: 0,
            followDeleting: true
        }
    }

    render() {
        console.log('%cApp render method run', color);
        const {name} = this.state;
        const {followDeleting} = this.state;
        const params = this.state.params;
        return (
            <div className="main">
                {followDeleting
                    ? (<ChildComponent
                        name={name}
                        allParams={params}
                        f1={this.changeStateValue}
                        f2={this.deleteComponent}
                        count={this.state.renderCount}/>)
                    : <Error f2={this.deleteComponent}/>}
            </div>
        )
    }
    changeStateValue = () => {
        this.setState(prevState => {
            return {
                constructorValue: "change",
                renderCount: prevState.renderCount + 1
            }
        });
    }
    deleteComponent = () => {
        this.setState(prevState => {
            return {
                followDeleting: !prevState.followDeleting
            };
        });
    }
	// /////////////////////////////////////////////////////
	// եթե կան հայտարարված նոր մեթոդներ՝չի աշխատի!
    // UNSAFE_componentWillMount() {
    //     console.log('%cUNSAFE_componentWillMount', color);
    // }
    // ///////////////////////////////////////////////////////
    static getDerivedStateFromProps(props, state) {
        console.log('%cgetDerivedStateFromProps', color);
        return null;
    }
    // ///////////////////////////////////////////////////////
    shouldComponentUpdate(nextProps, nextState) {
        console.log('nextState', nextState.renderCount);
        let result = nextState.renderCount < 4;
        if (result) {
            console.log("%cshouldComponentUpdate --> OK render", color);
            return true;
        } else {
            console.log("%cshouldComponentUpdate --> Stop RENDER", `background:red;padding:5px; color:white`);
            return false;
        }

    }
    // ///////////////////////////////////////////////////////
    componentDidMount() {
        console.log("%cApp componentDidMount", color);
	}

	// ///////////////////////////////////////////////////////
	//componentDidUpdate-ին, որպես 3 արգումենտ  
	//փոխանցվում է այս ֆունկցիայի վերադարձվող արժեքը։
	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('%cgetSnapshotBeforeUpdate', color);
		return "snapshot default value";
	}
    // ///////////////////////////////////////////////////////
	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('%cApp componentDidUpdate', color);
		console.log('"snapshot"', snapshot);
	
    }
    
}
