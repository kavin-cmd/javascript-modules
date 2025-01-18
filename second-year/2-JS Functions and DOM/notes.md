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
**Theory:**
- Use methods like `getElementById`, `querySelector`, etc.
- Example:

```javascript
const heading = document.getElementById('title');
console.log(heading.textContent);
```
**Explanation:** This code retrieves the DOM element with the ID `title` and logs its text content to the console.

**Practical:**
- Access and log the text of an element with ID `message`.

```html
<p id="message">Hello DOM!</p>
<script>
const message = document.getElementById('message');
console.log(message.textContent);
</script>
```
**Explanation:** The script accesses the `<p>` element with ID `message` and logs its content "Hello DOM!" to the console.

### 2.2 Manipulating DOM Elements
**Theory:**
- Modify content, styles, or attributes.
- Example:

```javascript
document.getElementById('title').textContent = 'New Title';
```
**Explanation:** This changes the text content of the element with the ID `title` to "New Title".

**Practical:**
- Change the background color of a `<div>` element on button click.

```html
<div id="box" style="width:100px; height:100px; background:red;"></div>
<button onclick="changeColor()">Change Color</button>
<script>
function changeColor() {
  document.getElementById('box').style.background = 'blue';
}
</script>
```
**Explanation:** The function `changeColor` changes the background color of the `box` element to blue when the button is clicked.

### 2.3 Event Handling
**Theory:**
- Use event listeners or inline handlers.
- Example:

```javascript
document.querySelector('button').addEventListener('click', () => {
  alert('Button clicked!');
});
```
**Explanation:** This adds an event listener to a button. When clicked, an alert box is displayed with the message "Button clicked!".

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
**Theory:**
- Use feature detection.
- Example:

```javascript
if ('querySelector' in document) {
  console.log('querySelector is supported.');
} else {
  console.log('querySelector is not supported.');
}
```
**Explanation:** This checks if the `querySelector` method is supported by the browser and logs the appropriate message.

**Practical:**
- Create a feature detection snippet for `localStorage`.

```javascript
if (typeof localStorage !== 'undefined') {
  console.log('localStorage is available.');
} else {
  console.log('localStorage is not supported.');
}
```
**Explanation:** The code detects the presence of `localStorage` and logs whether it is supported or not.

---

## Practical Exercises

### Exercise 1: Create a Counter
- Build a counter using closures.
- Add buttons to increment and reset the counter.

### Exercise 2: Interactive To-Do List
- Allow users to add and remove tasks dynamically.

### Exercise 3: Color Theme Switcher
- Add buttons to toggle between light and dark themes.
