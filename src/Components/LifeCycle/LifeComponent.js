// //////////////////////////////////////////////////////////////////////////////
// 	Component LifeCycle: 	կարդալ ավելին 	--> https://habr.com/ru/post/358090/
// 					-->https://ru.reactjs.org/docs/react-component.html#constructor
// 					-->https://www.youtube.com/watch?v=auAtFC5nfTs&list=PLcvhF2Wqh7DNVy1OCUpG
// 3i5lyxyBWhGZ8&index=55
// - <React.StrictMode> - ռեժիմում կհարուցի Warning-եր
// - componentWillUnmount()- ը ներկաըացված է ՛./Components/Developer/Developers՛
// ֆայլում
// - React 17,0-ից : Կջնջվեն componentWillMount, componentWillReceiveProps և
// componentWillUpdate. (Կաշխատեն միայն կըանքի փուլկերի նոր անուները  «UNSAFE_».)
// - UNSAFE_ Это толчок, чтобы заставить всех разработчиков React прекратить
// использовать эти методы.
// //////////////////////////////////////////////////////////////////////////////

import React from 'react'

class LifeComponent extends React.Component {

    UNSAFE_componentWillReceiveProps(nextProps) {
        console.log('nextProps', nextProps)
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('nextProps', nextProps);
        console.log('nextState', nextState);
        return true;

    }
    //WARNING! To be deprecated in React v17. Use componentDidUpdate instead.
    UNSAFE_componentWillUpdate(nextProps, nextState) {
        console.log('nextProps', nextProps);
        console.log('nextState', nextState)
    }
    render() {
        console.log('LifeComponent render')
        return (
            <div>
                <h1>{this.props.name}</h1>
            </div>
        )
    }

}
export default LifeComponent;