import React, { useContext, useState,useEffect } from "react"
import { MyContext } from "./useContext"
import Css from "./style.module.css"

export default function App() {
	const context = useContext(MyContext);
	const [quantity, setQuantity] = useState(context.quantity);
	const [price, setPrice] = useState(0);
	
//Ֆունկցիան տեղափոխում ենք useEffect-ի մեջ, որպեսզի 
//quantity փոփոխությունից հետո, React-ը նոր կանչի "setPrice" ֆունկցիան
useEffect(() => {
	setPrice(context.price * quantity);

}, [quantity])

	const changeQuantity =  (elem) => {

		switch (elem.target.name) {
			case "increment":
				setQuantity( (prevValue) =>{
					return  prevValue + 1
				});
				break;
			case "decrement":
				if (quantity <= 1) {
					elem.disabled = true; 
				} else {
					setQuantity(quantity - 1);
				}
				break;
		}
	}


	return (
		<div className={Css.return_div}>
			<h1>{context.name}</h1>
			<img className={Css.photo} src={context.photo} alt="Shirt" />
			<div className={Css.price_div}>
				<h2>{price + " $ `"}</h2>
				<h2 className={Css.h2_count}>{quantity + " Quantity"}</h2>
			</div>
			<div>
				<button onClick={changeQuantity} name="decrement" > - 1 </button>
				<button onClick={changeQuantity} name="increment"> + 1 </button>
			</div>
		</div>
	)
}