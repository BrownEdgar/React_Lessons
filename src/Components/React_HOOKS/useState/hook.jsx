import { useState } from 'react';

export default function Hook() {
  const [value, setValue] = useState({
    name: 'React',
    age: 8,
    companyL: 'facebook',
  });
  const [name, setname] = useState('default name');
  const handleChange = () => {
    setValue((hinObj) => {
      return { ...hinObj, age: hinObj.age + 2 };
    });
  };
  return (
    <div>
      <h1>{value.name}</h1>
      <h1>{value.age}</h1>
      <button onClick={handleChange}>{value.age > 20 ? 'off' : 'on'}</button>
      <h1></h1>
    </div>
  );
}
