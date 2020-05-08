// այստեղից վերադարձվում է օբյեկտ, որը 
//օգտագորշում ենք "QuizCreator"-ում

export function createControl(config, validation) {
	return {
		...config,
		validation,
		valid:!validation,
		touched:false,
		value:''
	}
}