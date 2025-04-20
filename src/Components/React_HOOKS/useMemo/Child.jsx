import { useEffect } from 'react';

let renderCount = 0;

export default function Child() {
  useEffect(() => {
    renderCount++;
  }, [renderCount]);
  return <div>renderCount:{renderCount}</div>;
}
