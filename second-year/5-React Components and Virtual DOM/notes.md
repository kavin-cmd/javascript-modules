# React Components Workshop

## **Introduction to React Components**
React components are the building blocks of any React application. They can be functional or class-based, reusable, and are used to define parts of the user interface.

---

## **Functional Components**
Functional components are JavaScript functions that return React elements. They are simpler and primarily used for presentational purposes.

### **Example: Functional Component**
```javascript
import React from 'react';

function Greeting(props) {
    return <h1>Hello, {props.name}!</h1>;
}

export default Greeting;
```

**Explanation:**
- `Greeting` is a functional component that accepts `props` and returns an `h1` element.
- Props allow passing data from a parent to a child component.

---

## **Class Components**
Class components are ES6 classes that extend `React.Component` and must include a `render()` method.

### **Example: Class Component**
```javascript
import React, { Component } from 'react';

class Welcome extends Component {
    render() {
        return <h1>Welcome, {this.props.name}!</h1>;
    }
}

export default Welcome;
```

**Explanation:**
- `Welcome` is a class component that uses the `render()` method to output JSX.
- Access `props` using `this.props`.

---

## **Props**
Props (short for properties) are read-only and used to pass data from parent to child components.

### **Example: Passing Props**
```javascript
import React from 'react';
import Greeting from './Greeting';

function App() {
    return <Greeting name="Vikas" />;
}

export default App;
```

**Explanation:**
- `App` passes the `name` prop to the `Greeting` component.
- The `Greeting` component renders the name dynamically.

---

## **State**
State is used to manage dynamic data within a component.

### **Example: Using State in Class Component**
```javascript
import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}

export default Counter;
```

**Explanation:**
- `Counter` manages a `count` state.
- `setState()` updates the state and re-renders the component.

---

## **Component Lifecycle**
React components have lifecycle methods for mounting, updating, and unmounting phases.

### **Lifecycle Methods**
1. `componentDidMount()`: Executes after the component is mounted.
2. `componentDidUpdate()`: Executes after updates.
3. `componentWillUnmount()`: Executes before unmounting.

### **Example: Lifecycle Methods**
```javascript
import React, { Component } from 'react';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = { time: new Date().toLocaleTimeString() };
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({ time: new Date().toLocaleTimeString() });
    }

    render() {
        return <p>The time is: {this.state.time}</p>;
    }
}

export default Timer;
```

**Explanation:**
- `componentDidMount()` sets up a timer.
- `componentWillUnmount()` clears the timer when the component is removed.

---

## **Handling Events**
React events are handled using camelCase syntax.

### **Example: Handling Events**
```javascript
import React from 'react';

function ClickHandler() {
    const handleClick = () => {
        alert("Button clicked!");
    };

    return <button onClick={handleClick}>Click Me</button>;
}

export default ClickHandler;
```

**Explanation:**
- `onClick` is attached to the button.
- `handleClick` executes when the button is clicked.

---

## **Conditional Rendering**
Render different elements based on conditions.

### **Example: Conditional Rendering**
```javascript
import React from 'react';

function UserGreeting({ isLoggedIn }) {
    return isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign in.</h1>;
}

export default UserGreeting;
```

**Explanation:**
- Ternary operator determines the rendered element based on `isLoggedIn`.

---

## **Lists and Keys**
Keys help React identify elements in a list.

### **Example: Rendering Lists**
```javascript
import React from 'react';

function NameList() {
    const names = ["Vikas", "Aditya", "Monish"];

    return (
        <ul>
            {names.map((name, index) => (
                <li key={index}>{name}</li>
            ))}
        </ul>
    );
}

export default NameList;
```

**Explanation:**
- `key` ensures efficient updates for list elements.

---

## **React Fragments**
Fragments let you group multiple elements without adding extra nodes.

### **Example: Using Fragments**
```javascript
import React from 'react';

function FragmentDemo() {
    return (
        <>
            <h1>Title</h1>
            <p>Description</p>
        </>
    );
}

export default FragmentDemo;
```

**Explanation:**
- `<></>` is shorthand for `React.Fragment`.

---

## **Introduction to the Virtual DOM**
The Virtual DOM is a lightweight copy of the real DOM. React updates only the changed parts, improving performance.

### **Benefits**
1. Faster updates.
2. Efficient rendering.
3. Better user experience.

---

## **Virtual DOM Reconciliation**
React compares the Virtual DOM with the previous version and applies minimal changes to the real DOM.

### **Example: Demonstrating Updates**
```javascript
import React, { useState } from 'react';

function UpdateDemo() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default UpdateDemo;
```

**Explanation:**
- Updating `count` triggers Virtual DOM reconciliation, updating only the `p` element in the real DOM.
