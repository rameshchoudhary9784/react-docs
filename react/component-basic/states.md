# States

## Overview

In React, **state** is a concept that manages the dynamic properties of the component. The state resides inside the component and only that component can update it. The state can be assigned an initial value and this value can change during the lifecycle of the component.


## Defining and implementing the state

To define the state, you use the `useState` hook. This hook returns an array in which the first element is the current state value and the second element is a function that updates the state.

```jsx
import React, { useState } from 'react';

function Counter() {

  // defining the State
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default Counter;
```

In this example, `count` is the state variable which is given the initial value `0`. `setCount` is a function that updates the value of `count`. Every time the button is clicked, the `setCount` function is called and the value of `count` is increased.

## State vs Normal Variable

There are some key differences between state and normal variables in React:

1. **Reactivity:**
    - **State:** State is reactive. Meaning, whenever the state changes, the component re-renders and reflects the updated state. 
    - **Normal Variable:** Normal variable is not reactive. If you change the value of a normal variable then the component does not re-render.

2. **Preservation:**
    - **State:** The value of the state is preserved when the component is re-rendered.
    - **Normal Variable:** The value of the normal variable gets reset on every render of the component.

3. **Updates:**
    - **State:** To update the state you have to use a setter function (e.g., `setCount`).
    - **Normal Variable:** To update a normal variable you can simply use the assignment operator (`=`).


Example:

```jsx
import React, { useState } from 'react';

function Example() {
  const [stateVariable, setStateVariable] = useState(0);
  let normalVariable = 0;

  function handleClick() {
    setStateVariable(stateVariable + 1);
    normalVariable += 1;
    console.log('Normal Variable:', normalVariable);
  }

  return (
    <div>
      <p>State Variable: {stateVariable}</p>
      <p>Normal Variable: {normalVariable}</p>
      <button onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}

export default Example;
```

In this example, when the `stateVariable` is updated the component is re-rendered and the updated value is displayed. But, when a `normalVariable` is updated, its updated value is visible only in the console, not in the UI.


## Conclusion

State is a crucial part of React components which helps in handling dynamic data. Compared to normal variables, the state is reactive and preserves its value even if the component is re-rendered.