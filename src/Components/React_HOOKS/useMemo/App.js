////////////////////////////////////////////////////////////////////////////////
// ծրագրավորման մեջ ՝ ֆունկցիայի կատարման արդյունքների պահպանում ՝ վերահաշվարկը կանխելու համար.
// useMemo - ն կվերահաշվարկի արժեքը միայն այն դեպքում, երբ կախվածության որևէ արժեքը փոխվել է,
// դրանով իոկ խուսափելով ավելնորդ 'render'-րից
// Պետք է հիշել նաև, որ useMemo-ին փողանցած ֆունկցիան, աշխատում է 'render'-ի ժամանակ.
// useEffect-ի նման ստանում է 2-րդ արգումենով կախվածությունների զանգված,
////////////////////////////////////////////////////////////////////////////////
import React, {useState, useMemo} from 'react'
import "./App.css"
import Child from './Child';

export default function App() {
	const [count, setCount] = useState(0);

const memo = useMemo(() => {
	return <Child/>
}, [])

	function clickHandler(){
		setCount(count +1)
	}
	return (
		<div className="box">
			<h1>useMemo hook</h1>
			<h3>count: {count}</h3>
			<button onClick={clickHandler}>Increment</button>
			<h3>Normal render</h3>
			<Child></Child>
			<h3>Memo Render</h3>
			{memo}
		</div>
	)
}
//  "Мемоизация" - ծրագրերի արագությունը մեծացնելու համար օգտագործվող օպտիմիզացման մեթոդներից մեկն է: Ֆունկցիան կանչվելուց  առաջ ստուգվում է, արդյոք այն կանչվել է դրանից առաջ.

//եթե չի կանչվել, ապա Ֆունկցիան կանչվում  է, և դրա կատարման արդյունքը պահպանվում է.
//եթե կանչվել է, ապա օգտագործվում է պահված արդյունքը: