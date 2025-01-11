# React Hooks Workshop

## **Introduction to React Hooks**
React Hooks allow you to use state and lifecycle features in functional components. They simplify the logic by enabling reusable stateful logic without using classes.

---

## **useState Hook**
The `useState` hook lets you add state to functional components.

### **Example: Counter with useState**
```javascript
import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default Counter;
```

**Explanation:**
- `useState(0)` initializes the state with `0`.
- `setCount` updates the state.

### **Example: Toggling State**
```javascript
import React, { useState } from 'react';

function Toggle() {
    const [isOn, setIsOn] = useState(false);

    return (
        <button onClick={() => setIsOn(!isOn)}>
            {isOn ? "ON" : "OFF"}
        </button>
    );
}

export default Toggle;
```

**Explanation:**
- Clicking the button toggles the `isOn` state between `true` and `false`.

---

## **Rendering in React**
React updates the UI efficiently by re-rendering components when state or props change.

### **Example: Rendering List Items**
```javascript
import React, { useState } from 'react';

function NameList() {
    const [names, setNames] = useState(["Alice", "Bob", "Charlie"]);

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
- The `map()` function renders each name in the list.
- `key` helps React identify individual list items for efficient updates.

---

## **Conditional Rendering with useState**
Control rendering based on state.

### **Example: Login Form**
```javascript
import React, { useState } from 'react';

function LoginForm() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div>
            {isLoggedIn ? (
                <h1>Welcome Back!</h1>
            ) : (
                <button onClick={() => setIsLoggedIn(true)}>Login</button>
            )}
        </div>
    );
}

export default LoginForm;
```

**Explanation:**
- The `isLoggedIn` state determines whether to show the login button or the welcome message.

---

## **Effect Hook**
The `useEffect` hook allows you to perform side effects like fetching data, subscriptions, or DOM manipulations.

### **Example: Fetching Data**
```javascript
import React, { useState, useEffect } from 'react';

function FetchData() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    return (
        <ul>
            {data.slice(0, 5).map(post => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    );
}

export default FetchData;
```

**Explanation:**
- `useEffect` runs after the component mounts to fetch data.
- The empty dependency array `[]` ensures the effect runs only once.

### **Example: Updating the Document Title**
```javascript
import React, { useState, useEffect } from 'react';

function DocumentTitle() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]);

    return (
        <button onClick={() => setCount(count + 1)}>
            Increment
        </button>
    );
}

export default DocumentTitle;
```

**Explanation:**
- The document title updates whenever `count` changes.

---

## **Custom Hooks**
Custom hooks allow you to extract and reuse logic between components.

### **Example: Custom Hook for Window Size**
```javascript
import React, { useState, useEffect } from 'react';

function useWindowSize() {
    const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });

    useEffect(() => {
        const handleResize = () => setSize({ width: window.innerWidth, height: window.innerHeight });
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return size;
}

function WindowSizeComponent() {
    const size = useWindowSize();

    return (
        <p>Width: {size.width}, Height: {size.height}</p>
    );
}

export default WindowSizeComponent;
```

**Explanation:**
- `useWindowSize` encapsulates the logic for tracking window size.
- Reusable across components.

---

## **Performance Optimization**
React provides tools like `React.memo` and hooks like `useMemo` and `useCallback` for optimization.

### **Example: Using React.memo**
```javascript
import React from 'react';

const ChildComponent = React.memo(({ value }) => {
    console.log("Rendered Child Component");
    return <p>Value: {value}</p>;
});

function ParentComponent() {
    const [count, setCount] = React.useState(0);
    const [value, setValue] = React.useState(10);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
            <button onClick={() => setValue(value + 1)}>Increment Value</button>
            <ChildComponent value={value} />
        </div>
    );
}

export default ParentComponent;
```

**Explanation:**
- `React.memo` prevents unnecessary re-renders of `ChildComponent`.

---

## **Rules of Hooks**
1. Only call hooks at the top level.
2. Only call hooks from React functions or custom hooks.

---

## **React DevTools**
React DevTools help inspect and debug React components in the browser.

### **Key Features:**
1. Inspect component hierarchy.
2. View props and state.
3. Monitor performance.