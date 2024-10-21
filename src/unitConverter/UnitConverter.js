import { convertLength } from "@mui/material/styles/cssUtils";
import { React, useReducer, useMemo, useState } from "react";

const initialState = {
  value: 0,
  unitType: "temperature",
  unit: "celcius",
};

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_VALUE":
      return {
        ...state,
        value: action.payload,
      };
    case "CHANGE_UNIT_TYPE":
      return {
        ...state,
        unitType: action.payload,
        unit: action.payload === "temperature" ? "Celcius" : "Kilometers",
        value: 0,
      };

    case "CHANGE_UNIT":
      return {
        ...state,
        unit: action.payload,
      };
    default:
      return state;
  }
}

function convert(value, unitType, unit) {
  if (unitType === "temperature") {
    return unit === "C" ? (value * 9) / 5 + 32 : ((value - 32) * 5) / 9;
  } else {
    return unit === "km" ? value * 0.621371 : value / 0.621371;
  }
}
export default function UnitConverter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const convertedValue = useMemo(() => {
    return convert(state.value, state.unitType, state.unit);
  }, [state.value, state.unitType, state.unit]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "50%",
        gap: "20px",
      }}
    >
      <h1>Unit Type</h1>
      <select
        value={state.unitType}
        onChange={(e) =>
          dispatch({ type: "CHANGE_UNIT_TYPE", payload: e.target.value })
        }
      >
        <option value="temperature">Temperature</option>
        <option value="distance">Distance</option>
      </select>

      {state.unitType === "temperature" ? (
        <>
          {/* Celsius and Fahrenheit Dropdown */}
          <select
            value={state.unit}
            onChange={(e) =>
              dispatch({ type: "CHANGE_UNIT", payload: e.target.value })
            }
          >
            <option value="C">Celsius</option>
            <option value="F">Fahrenheit</option>
          </select>

          <input
            type="number"
            onChange={(e) =>
              dispatch({ type: "CHANGE_VALUE", payload: e.target.value })
            }
          />
        </>
      ) : (
        <>
          <select
            value={state.unit}
            onChange={(e) =>
              dispatch({ type: "CHANGE_UNIT", payload: e.target.value })
            }
          >
            <option value="km">Kilometers</option>
            <option value="m">Miles</option>
          </select>

          <input
            type="number"
            onChange={(e) =>
              dispatch({ type: "CHANGE_VALUE", payload: e.target.value })
            }
          />
        </>
      )}
      <div>
        <p>Converted Value: {convertedValue.toFixed(2)}</p>
      </div>
    </div>
  );
}
