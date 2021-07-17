
import React, { useState } from "react";
export default function Counter() {
  const [state, setState] = useState(0);
  const previous = () => {
    if (state != 0) {
      setState(state - 1);
    }
  };
  const next = () => {
    setState(state + 1);
  };
  return (
    <div>
      <div className="counter">{state}</div>
      <div>
        <input
          type="button"
          text="Previous"
          value="Previous"
          onClick={previous}
        ></input>{" "}
        &nbsp;
        <input type="button" text="Next" value="Next" onClick={next}></input>
      </div>
    </div>
  );
}