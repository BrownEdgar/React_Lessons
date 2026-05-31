import axios from 'axios';
import { useEffect, useState } from 'react';

// Хук: отвечает только за загрузку товаров с API — изолирует сетевой слой
export const useProducts = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await axios.get('https://fakestoreapi.com/products');

    if (response && response.data) setProducts(response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products };
};
