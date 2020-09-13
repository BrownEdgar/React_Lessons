// state = {
// 	isFormValid: false,
// 	formControls: {
// 		email: {
// 			value: "",
// 			type: "email",
// 			label: "Email",
// 			errorMessage: "Введите корректный email",
// 			valid: false,
// 			touched: false,
// 			validation: {
// 				reqired: true,
// 				email: true
// 			}
// 		},
// 		password: {
// 			value: "",
// 			type: "password",
// 			label: "Пароль",
// 			errorMessage: "Введите корректный пароль",
// 			valid: false,
// 			touched: false,
// 			validation: {
// 				reqired: true,
// 				minLength: 7
// 			}
// 		}
// 	}
// }
function fGen(...params) {
	console.log(params);
	const state = {
		isFormValid: false,
		formControls: params.map(elem => pbjectGenerator(elem))
	}

	return state;
}
function pbjectGenerator(val) {
	return  {
		[val]: {
			value: "",
			type: `${val}`,
			label: "Пароль",
			errorMessage: `please input a valid ${val}`,
			valid: false,
			touched: false,
			validation: {
				reqired: true,
				minLength: 7
			}
		}
	}
	
}
console.log(fGen('password', "email"));