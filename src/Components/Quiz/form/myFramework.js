// այստեղից վերադարձվում է օբյեկտ, որը
//օգտագորշում ենք "QuizCreator"-ում

export function createControl(config, validation) {
  return {
    ...config,
    validation,
    valid: !validation,
    touched: false,
    value: '',
  };
}

export function validate(value, validation = null) {
  let isValid = true;

  // եթե կա ՛required՛ հատկությունը
  if (validation.required) {
    isValid = value.trim() !== '' && isValid;
  }
  return isValid;
}

// այս ֆունկցիան անցնում է բոլոր "input"-րի վրայով
// և եթե բոլորը վալիդ են ապա ֆորման նույնպես կհամարվի վալիդ
export function validateForm(formControls) {
  let isFormValid = true;
  for (let key in formControls) {
    if (formControls.hasOwnProperty(key)) {
      isFormValid = formControls[key].valid && isFormValid;
    }
  }
  return isFormValid;
}
