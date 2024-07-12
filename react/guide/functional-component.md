# Functional Components

Functional components are the basic building blocks of React which are a simple JavaScript function. These functions accept props (properties) and return React elements. Functional components are also called stateless components because they do not manage state within themselves (this was the case earlier, but now after the introduction of React Hooks, state can be managed in functional components as well).

Functional components are simple and lightweight, and they are relatively easy to write and understand.

## Structure of Functional Component

```js
import React from 'react';

function Greeting() {
  return <h1>Hello, World!</h1>;
}

export default Greeting;
```

This is a simple functional component that returns a &lt;h1&gt; element containing the text “Hello, World!”.


## Advantages of Functional Components

- **Simplicity:** Functional components are simple and easy to write.
- **Performance:** These are generally faster than class components as they do not require lifecycle methods.
- **Hooks:** With the introduction of React Hooks, functional components can manage state and lifecycle methods.
- **Reusable:** These are reusable and make the code modular.

## Conclusion

Functional components are an essential part of React applications. These are simple, efficient and reusable. With the introduction of React Hooks, using functional components has become even more beneficial as we can now manage state and lifecycle methods as well. By using functional components you can keep your React applications clean and maintainable.