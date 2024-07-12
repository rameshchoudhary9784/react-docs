# Composition

## Overview

In React, **composition** is a technique in which you combine small components to create a larger component. This technique improves reusability, maintainability and readability.


### Concept of Composition

The basic principle of composition is to design components in such a way that they can be nested inside each other and help in building a complex UI structure.


### Example of Composition

Let us understand this with a simple example:

```jsx
import React from 'react';

function Welcome(props) {
  return <h1>Welcome, {props.name}!</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Alice" />
      <Welcome name="Bob" />
      <Welcome name="Charlie" />
    </div>
  );
}

export default App;
```

In this example, `Welcome` is a simple component that displays the name. The `App` component is using the `Welcome` component multiple times, with different props. This is a basic example of composition.