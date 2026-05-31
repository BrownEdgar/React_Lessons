import { useRef, useEffect } from "react";


function Input({ ref }) {

  useEffect(() => {
    console.log(1);
  }, []);

  return (
    <input ref={ref} type="text" />
  );
}


function App2() {
  // inputRef = {current: <input type="text" />}
  const inputRef = useRef(null);

  useEffect(() => {
    console.log(2);
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <Input ref={inputRef} />
    </div>
  );

}

export default App2;
