# Component Life Cycle

## Overview

Hooks are used to handle lifecycle methods in functional components. These hooks also provide lifecycle behavior to functional components similar to that of class components.

In React, components have a lifecycle that consists of different phases. Each phase has a set of lifecycle methods that are called at specific points in the component's lifecycle. These methods allow you to control the component's behavior and perform specific actions at different stages of its lifecycle.

## Lifecycle Phases
The reacting component lifecycle can be broadly divided into three phases:

1. **Mounting**
2. **Updating**
3. **Unmounting**

### 1. Mounting

In the mounting phase, the component is first inserted into the DOM. A `useEffect` hook is used in this phase.

Example:

```jsx
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component mounted!');

    // Clean-up function to handle unmounting
    return () => {
      console.log('Component will unmount!');
    };
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default MyComponent;
```

In this example, the `useEffect` hook is used with an empty dependency array (`[]`), which ensures that the effect only runs during mounting and unmounting.


### 2. Updating

In the updating phase, the component is re-rendered when props or state changes. `useEffect` hooks are also used in this phase.

Example:

```jsx
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component updated! Count is now:', count);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default MyComponent;
```

In this example, the `useEffect` hook is included with a `count` dependency, which ensures that the `useEffect` runs when the `count` state changes.


### 3. Unmounting

In the mopping phase the component is removed from the DOM. Mopping is handled by returning a clean-up function in the `useEffect` hook.

Example:

```jsx
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    console.log('Component mounted!');

    return () => {
      console.log('Component will unmount!');
    };
  }, []);

  return (
    <div>
      {visible && <p>Component is visible!</p>}
      <button onClick={() => setVisible(false)}>Hide Component</button>
    </div>
  );
}

export default MyComponent;
```

## Conclusion

`useEffect` hook is used to handle lifecycle methods in React functional components. This hook gives you the flexibility to handle the mounting, updating, and unmounting phases. With proper understanding and usage you can manage your React applications efficiently.