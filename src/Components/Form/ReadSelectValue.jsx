import { useState } from "react";

export default function App() {
  const getInitialState = () => {
    const value = "Orange";
    return value;
  };

  const [value, setValue] = useState(getInitialState);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <select value={value} onChange={handleChange}>
        <option value="Orange">Orange</option>
        <option value="Radish">Radish</option>
        <option value="Cherry">Cherry</option>
      </select>
      <p>{`You selected ${value}`}</p>
    </div>
  );
}