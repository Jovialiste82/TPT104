// src/components/Example.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../features/example.slice.js";

const ExampleComponent = () => {
  const value = useSelector((state) => state.example.value);
  const dispatch = useDispatch();

  return (
    <div className="p-4">
      <h1 className="text-2xl text-center p-6">Value: {value}</h1>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <button
        className="px-4 py-2 bg-red-500 text-white rounded ml-2"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
  );
};

export default ExampleComponent;
