import "./App.css";
import { useEffect, useState } from "react";
import Calculator from "./component/calculator";

function App() {
  const [input, setInput] = useState("");
  const [firstValue, setFirstValue] = useState("");
  const [secondValue, setSecondValue] = useState("");
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState("");
  useEffect(() => {
    console.log(input + "," + result);
  }, [input, result]);

  const handleClick = (e) => {
    const value = e.target.value;
    setInput(input + value); //value.conact(e.target.value)

    if (operation === "") {
      setFirstValue(firstValue + value);
    } else {
      setSecondValue(secondValue + value);
    }

    // setResult(result + value);
    console.log(typeof value);
  };
  const handleClickOperation = (e) => {
    const operator = e.target.value;
    console.log(operation);
    if (
      input !== "" &&
      // input.charAt(input.length - 1) !== operator &&
      operation === ""
    ) {
      setInput(input + operator);
    }
    setOperation(operator);
  };
  const handleClickClear = () => {
    setInput("");

    setFirstValue("");
    setSecondValue("");
    setOperation("");
  };

  const handleClickBackSpace = () => {
    setInput(input.slice(0, input.length - 1));
  };
  const handleClickResult = () => {
    if (operation === "+") {
      setInput(Number(firstValue) + Number(secondValue));
      setResult(input);
    }
    if (operation === "-") {
      setInput(Number(firstValue) - Number(secondValue));
    }
    if (operation === "/") {
      setInput(Number(firstValue) / Number(secondValue));
    }
    if (operation === "*") {
      setInput(Number(firstValue) * Number(secondValue));
    }
    if (operation === "%") {
      setInput(Number(firstValue) % Number(secondValue));
    }
    // else {
    //     setResult(input);
    //     console.log(input);
    //   }
  };
  const handleClickDecimal = (e) => {
    const decimal = e.target.value;
    if (input !== "") {
      setInput(input + decimal);
    }
  };
  return (
    <div className="App">
      <h3>Calculator</h3>
      <Calculator
        input={input}
        onClick={handleClick}
        onClickResult={handleClickResult}
        onClickOperation={handleClickOperation}
        onClickBackSpace={handleClickBackSpace}
        onClickDecimal={handleClickDecimal}
        onClickClear={handleClickClear}
      />
    </div>
  );
}

export default App;
