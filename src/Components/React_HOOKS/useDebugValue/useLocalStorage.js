import { useState, useDebugValue } from 'react';

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setStoredValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  // В DevTools будет видно: useLocalStorage — "theme: dark"
  useDebugValue(`${key}: ${JSON.stringify(value)}`);

  return [value, setStoredValue];
}
