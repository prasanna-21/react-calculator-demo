import React from "react";

const Calculator = (props) => {
  const {
    input,
    onClick,
    onClickBackSpace,
    onClickOperation,
    onClickResult,
    onClickClear,
    onClickDecimal,
  } = props;
  return (
    <div className="calc-container">
      <div className="result">
        {/* <div>{result}</div> */}
        {input}
      </div>
      <div className="button-container">
        <button
          className="btn heighlight"
          id="clear-span"
          onClick={onClickClear}
        >
          clear
        </button>
        <button className="btn heighlight" onClick={onClickBackSpace}>
          c
        </button>
        <button value="%" className="btn heighlight" onClick={onClickOperation}>
          %
        </button>
        <button value="+" className="btn heighlight" onClick={onClickOperation}>
          +
        </button>
        <button value="9" className="btn" onClick={onClick}>
          9
        </button>
        <button value="8" className="btn" onClick={onClick}>
          8
        </button>
        <button value="7" className="btn" onClick={onClick}>
          7
        </button>
        <button value="-" className="btn heighlight" onClick={onClickOperation}>
          -
        </button>
        <button value="6" className="btn" onClick={onClick}>
          6
        </button>
        <button value="5" className="btn" onClick={onClick}>
          5
        </button>
        <button value="4" className="btn" onClick={onClick}>
          4
        </button>
        <button value="/" className="btn heighlight" onClick={onClickOperation}>
          /
        </button>
        <button value="3" className="btn" onClick={onClick}>
          3
        </button>
        <button value="2" className="btn" onClick={onClick}>
          2
        </button>
        <button value="1" className="btn" onClick={onClick}>
          1
        </button>

        <button value="*" className="btn heighlight" onClick={onClickOperation}>
          *
        </button>
        <button value="0" className="btn" onClick={onClick}>
          0
        </button>
        <button className="btn" value="." onClick={onClickDecimal}>
          .
        </button>
        <button
          className="btn heighlight"
          id="back-space"
          onClick={onClickResult}
        >
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
