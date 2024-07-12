# React - Client-Side Rendering

## Overview

React primarily uses client-side rendering (CSR). In CSR, JavaScript runs in the browser and dynamically updates the DOM based on the user's interactions. A JavaScript engine is required to render React components and handle user interactions.


## Client-Side Rendering (CSR) in React

In client-side rendering, an initial HTML page is served from the server which contains the basic HTML structure. The browser downloads JavaScript files and initializes the React application, which can dynamically modify and update the DOM.


### Pros of CSR:

1. **Rich User Experience:** CSR can create highly interactive and responsive user interfaces.
1. **Reduced Server Load:** Only the initial page load is generated from the server, the remaining interactions are handled on the client-side, which reduces the server load.
1. **Fast User Interactions:** CSR does not require page reload, hence user interactions are fast.


### Cons of CSR:

1. **Initial Load Time:** JavaScript files take time to download and execute, which can slow down the initial page load.
1. **SEO Challenges:** Search engines may not be able to properly index JavaScript-rendered content, which can be a challenge for SEO.
1. **JavaScript Dependency:** CSR depends on JavaScript engine, if user has disabled JavaScript then the application will not work properly.


### React without JavaScript (JS Engine Disabled)

If the user has disabled JavaScript in the browser, then React application based on client-side rendering will not work. The user will only see the initial HTML structure, and no dynamic content or interactivity will be available.

Example:

```jsx
// React code
function MyComponent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default MyComponent;
```

If JavaScript is disabled, the user will only get static HTML:

```jsx
<div>
  <h1>Count: 0</h1>
  <button>Increment</button>
</div>
```

### Solutions for JavaScript Disabled Users

1. **Server-Side Rendering (SSR):** In SSR, React components are rendered on the server and the fully rendered HTML is sent to the client. This makes the initial load time faster and improves SEO. The content is visible to the user even if JavaScript is disabled.

    Example: Next.js, a popular React framework for SSR.

1. **Static Site Generation (SSG):** In SSG, the application is converted into static HTML files at build time. These pages are fast and SEO-friendly.

    Example: Gatsby, a popular React framework for SSG.

1. **Graceful Degradation:** In the Graceful degradation approach, the application provides basic functionality and content even if JavaScript is disabled. This keeps minimum functionality and content accessible to the user.


### Example of SSR with Next.js
React application can be rendered server-side using Next.js.

```jsx
import React from 'react';

// Next.js page component
function HomePage({ initialCount }) {
  const [count, setCount] = React.useState(initialCount);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

// Server-side rendering for initial props
export async function getServerSideProps() {
  return {
    props: {
      initialCount: 0,
    },
  };
}

export default HomePage;
```

In this example, the `getServerSideProps` function provides initial props from the server-side and the component is rendered server-side.


## Conclusion

React primarily relies on client-side rendering, which provides rich user experiences. But if the user has disabled JavaScript then the application will not function properly. React applications can be made more resilient, fast, and SEO-friendly by using approaches like server-side rendering (SSR) and static site generation (SSG). Frameworks like Next.js and Gatsby easily provide you these capabilities.
