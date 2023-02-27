import React from "react";
import { Rating } from "react-simple-star-rating";

export function filterProducts(products, rate) {
  return products.filter(
    (product: any) => product.rating.rate > rate
  );
}



export function Filter(props) {
  const { filterRate, handleRating } = props;

  return (
    <div className="flex flex-col justify-center items-center mb-4">
      <span className="font-semibold">Minimum Rating </span>
      <Rating
        initialValue={filterRate}
        SVGclassName="inline-block"
        onClick={handleRating}
      />
    </div>
  );
}
