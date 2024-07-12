# Conditional Rendering

## Overview

In React, conditional rendering means rendering or not rendering some elements inside the component based on specific conditions. This concept is similar to conditional statements in JavaScript.


## Conditional Rendering Techniques

React uses several techniques to achieve conditional rendering:
1.  **if Statement**
2.  **Ternary Operator**
3.  **Logical && Operator**
4.  **Switch Statement** (Rare cases)


### 1.  if Statement
Using the `if` statement you can render elements based on conditions.

Example:
```jsx
import React from 'react';

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  } else {
    return <h1>Please sign in.</h1>;
  }
}

export default Greeting;
```

In this example, the `Greeting` component decides which message to display based on the `isLoggedIn` props.


### 2. Ternary Operator
The ternary operator is a simple way to perform conditional rendering. It's similar to an inline if-else statement.

Example:
```jsx
import React from 'react';

function Greeting(props) {
  return (
    <div>
      {props.isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign in.</h1>}
    </div>
  );
}

export default Greeting;
```

In this example, conditional rendering is done by using the ternary operator `(condition ? true : false)`.


### 3. Logical && Operator
By using the logical `&&` operator you can render elements conditionally. If the condition is true then the element will be rendered, if it is false then it will not be rendered.

Example:
```jsx
import React from 'react';

function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 && <h2>You have {unreadMessages.length} unread messages.</h2>}
    </div>
  );
}

export default Mailbox;
```

In this example, if `unreadmessages.length` is greater than 0 then `h2` elements will be rendered.


### 4. Switch Statement

You can also use a `switch` statement in rare cases when you need to handle multiple conditions.

Example:
```jsx
import React from 'react';

function Status(props) {
  const status = props.status;
  let message;
  switch (status) {
    case 'success':
      message = <h1>Operation was successful!</h1>;
      break;
    case 'error':
      message = <h1>There was an error.</h1>;
      break;
    case 'loading':
      message = <h1>Loading...</h1>;
      break;
    default:
      message = <h1>Unknown status</h1>;
  }
  return <div>{message}</div>;
}

export default Status;
```

In this example, different messages are displayed based on different statuses using the `switch` statement.


## Conclusion

By using conditional rendering in React you can create dynamic and responsive UI that changes based on user input or application state. By using techniques like if statement, ternary operator, logical && operator, and switch statement you can easily manage complex rendering logic.