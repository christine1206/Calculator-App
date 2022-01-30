import { useState } from "react";
import "./App.css";

function App() {
  const [isCalculating, setIsCalculating] = useState("");
  const [results, setResults] = useState();

  const mathOperations = ["+", "-", "*", "/", "."];

  const updateCalculatorHandler = (value) => {
    if (mathOperations.includes(value) && isCalculating === "") return;
    setIsCalculating(isCalculating + value);
    if (!mathOperations.includes(value)) {
      // eslint-disable-next-line no-eval
      setResults(eval(isCalculating + value).toString());
    }
  };

  const createNumbers = () => {
    const numbers = [];
    for (let i = 1; i < 10; i++) {
      numbers.push(
        <button onClick={() => updateCalculatorHandler(i.toString())} key={i}>
          {i}
        </button>
      );
    }
    return numbers;
  };

  const equalsToHandler = () => {
    // eslint-disable-next-line no-eval
    setIsCalculating(eval(isCalculating).toString());
  };

  const deleteNumbersHandler = () => {
    if (!isCalculating) return;
    const value = isCalculating.slice(0, -1);
    setIsCalculating(value);
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {results ? <span>({results})</span> : ""}
          {isCalculating || 0}
        </div>
        <div className="operators">
          <button onClick={() => updateCalculatorHandler("+")}>+</button>
          <button onClick={() => updateCalculatorHandler("-")}>-</button>
          <button onClick={() => updateCalculatorHandler("*")}>*</button>
          <button onClick={() => updateCalculatorHandler("/")}>/</button>
          <button onClick={deleteNumbersHandler}>DEL</button>
        </div>
        <div className="numbers">
          {createNumbers()}
          <button onClick={() => updateCalculatorHandler("0")}>0</button>
          <button onClick={() => updateCalculatorHandler(".")}>.</button>
          <button onClick={equalsToHandler}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
