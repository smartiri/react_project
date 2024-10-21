import React from "react";

export default function CounterInput({ setFunction, placeholder }) {
  return (
    <>
      <div>
        <input
          type="text"
          placeholder={placeholder}
          onChange={(e) => setFunction(Number(e.target.value))}
        />
      </div>
    </>
  );
}
