# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.

React is a library for building components and other composable user interfaces. It promotes the creation of reusable UI components that can present information and update that information as it changes. The most important problem it solves is the inefficiency of the DOM by managing components and state in the virtual DOM and updating only those browser DOM elements that have changed from one state to the next.

2. Describe component state.

Component state is data that a component’s event handlers/hooks may change to trigger an update to the browser. 

3. Describe props.

Component props are like parameters in JavaScript functions. They are used to make reusable components by allowing us to pass in data to the component that will render in its initial state.

4. What are side effects, and how do you sync effects in a React component to changes of certain state or props?

Side effects are changes that occur outside of a function when that function is executed. In React, side effects can occur when a component returns a different output for the same state and props. You can sync effects in a Reach component to changes in state or props using the useEffect hook and a dependency array that contains the state or props. React compares the values of the props/state in the dependency array from one render to the next and skips the effect if those values haven’t changed.