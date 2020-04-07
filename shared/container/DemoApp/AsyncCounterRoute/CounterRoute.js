/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';

const CounterRoute = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h3>
        Counter <small>non redux</small>
      </h3>
      <p>
        <em>
          This is a small demo component that contains state. It's useful for
          testing the hot reloading experience of an asyncComponent.
        </em>
      </p>
      <p>Current value: {counter}</p>
      <p>
        <button type="button" onClick={incrementCounter}>
          Increment
        </button>
      </p>
    </div>
  );
};

export default CounterRoute;
