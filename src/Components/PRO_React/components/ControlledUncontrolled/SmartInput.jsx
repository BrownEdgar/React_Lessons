///////////////////////////////////////////////
// Controlled & Uncontrolled Component Pattern
//
// Մեկ կոմպոնենտ, որ կարող է աշխատել երկու ռեժիմով:
//
// 1. CONTROLLED (Վերահսկված): parent-ը լիովին կառավարում է value-ն
// 2. UNCONTROLLED (Անվերահսկված): component-ը ինքն վերահսկում է իր վիճակը
//
// Գործածականի համար: Form inputs, որ բայց պետք է
// կամ կախյալ լինեն parent state-ից կամ ինքնուրույն
///////////////////////////////////////////////

import { useState } from 'react';

export const SmartInput = ({
  value,
  onChange,
  placeholder = 'Type something...',
}) => {
  const [internalValue, setInternalValue] = useState('');
  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : internalValue;

  const handleChange = (e) => {
    const newValue = e.target.value;
    if (isControlled) {
      onChange?.(newValue);
    } else {
      setInternalValue(newValue);
    }
  };

  return (
    <div className='smart-input-wrapper'>
      <input
        type='text'
        value={currentValue}
        onChange={handleChange}
        placeholder={placeholder}
        className='smart-input'
      />
      <div className='input-display'>
        <span className='label'>Value:</span>
        <span className='value'>{currentValue || 'empty'}</span>
      </div>
    </div>
  );
};

export default SmartInput;
