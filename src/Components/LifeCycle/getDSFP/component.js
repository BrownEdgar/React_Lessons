// // OLD WAY
// componentWillReceiveProps(newProps) {
//     if (this.props.visible === true && newProps.visible === false) {
//         registerLog('dialog is hidden');
//     }
// }
// // NEW WAY
// static getDerivedStateFromProps(nextProps, prevState) {
//     if (this.state.visible === true && nextProps.visible === false) {
//         registerLog('dialog is hidden');
//     }
//     return {visible: nextProps.visible};
// }
// //ORINAK
// lass XXX extends React.Component {
// 	state = {
// 		token: null
// 	}

//   static getDerivedStateFromProps(props){
// 		if (props.token) {
// 			return {
// 				token: props.token
// 			}
// 		}
// 		return null;
// 	}
// }
// В течение долгого времени метод жизненного цикла componentWillReceiveProps
// был единственным способом обновления состояния в ответ на изменение свойств
// props без дополнительной отрисовки. В версии 16.3 мы ввели ему на смену новый
// метод жизненного цикла: getDerivedStateFromProps