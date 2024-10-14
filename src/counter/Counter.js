import React, { useState } from "react";
import CounterContainer from "../counterContainer/CounterContainer";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(1);
  const [upperLimit, setUpperLimit] = useState(0);

  const incrementCount = () => {
    if (count + increment <= upperLimit && upperLimit > increment) {
      setCount(count + increment);
    }
  };

  const decrementCount = () => {
    if (count - increment >= 0) {
      setCount(count - increment);
    } else {
      setCount(0);
    }
  };

  const resetValues = () => {
    setCount(0);
    setIncrement(1);
    setUpperLimit(0);
  };
  return (
    <>
      <CounterContainer
        count={count}
        increment={increment}
        decrementCount={decrementCount}
        incrementCount={incrementCount}
        resetValues={resetValues}
        setIncrement={setIncrement}
        setUpperLimit={setUpperLimit}
      />
    </>
  );
}
