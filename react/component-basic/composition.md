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


### Use of props.children

In React, you can create complex composition patterns by using `props.children`. `props.children` is a special prop that represents the child elements of the component.

Example:

```jsx
import React from 'react';

function Card(props) {
  return (
    <div className="card">
      {props.children}
    </div>
  );
}

function App() {
  return (
    <Card>
      <h2>Title</h2>
      <p>This is some content inside the card.</p>
    </Card>
  );
}

export default App;
```

In this example, the `Card` component is using `props.children` to render the elements nested within it. The `App` component is using the `Card` component and nesting `h2` and `p` elements inside it.


### Specialization aur Containment

Composition in React can be done in two ways: **specialization** and **containment**.

1. **Specialization:**
    - In the specialization pattern, a general component is used to create a specific component.

    Example:
    ```jsx
    import React from 'react';

    function Button(props) {
    return <button className={props.className}>{props.label}</button>;
    }

    function PrimaryButton(props) {
    return <Button className="primary" label={props.label} />;
    }

    function SecondaryButton(props) {
    return <Button className="secondary" label={props.label} />;
    }

    function App() {
    return (
        <div>
        <PrimaryButton label="Submit" />
        <SecondaryButton label="Cancel" />
        </div>
    );
    }

    export default App;
    ```
2. **Containment:**
    - In the containment pattern, a component contains other components within itself.

    Example:

    ```jsx
    import React from 'react';

    function Container(props) {
    return <div className="container">{props.children}</div>;
    }

    function App() {
    return (
        <Container>
        <h1>Hello, World!</h1>
        <p>This is a paragraph inside a container.</p>
        </Container>
    );
    }

    export default App;
    ```

## Conclusion

Composition in React is a powerful technique that allows you to build complex UIs in a modular and maintainable way. By using props and `props.children`, you can easily create reusable components and use them in multiple contexts. By understanding the patterns of specialization and containment, you can design your React applications more effectively.