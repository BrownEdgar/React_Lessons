///////////////////////////////////////////////
// Orchestrator Pattern (Օրխեստրատոր Շաբլոն)
//
// Այս շաբլոնում մի միջուկային "Օրխեստրատոր" կոմպոնենտ
// վերահսկում է ամբողջ պետական կառավարումը և տրամաբանությունը։
// Մյուս բոլոր կոմպոնենտները մնում են պարզ և անկախ,
// միայն ստանում են դրանց համար անհրաժեշտ տվյալներ ու callback-ներ։
//
// Առավելություն: չկա state անցում մի կոմպոնենտից մյուսին
///////////////////////////////////////////////

import { useState } from 'react';

export const Orchestrator = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    product: '',
    address: '',
    payment: '',
  });

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, children.length - 1));
  };

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const handleUpdateField = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className='orchestrator-container'>
      {/* Հիմնական տեղեկատվություն պետք կա այս կոմպոնենտից */}
      {children[currentStep]?.({
        step: currentStep,
        formData,
        onNext: handleNext,
        onPrev: handlePrev,
        onUpdateField: handleUpdateField,
      })}
    </div>
  );
};

export default Orchestrator;
