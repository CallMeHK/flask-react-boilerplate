import React, { useState } from "react";

export default function App() {
  const [count, updateCount] = useState(0);
  
  return (
    <div className="App">
      <h4>Counter with useState</h4>
      <p>This component uses useState instead of setState to update count.</p>
      <h4>You clicked {count} times!</h4>

      <button
        className="waves-effect waves-light btn"
        onClick={() => updateCount(c => c - 1)}
      >
        Decrement
      </button>
      <button
        className="waves-effect waves-light btn"
        onClick={() => updateCount(c => c + 1)}
      >
        Increment
      </button>
    </div>
  );
}
