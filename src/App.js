import { useState } from "react";
import "./App.css";
const worker = new Worker("worker.js");

//Note: please, do dot change placeholder and data-testid attributes

function App() {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("Calculating...");

  const handelChange = (e) => {
    setInputValue(Number(e.currentTarget.value));
  };

  const onBtnClick = () => {
    setResult("Calculating...");
    worker.onmessage = ({ data }) => {
      setResult(`Result: ${data}`);
    };

    worker.postMessage({ data: inputValue });

    setInputValue("");
  };

  return (
    <div className="app">
      <h1>Fibonacci 🌀</h1>
      <input
        type="number"
        placeholder="Insert a number"
        value={inputValue}
        onChange={handelChange}
      />
      <button onClick={onBtnClick}>Calculate</button>
      <div className="result" data-testid="result">
        {result}
      </div>
    </div>
  );
}

export default App;
