# Props

## Overview

Props (short for properties) is a fundamental concept in React that helps pass and share data between components. Props are a way to transmit data from the parent component to the child component.

## How are props used?

In React, the parent component provides data to its child component in the form of props. Props are immutable (unchangeable), that is, the child component cannot change the props directly, it can only read them.

## Syntax of Props

To pass props to a child component, they are passed as attributes inside the JSX tag of the parent component. Let's see an example:

```jsx
// Parent Component
import React from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  return <ChildComponent name="Abhinav" age={21} />;
}

export default ParentComponent;

// Child Component
import React from 'react';

function ChildComponent(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}

export default ChildComponent;
```

In this example, the `ParentComponent` is passing data to the `ChildComponent` in the form of `name` and `age` props. `ChildComponent` receives the props and renders them.

## Benefits of Props

- **Reusability:** Props make components reusable because data can be easily transmitted from the parent component to the child component.
- **Component Communication:** Communication between components occurs through props, which makes React applications modular and maintainable.
- **Dynamic UI:** Using props it is easy to display dynamic data, such as user information, list items, etc.

## Type of Props

 **1. Strings:** Props can be passed as strings.

 ```jsx
 <ChildComponent name="Abhinav" />
 ```

 **2. Numbers:** Props can be passed as numbers.

 ```jsx
 <ChildComponent age={21} />
 ```

 **3. Boolean:** Props can be passed as boolean values.

 ```jsx
 <ChildComponent isActive={true} />
 ```


 **4. Functions:** Props can be passed as functions, which can be used in child components.

 ```jsx
 <ChildComponent onClick={handleClick} />
 ```

 **5. Objects:** Props can be passed as objects.

 ```jsx
 <ChildComponent user={{ name: 'Abhinav', age: 21 }} />
 ```

 ## Default Props

 Components can also define default props that are passed to a component if a specific prop is not passed from the parent component.

 Example:

 ```jsx
 function ChildComponent(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}

ChildComponent.defaultProps = {
  name: 'Guest',
  age: 18
};

export default ChildComponent;
```

In this example, if the other `ParentComponent` doesn't pass a `name` and `age` props, then `ChildComponent` will take the default values ​`​(name: 'guest'`, `age: 18)`.


## Conclusion

Props is a powerful mechanism of component communication and data transfer in React. Props makes components reusable and helps in managing dynamic data. Props' immutable nature ensures that data flow remains predictable and maintainable, which streamlines the development of React applications.