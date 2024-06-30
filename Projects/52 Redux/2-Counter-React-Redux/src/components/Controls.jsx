import React, { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = () => {
  const dispatch = useDispatch();

  const inputElement = useRef();

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const handlePrivacyToggle = () => {
    dispatch({ type: "PRIVACY_TOGGLE" });
  };

  const handleAdd = () => {
    dispatch({
      type: "ADD",
      payload: { num: Number(inputElement.current.value) },
    });
    inputElement.current.value = "";
  };

  const handleSubtract = () => {
    dispatch({
      type: "SUBTRACT",
      payload: { num: Number(inputElement.current.value) },
    });
    inputElement.current.value = "";
  };

  return (
    <>
      <div
        className="d-grid gap-2 d-sm-flex justify-content-sm-center"
        bis_skin_checked="1"
      >
        <button type="button" class="btn btn-primary" onClick={handleIncrement}>
          +1
        </button>
        <button type="button" class="btn btn-success" onClick={handleDecrement}>
          -1
        </button>
        <button
          type="button"
          class="btn btn-warning"
          onClick={handlePrivacyToggle}
        >
          Privacy Toggle
        </button>
      </div>
      <div
        className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row"
        bis_skin_checked="1"
      >
        <input
          type="text"
          placeholder="Enter number"
          className="number-input"
          ref={inputElement}
        />
        <button type="button" class="btn btn-info" onClick={handleAdd}>
          Add
        </button>
        <button type="button" class="btn btn-danger" onClick={handleSubtract}>
          Subtract
        </button>
      </div>
    </>
  );
};

export default Controls;
