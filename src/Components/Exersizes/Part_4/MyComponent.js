import React from 'react'
function MyComponent({ faq, index, toggleFAQ }) {
	return (
		<div
			className={"faq " + (faq.isOpen ? 'open' : '')}
			onClick={() => toggleFAQ(index)}
		>
			<div className="faq-question">
				{faq.description}
			</div>
			<div className="faq-answer">
				{faq.answer}
			</div>
		</div>
	)
}
export default MyComponent;
