import React, { useState } from 'react'
import data from "./data/data.json"
import "./App.css"
import Favorit from './Favorit';
	let newArray = [];
export default function App() {
	const [product, setproduct] = useState(data.products);
	const [count, setcount] = useState(0);

	const addHandler = (elem) =>{
		if (newArray.length === 0) {
			newArray.push(elem)
		}else{
			 let some = newArray.some(item => item._id === elem._id );
			(some) ? console.log("arden ka") : newArray.push(elem)
		 }
		localStorage.setItem("favorit", JSON.stringify(newArray))
		setcount(newArray.length)
		console.log(newArray);
	}

	// -------
	const deleteProduct = (elem) =>{
		newArray = newArray.filter(product => product._id !== elem._id);
		setcount(newArray.length);
	}
	return (
		<>
			<h1>{count}</h1>
		<div className="flex-box">
			{product.map((elem, index) => {
				return (
					
					<div className="flex-item" key={elem._id}>
						<img src={elem.image} alt="product image" />
						<h2>{elem.productName}</h2>
						<p>{elem.description}</p>
						<p>$ {elem.price}</p>
						<button onClick={() => addHandler(elem)}>+</button>
					</div>
					
				)
			})}
		</div>
			<Favorit 
				count={count}
				data={newArray}
				deleteProduct={deleteProduct}/>
		</>
	)
}
