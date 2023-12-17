import { useState, useEffect } from 'react'

export default function Favorit({ data, deleteProduct, count }) {
  const [state, setstate] = useState([]);

  useEffect(() => {
    getFavorit()
  }, [count])

  const getFavorit = () => {
    if (localStorage.getItem("favorit") !== null) {
      setstate(JSON.parse(localStorage.getItem("favorit")))
    } else {
      setstate([])
    }
  }

  return (
    <div className="flex-box">
      {state.map(elem => {
        return (
          <div className="flex-item" key={elem._id}>
            <img src={elem.image} alt="product image" />
            <h2>{elem.productName}</h2>
            <p>{elem.description}</p>
            <p>$ {elem.price}</p>
            <button onClick={() => deleteProduct(elem)}>-</button>
          </div>
        )
      })}
    </div>
  )
}
