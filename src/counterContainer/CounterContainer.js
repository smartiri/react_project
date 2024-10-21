import "../counterContainer/CounterConatiner.css";
import CounterInput from "../counterInput/CounterInput";
export default function CounterContainer({
  count,
  increment,
  upperLimit,
  decrementCount,
  incrementCount,
  resetValues,
  setIncrement,
  setUpperLimit,
}) {
  return (
    <>
      <div>
        <CounterInput
          placeholder={"set upperLimit"}
          setFunction={setUpperLimit}
        />
        <br />
        <br />
        <CounterInput
          placeholder={"set increment"}
          setFunction={setIncrement}
        />

        <p>Counter: {count}</p>
        <button
          className="btn"
          onClick={incrementCount}
          disabled={count >= upperLimit}
        >
          Increment +
        </button>
        <button className="btn" onClick={decrementCount} disabled={count === 0}>
          Decrement -
        </button>
        <button className="btn" onClick={resetValues}>
          Reset
        </button>
      </div>
      {count === 0 && <span>Cannot dicrement below 0 </span>}
      <br />
      {(count + increment > upperLimit || increment > upperLimit) && (
        <span>Cannot increment more than {upperLimit} </span>
      )}
    </>
  );
}
