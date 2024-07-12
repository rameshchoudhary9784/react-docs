# Class Based Components

Class components were the only way to track state and lifecycle on a React component. Function components were considered "state-less".

With the addition of Hooks, Function components are now almost equivalent to Class components. The differences are so minor that you will probably never need to use a Class component in React.

## overview

Class components are another way to create components in React. These are JavaScript classes that extend `React.Component`. In class components we can use state and lifecycle methods, which was a unique feature in functional components before the introduction of hooks.

The syntax for class components is as follows:

```js
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}
```

## Why we use less class components?

### React Hooks

With the introduction of React Hooks, functional components have got the capability to manage state and lifecycle methods. Hooks have made functional components a more powerful and preferred choice because they are simpler and concise. With functional components the code is cleaner and readable, and by using hooks we can achieve the same functionality which was previously possible only in class components.

### Simplicity

Functional components are simpler and easier to understand. They contain less boilerplate code and are better suited for modern React practices.

### Performance

Functional components are generally more performant because they do not require lifecycle methods, which can be complex and create overhead.

### Community Preference

The React community and ecosystem also now prefer functional components and hooks. Documentation and tutorials also focus mostly on functional components and hooks, which has become easier and standard practice for new developers.

## Conclusion

Class components are an important part of React and have their own advantages, such as the ability to manage state and lifecycle methods. But, after the introduction of React Hooks, functional components have become the more preferred choice. Functional components are simpler, more performant, and easier to write, which suits better with modern React development practices. React community also promotes functional components and hooks more, so the usage of class components is gradually decreasing.