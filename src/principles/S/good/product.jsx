import React from 'react'
import axios from "axios";




export function Product(props) {
  const { product } = props;
  const { id, title, price, rating, image } = product;

  return (
    <div className='container__item' key={id}>
      <div className="container__image">
        <img src={image} alt="#" />
      </div>
      <div className="container__text">
        <h3 className='container__title'>{title}</h3>
        <p className='container__info container__info-price' >price: <span>${price}</span></p>

        <div className="container__info container__info-rating">

          {Array(parseInt(rating.rate))
            .fill("")
            .map((_, idx) => (
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-yellow-300"
                fill="#f1c40f"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>First star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            ))}
          <span className='rate'>
            {parseInt(rating.rate)}
          </span>
        </div>
        <button className='container__btn'>Add to cart</button>
      </div>
    </div>
  );
}
