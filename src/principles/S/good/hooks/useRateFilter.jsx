import { useState } from 'react';

// Хук: отвечает только за состояние и логику фильтра по рейтингу
export function useRateFilter() {
  const [filterRate, setFilterRate] = useState(1);

  const handleRating = (rate) => {
    setFilterRate(rate);
  };

  return { filterRate, handleRating };
}
