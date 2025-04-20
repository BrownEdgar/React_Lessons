import { useState, useMemo } from 'react';

export default function App() {
  const [value, setValue] = useState('');
  const boom = () => {
    let total = 0;
    for (let i = 0; i < 1000; i++) {
      total += i;
    }
    return total;
  };

  const sum = boom();
  // const sum = useMemo(() => boom(), [])

  console.log(`Componenr Render: `);

  return (
    <div>
      <form>
        <input type='text' onChange={(e) => setValue(e.target.value)} />
      </form>
      <strong>Total: {sum}</strong>
    </div>
  );
}
