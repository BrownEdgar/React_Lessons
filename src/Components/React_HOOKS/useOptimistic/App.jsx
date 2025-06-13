import { useState, useOptimistic } from 'react';

export default function OptimisticList() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState('');

  // useOptimistic: Ցուցադրում է ժամանակավոր տվյալներ մինչև սերվերից response գա
  const [optimisticItems, addOptimisticItem] = useOptimistic(
    items,
    (prevItems, newItem) => [...prevItems, newItem]
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    const tempId = Date.now(); // 987675682132
    const newItem = { id: tempId, text: input };

    //  "оптимистично"
    addOptimisticItem(newItem);
    //  ջնջում ենք input-ի տեքստը
    setInput('');

    const savedItem = await fakeSaveToServer(input);

    setItems(prev => [...prev, savedItem]);
  };

  return (
    <div>
      <h2>Мой список</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Добавить элемент"
        />
        <button type="submit">Добавить</button>
      </form>
      <ul>
        {optimisticItems.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
}


async function fakeSaveToServer(text) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ id: Math.floor(Math.random() * 10000), text });
    }, 1000);
  });
}



