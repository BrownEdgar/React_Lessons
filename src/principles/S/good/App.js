import { Product } from "./product";
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
