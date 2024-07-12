# Reconciliation & Diffing Algorithm

## Overview

In React, **reconciliation** and **diffing** algorithm are both fundamental concepts that are necessary for efficient updates and rendering. By using the reconciliation process and diffing algorithm, React efficiently updates the DOM without unnecessary operations.


## Reconciliation

Reconciliation is a process that React performs to identify the differences between the virtual DOM and the real DOM and sync them efficiently.

### How does it work?

1. **Virtual DOM Creation:** Whenever any state or props changes, React creates a new virtual DOM tree.
1. **Diffing Algorithm:** React identifies the differences between the old and new virtual DOM trees.
1. **Updates Apply:** Based on the identified differences, React only applies the necessary updates to the real DOM.


## Diffing Algorithm

The Diffing algorithm is a part of the reconciliation process that efficiently identifies differences between virtual DOM trees. React's diffing algorithm is based on some assumptions so that performance can be optimized:

1. **Two elements of different types will produce different trees:** If the type of elements is different, React unmounts the old tree  and mounts the new tree.
    Example:
    ```html
    // Old Virtual DOM
    <div>
    <span>Old Element</span>
    </div>

    // New Virtual DOM
    <div>
    <p>New Element</p>
    </div>
    ```

    In this example, the `span` element is completely replaced by the `p` element because of their different types.

2. **The developer can hint at which child elements may be stable across different renders with a key prop:** By using the key prop, you can uniquely identify elements and tell React which element will remain stable across renders.

    Example:

    ```html
    // Old Virtual DOM
    <ul>
    <li key="1">Item 1</li>
    <li key="2">Item 2</li>
    </ul>

    // New Virtual DOM
    <ul>
    <li key="2">Item 2</li>
    <li key="1">Item 1</li>
    </ul>
    ```

    In this example, through `key` props React knows that `Item 1` and `Item 2` have the same elements, only the order has changed, so React does not do unnecessary re-render.

## How does the diffing algorithm work?

1. **Element Type Comparison:** First of all, the types of old and new elements are compared. If the type is different, then the old element gets unmounted and the new element gets mounted.
1. **Props and State Comparison:** If the type is same, then props and state are compared and only necessary updates are applied.
1. **Child Elements Comparison:** Comparison between child elements is done using depth-first traversal method. Through unique keys, React efficiently matches and updates elements.


### Example

Consider the following example to illustrate how the diffing algorithm works:

```jsx
import React, { useState } from 'react';

function MyComponent() {
  const [items, setItems] = useState([
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
    { id: 3, text: 'Item 3' },
  ]);

  const moveItem = () => {
    setItems([
      { id: 2, text: 'Item 2' },
      { id: 3, text: 'Item 3' },
      { id: 1, text: 'Item 1' },
    ]);
  };

  return (
    <div>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
      <button onClick={moveItem}>Move Item 1</button>
    </div>
  );
}

export default MyComponent;
```

In this example, the `moveItem` function changes the order of the items, but because the `key` prop is being used, React efficiently identifies the changes and only applies the necessary updates.


## Conclusion

React's reconciliation process and diffing algorithm make DOM updates highly efficient. By identifying differences through Virtual DOM and applying only necessary updates, React optimizes performance and provides a seamless user experience. By using keys you can hint to React which elements will remain stable, which further improves performance.