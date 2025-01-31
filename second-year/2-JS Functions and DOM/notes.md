# Technical Workshop: Functions and HTML DOM Manipulation

## Overview
This workshop is designed to introduce participants to the fundamentals of JavaScript functions and HTML DOM manipulation. The content will cover theory and practical examples, with hands-on activities to solidify the concepts.

---

## Workshop Agenda

1. **Introduction to Functions**
   - Function Declaration
   - Function Expressions
   - Parameters and Arguments
   - Scope and Closures
   - Anonymous and Arrow Functions
   - Function Invocation and Execution

2. **HTML DOM Revision**
   - Accessing DOM Elements
   - Manipulating DOM Elements
   - Event Handling
   - Browser Compatibility and Cross-Browser Considerations

3. **Practical Exercises**
   - Interactive Code Demonstrations
   - Hands-on Activities

4. **Q&A and Discussion**

---

## Section 1: Functions

### 1.1 Function Declaration
**Theory:**
- Declared using the `function` keyword.
- Example:

```javascript
function greet(name) {
  console.log(`Hello, ${name}!`);
}
```
**Explanation:** This function takes a parameter `name` and logs a greeting message using the template literal syntax.

### Characteristics
1. **Hoisted:** Function declarations are hoisted to the top of their scope. This means they can be called before they are defined in the code.
2. **Named Function:** The function must have a name.
3. **Reusability:** Functions defined this way can be reused throughout the code.

---

## Types of Functions via Declaration

### 1. Simple Function Declaration
A basic function that takes arguments and returns a value.
```javascript
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Vikas")); // Output: Hello, Vikas!
```

### 2. Function with Default Parameters
A function can have default values for parameters if no argument is provided during the function call.
```javascript
function calculateSum(a = 0, b = 0) {
    return a + b;
}
console.log(calculateSum(5, 3)); // Output: 8
console.log(calculateSum(5));    // Output: 5 (b defaults to 0)
```

### 3. Recursive Function
A function that calls itself to perform a repeated operation.
```javascript
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); // Output: 120
```

### 4. Helper Function
These functions are smaller utility functions designed to perform specific tasks that support larger functionalities.
```javascript
function isEven(num) {
    return num % 2 === 0;
}
console.log(isEven(4)); // Output: true
```

---

## Example with Multiple Parameters
```javascript
function findMax(a, b, c) {
    return Math.max(a, b, c);
}
console.log(findMax(10, 20, 15)); // Output: 20
```

---

## Key Advantages
1. **Readability:** Named functions improve code readability.
2. **Reusability:** The function can be reused multiple times with different arguments.
3. **Debugging:** Errors in named functions provide meaningful stack traces.

**Practical:**
- Write a function that calculates the square of a number.

```javascript
function square(num) {
  return num * num;
}
console.log(square(5));
```
**Explanation:** The function `square` accepts a number as input, multiplies it by itself, and returns the result.

### 1.2 Function Expressions
**Theory:**
- Functions can be stored in variables.
- Example:

```javascript
const greet = function(name) {
  console.log(`Hi, ${name}!`);
};
```
**Explanation:** This is a function expression where the function is stored in a constant `greet`. It works similarly to a function declaration.

**Practical:**
- Create a function expression to check if a number is even.

```javascript
const isEven = function(num) {
  return num % 2 === 0;
};
console.log(isEven(4));
```
**Explanation:** The function checks if the remainder of the number divided by 2 is zero, which means the number is even.

### 1.3 Parameters and Arguments
**Theory:**
- Parameters: Variables listed in the function definition.
- Arguments: Values passed to the function when invoked.

**Practical:**
- Create a function that calculates the area of a rectangle.

```javascript
function rectangleArea(length, width) {
  return length * width;
}
console.log(rectangleArea(5, 10));
```
**Explanation:** The function `rectangleArea` takes two parameters, `length` and `width`, and returns the product of the two, which is the area.

### 1.4 Scope and Closures
**Theory:**
- Scope: Defines the visibility of variables.
- Closure: A function that retains access to its parent scope.
- Example:

```javascript
function outerFunction() {
  const outerVariable = 'I am outer';
  return function innerFunction() {
    console.log(outerVariable);
  };
}
const inner = outerFunction();
inner();
```
**Explanation:** The `innerFunction` retains access to `outerVariable` even after `outerFunction` has completed execution, demonstrating closure.

**Practical:**
- Create a counter function using closures.

```javascript
function createCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}
const counter = createCounter();
console.log(counter());
console.log(counter());
```
**Explanation:** The `createCounter` function creates a private variable `count`. Each time the returned function is called, `count` is incremented and its value is returned.

### 1.5 Anonymous and Arrow Functions
**Theory:**
- Anonymous: Functions without a name.
- Arrow Functions: Concise syntax.
- Example:

```javascript
const add = (a, b) => a + b;
console.log(add(3, 7));
```
**Explanation:** This is an arrow function that takes two arguments `a` and `b`, and returns their sum in a concise syntax.

**Practical:**
- Write an arrow function to filter even numbers from an array.

```javascript
const evenNumbers = [1, 2, 3, 4, 5].filter(num => num % 2 === 0);
console.log(evenNumbers);
```
**Explanation:** The arrow function filters out numbers from the array that are not even, returning a new array with only even numbers.

---

## Section 2: HTML DOM Manipulation

### 2.1 Accessing DOM Elements

- Use methods like `getElementById`, `querySelector`, `getElementsByClassName`, `getElementsByTagName`, `querySelectorAll`.

#### Using `getElementById`
```javascript
const heading = document.getElementById('title');
console.log(heading.textContent);
```
**Explanation:** Retrieves the DOM element with the ID `title` and logs its text content to the console.

#### Using `querySelector`
```javascript
const heading = document.querySelector('#title');
console.log(heading.textContent);
```
**Explanation:** Selects the first element that matches the CSS selector `#title` and logs its text content.

#### Using `getElementsByClassName`
```javascript
const items = document.getElementsByClassName('list-item');
console.log(items[0].textContent);
```
**Explanation:** Selects all elements with the class `list-item` and logs the text content of the first element.

#### Using `getElementsByTagName`
```javascript
const paragraphs = document.getElementsByTagName('p');
console.log(paragraphs[0].textContent);
```
**Explanation:** Selects all `<p>` elements and logs the text content of the first one.

#### Using `querySelectorAll`
```javascript
const buttons = document.querySelectorAll('button');
buttons.forEach(button => console.log(button.textContent));
```
**Explanation:** Selects all `button` elements and logs their text content using `forEach`.

#### Practical Example

```html
<p id="message">Hello DOM!</p>
<script>
const message = document.getElementById('message');
console.log(message.textContent);
</script>
```
**Explanation:** Accesses the `<p>` element with ID `message` and logs its content "Hello DOM!".

---

### 2.2 Manipulating DOM Elements

#### Theory
- Modify content, styles, or attributes using properties like `textContent`, `innerHTML`, `style`, `setAttribute`.

#### Changing Text Content
```javascript
document.getElementById('title').textContent = 'New Title';
```
**Explanation:** Updates the text content of the element with ID `title`.

#### Changing Inner HTML
```javascript
document.getElementById('container').innerHTML = '<p>New content</p>';
```
**Explanation:** Replaces the inner HTML of `container` with a new paragraph.

#### Modifying Styles
```javascript
document.getElementById('box').style.backgroundColor = 'blue';
```
**Explanation:** Changes the background color of the `box` element to blue.

#### Adding/Removing Classes
```javascript
document.getElementById('box').classList.add('highlight');
document.getElementById('box').classList.remove('highlight');
```
**Explanation:** Adds and removes the `highlight` class from the `box` element.

#### Changing Attributes
```javascript
document.getElementById('link').setAttribute('href', 'https://example.com');
```
**Explanation:** Updates the `href` attribute of the link.

```html
<div id="box" style="width:100px; height:100px; background:red;"></div>
<button onclick="changeColor()">Change Color</button>
<script>
function changeColor() {
  document.getElementById('box').style.background = 'blue';
}
</script>
```
**Explanation:** Changes the `box` background color when the button is clicked.

---

### 2.3 Event Handling

- Use event listeners (`addEventListener`) or inline event handlers.

#### Using `addEventListener`
```javascript
document.querySelector('button').addEventListener('click', () => {
  alert('Button clicked!');
});
```
**Explanation:** Adds an event listener that displays an alert when the button is clicked.

#### Handling Keyboard Events
```javascript
document.addEventListener('keydown', (event) => {
  console.log(`Key pressed: ${event.key}`);
});
```
**Explanation:** Logs the key pressed by the user.

#### Handling Mouse Events
```javascript
document.getElementById('box').addEventListener('mouseover', () => {
  console.log('Mouse over the box!');
});
```
**Explanation:** Logs a message when the mouse hovers over the `box` element.

#### Practical Example

```html
<button id="alertButton">Click Me</button>
<script>
document.getElementById('alertButton').addEventListener('click', () => {
  alert('Button clicked!');
});
</script>
```
**Explanation:** Displays an alert when the button is clicked.

**Practical:**
- Create a form that logs the input value on submission.

```html
<form id="myForm">
  <input type="text" id="name" placeholder="Enter your name" />
  <button type="submit">Submit</button>
</form>
<script>
document.getElementById('myForm').addEventListener('submit', event => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  console.log(name);
});
</script>
```
**Explanation:** The form submission is intercepted using `preventDefault()`, and the value entered in the input field is logged to the console.

### 2.4 Browser Compatibility and Cross-Browser Considerations

When developing web applications, ensuring cross-browser compatibility is crucial. Different browsers may support different features, so feature detection is used to check if a feature is available before using it. This prevents errors in unsupported browsers.

#### Feature Detection Example: `querySelector`
```javascript
if ('querySelector' in document) {
  console.log('querySelector is supported.');
} else {
  console.log('querySelector is not supported.');
}
```
**Explanation:**
- The code checks if `querySelector` exists in the `document` object.
- If present, it logs that `querySelector` is supported.
- Otherwise, it logs that the method is not available.

##### 1. Detecting `localStorage`
```javascript
if (typeof localStorage !== 'undefined') {
  console.log('localStorage is available.');
} else {
  console.log('localStorage is not supported.');
}
```
**Explanation:**
- Checks if `localStorage` is defined in the `window` object.
- If available, it logs support for `localStorage`.
- If not, it logs that `localStorage` is not supported.

##### 2. Checking for `fetch` API Support
```javascript
if ('fetch' in window) {
  console.log('Fetch API is supported.');
} else {
  console.log('Fetch API is not supported. Consider using XMLHttpRequest instead.');
}
```
**Explanation:**
- Verifies if `fetch` is available in the `window` object.
- If `fetch` is supported, it logs a message confirming availability.
- Otherwise, it suggests using `XMLHttpRequest` as a fallback.

##### 3. Detecting CSS Grid Support
```javascript
if ('grid' in document.body.style) {
  console.log('CSS Grid is supported.');
} else {
  console.log('CSS Grid is not supported. Consider using Flexbox as a fallback.');
}
```
**Explanation:**
- Checks if `grid` is a property in `document.body.style`.
- If supported, it logs a message.
- If not, it suggests using `Flexbox` as an alternative.

##### 4. Checking for `Service Workers`
```javascript
if ('serviceWorker' in navigator) {
  console.log('Service Workers are supported.');
} else {
  console.log('Service Workers are not supported.');
}
```
**Explanation:**
- Determines if `serviceWorker` exists in the `navigator` object.
- If present, it logs that Service Workers are available.
- Otherwise, it logs that they are unsupported.

##### 5. Verifying `WebSockets` Support
```javascript
if ('WebSocket' in window) {
  console.log('WebSockets are supported.');
} else {
  console.log('WebSockets are not supported. Consider using long polling.');
}
```
**Explanation:**
- Checks for the presence of `WebSocket` in the `window` object.
- If available, it logs that WebSockets are supported.
- Otherwise, it suggests using long polling as a fallback.

---

## Practical Exercises

### Exercise 1: Create a Counter
- Build a counter using closures.
- Add buttons to increment and reset the counter.

```HTML
<button id="increment">Increment</button>
<button id="reset">Reset</button>
<p>Count: <span id="count">0</span></p>
<script>
function createCounter() {
    let count = 0;
    return {
        increment: function() {
            count++;
            document.getElementById('count').textContent = count;
        },
        reset: function() {
            count = 0;
            document.getElementById('count').textContent = count;
        }
    };
}
const counter = createCounter();
document.getElementById('increment').addEventListener('click', counter.increment);
document.getElementById('reset').addEventListener('click', counter.reset);
</script>
```

### Exercise 2: Interactive To-Do List
- Allow users to add and remove tasks dynamically.
```HTML
<input type="text" id="taskInput" placeholder="Enter a task">
<button onclick="addTask()">Add Task</button>
<ul id="taskList"></ul>
<script>
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    
    if (taskInput.value.trim() === '') return;
    
    const li = document.createElement('li');
    li.textContent = taskInput.value;
    
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.onclick = () => taskList.removeChild(li);
    
    li.appendChild(removeButton);
    taskList.appendChild(li);
    
    taskInput.value = '';
}
</script>
```

### Exercise 3: Color Theme Switcher
- Add buttons to toggle between light and dark themes.
```HTML
<button onclick="toggleTheme()">Toggle Theme</button>
<script>
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}
</script>
<style>
.dark-theme {
    background-color: black;
    color: white;
}
</style>
```