import React, { useRef } from "react";

function CounterRef() {
  const count = useRef(0);

  function handleClick() {
    console.log(count.current);
    return count.current = count.current + 1;
  }

  return (
    <div>
      <h1>CounterRef</h1>
      <button onClick={handleClick}>{count.current}</button>
    </div>
  );
}

export default CounterRef;
