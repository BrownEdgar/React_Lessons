import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { Product } from "./product";
import { Rating } from "react-simple-star-rating";
import { Filter, filterProducts } from "./filter";
import { useProducts } from "./hooks/useProducts";
import { useRateFilter } from "./hooks/useRateFilter.jsx";

export function App() {
  const { products } = useProducts();
  const { filterRate, handleRating } = useRateFilter();

  return (
    <div className="">
      <Filter
        filterRate={filterRate}
        handleRating={handleRating}
      />
      <div className="">
        {filterProducts(products, filterRate).map((product) => (
          <Product product={product} />
        ))}
      </div>
    </div>
  );
}
