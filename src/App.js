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


  const equalsToHandler = () => {
    // eslint-disable-next-line no-eval
    setIsCalculating(eval(isCalculating).toString());
  };

  const deleteNumbersHandler = () => {
     setResults("");
    setIsCalculating("");
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="screen">
          {results && <span>({results})</span>}
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
          
          <button onClick={() => updateCalculatorHandler("0")}>0</button>
          <button onClick={() => updateCalculatorHandler("1")}>1</button>
          <button onClick={() => updateCalculatorHandler("2")}>2</button>
          <button onClick={() => updateCalculatorHandler("3")}>3</button>
          <button onClick={() => updateCalculatorHandler("4")}>4</button>
          <button onClick={() => updateCalculatorHandler("5")}>5</button>
          <button onClick={() => updateCalculatorHandler("6")}>6</button>
          <button onClick={() => updateCalculatorHandler("7")}>7</button>
          <button onClick={() => updateCalculatorHandler("8")}>8</button>
          <button onClick={() => updateCalculatorHandler("9")}>9</button>
          <button onClick={() => updateCalculatorHandler(".")}>.</button>
          <button onClick={equalsToHandler}>=</button>
        </div>
      </div>
    </div>
  );
};

export default App;
