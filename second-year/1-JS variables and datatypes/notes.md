# Introduction to Variables

Variables are containers for storing data values. They play a foundational role in programming as they allow you to store, retrieve, and manipulate data during the execution of a program. This session will cover variables, their types, scope, and manipulation with detailed explanations and examples.

---

## Table of Contents
1. **Declaration and Naming Conventions**
   - Hands-On: Declaring Variables
   - Quiz: Naming Conventions
2. **Data Types**
   - Primitive Types
   - Objects
   - Interactive Demo: Exploring Data Types
   - Hands-On: Creating and Manipulating Data Types
3. **Type Coercion**
   - Real-World Example: Data Parsing in Forms
   - Quiz: Type Coercion Scenarios
4. **Variable Scope**
   - Deep Dive: Scoping in Modern Programming
   - Hands-On: Experimenting with Scopes
5. **Working with Numbers**
   - Real-World Example: Calculator Implementation
   - Hands-On: Building Arithmetic Functions
6. **Working with Booleans**
   - Interactive Poll: Boolean Logic Scenarios
   - Hands-On: Creating Decision-Making Logic

---

## 1. Declaration and Naming Conventions

### Declaration
Variables are declared using keywords depending on the programming language:
- **JavaScript**: `let`, `const`, `var`
- **C**: `int`, `float`, etc.
- **Python**: No explicit keyword is required for variable declaration.

### Naming Conventions
- Must begin with a letter, `$`, or `_`.
- Cannot use reserved keywords.
- Use camelCase for naming (e.g., `userName`).
- Be descriptive (e.g., `age` instead of `a`).

#### Example (JavaScript):
```javascript
let userName = "Vikas"; // Variable declaration
const $pi = 3.14; // Constant declaration
var _age = 25; // Older way of declaring variables
```
**Explanation:**
- `let` is used to declare a variable whose value can change.
- `const` declares a constant whose value cannot be changed.
- `var` is an older way to declare variables (now less commonly used due to scoping issues).

#### More Examples:
```javascript
// Variable reassignment
let city = "Mumbai";
console.log(city); // Mumbai
city = "Delhi";
console.log(city); // Delhi

// Constant behavior
const gravity = 9.8;
console.log(gravity); // 9.8
// gravity = 10; // Error: Assignment to constant variable

// Variable hoisting (var only)
console.log(hoistedVar); // undefined
var hoistedVar = "I am hoisted";
console.log(hoistedVar); // I am hoisted
```

#### Hands-On: Declaring Variables
1. Open a text editor or IDE.
2. Declare variables using `let`, `const`, and `var`.
3. Experiment with reassigning values to variables declared with `const` and observe the error messages.

#### Quiz: Naming Conventions
1. Which of the following is a valid variable name?
   - a) 1name
   - b) $price
   - c) var
   - d) _data

Answer: b, d

---

## 2. Data Types

### Primitive Types
These are the basic building blocks of data in a language.

#### 1. **String**
- **Definition**: Text enclosed in quotes.
- **Example:**
```javascript
let greeting = "Hello, World!";
console.log(greeting); // Hello, World!

// String concatenation
let firstName = "John";
let lastName = "Doe";
console.log(firstName + " " + lastName); // John Doe
```

#### 2. **Number**
- **Definition**: Integers or floating-point numbers.
- **Example:**
```javascript
let score = 95.5;
console.log(score); // 95.5

// Basic operations
let a = 10;
let b = 3;
console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.333...
console.log(a % b); // 1
```

#### 3. **Boolean**
- **Definition**: Represents `true` or `false`.
- **Example:**
```javascript
let isLoggedIn = true;
console.log(isLoggedIn); // true

// Conditional example
if (isLoggedIn) {
    console.log("Welcome back!");
} else {
    console.log("Please log in.");
}
```

#### 4. **Undefined**
- **Definition**: A variable declared but not assigned a value.
- **Example:**
```javascript
let x;
console.log(x); // undefined
x = 10;
console.log(x); // 10
```

#### 5. **Null**
- **Definition**: Represents an empty or non-existent value.
- **Example:**
```javascript
let noValue = null;
console.log(noValue); // null
```

### Objects
Objects are collections of key-value pairs used to store complex data.

#### Example (JavaScript):
```javascript
let user = {
    name: "Vikas",
    age: 25,
    isMember: true
};
console.log(user.name); // Accessing properties: Vikas

// Adding new properties
user.city = "Mumbai";
console.log(user.city); // Mumbai

// Nested objects
let company = {
    name: "TechCorp",
    employees: {
        count: 500,
        locations: ["India", "USA"]
    }
};
console.log(company.employees.count); // 500
console.log(company.employees.locations[1]); // USA
```

#### Interactive Demo: Exploring Data Types
Use the browser console to experiment with different data types.
- Declare variables of type `string`, `number`, and `boolean`.
- Create an object and access its properties.

#### Hands-On: Creating and Manipulating Data Types
1. Write a program that defines variables of different data types.
2. Perform operations such as concatenation, arithmetic, and property access.

---

## 3. Type Coercion

Type coercion occurs when a value is automatically converted from one type to another.

#### Example (JavaScript):
```javascript
console.log("5" + 5); // "55" (String concatenation)
console.log("5" - 2); // 3 (String converted to number)
console.log(Boolean(0)); // false (0 coerced to false)
```

#### Real-World Example: Data Parsing in Forms
Scenario: A web form sends all inputs as strings. Use type coercion to convert numeric inputs for calculations.

```javascript
function calculateTotal(price, quantity) {
    return parseFloat(price) * parseInt(quantity);
}

let price = "19.99";
let quantity = "3";
console.log(calculateTotal(price, quantity)); // 59.97
```

#### More Examples:
```javascript
// Comparing different types
console.log(5 == "5"); // true (type coercion)
console.log(5 === "5"); // false (strict equality, no coercion)

// Boolean coercion in conditions
if ("0") {
    console.log("Truthy"); // Executed because non-empty string is truthy
}
if (0) {
    console.log("Falsy"); // Not executed because 0 is falsy
}
```

#### Quiz: Type Coercion Scenarios
What is the output of the following code?
```javascript
console.log("10" * 2);
console.log("Hello" - 5);
```
Answer: 20, NaN

---

## 4. Variable Scope

Scope determines the visibility and lifetime of variables.

### Global Scope
Accessible throughout the program.

#### Example:
```javascript
let globalVar = "I am global";
console.log(globalVar); // Accessible anywhere
```

### Local Scope
Accessible within a block or function.

#### Hands-On: Experimenting with Scopes
1. Declare variables in the global scope.
2. Create a function and declare variables inside it.
3. Try accessing local variables from the global scope.

```javascript
function demoScope() {
    let localVar = "I am local";
    console.log(localVar); // Accessible within function
}

demoScope();
// console.log(localVar); // Error: localVar is not defined
```

### Deep Dive: Scoping in Modern Programming
Discuss `var`, `let`, and `const` in detail, highlighting their differences.

- `var` has function scope and is hoisted.
- `let` and `const` have block scope and are not accessible before declaration.

Here’s a detailed explanation of **hoisting** in JavaScript, with examples, written in Markdown format:

Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use variables and functions before they are declared in the code.

## Key Points About Hoisting:
1. **Only declarations are hoisted, not initializations.**
2. **`var` is hoisted and initialized to `undefined`.**
3. **`let` and `const` are hoisted but are not initialized, leading to a `Temporal Dead Zone (TDZ)` if accessed before declaration.**
4. **Function declarations are fully hoisted.**

---

## Example 1: Variable Hoisting with `var`
```javascript
console.log(a); // Output: undefined
var a = 5;
console.log(a); // Output: 5
```

### Explanation
- The `var` declaration is hoisted to the top, but its initialization is not.
- During execution:
  1. The `var a` declaration is moved to the top.
  2. `console.log(a)` logs `undefined` because the initialization (`a = 5`) has not been executed yet.
  3. After initialization, `console.log(a)` logs `5`.

---

## Example 2: Hoisting with `let` and `const`
```javascript
console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 10;

console.log(c); // ReferenceError: Cannot access 'c' before initialization
const c = 20;
```

### Explanation
- Both `let` and `const` declarations are hoisted, but their initializations are not.
- Accessing `b` or `c` before their declaration results in a `ReferenceError` because they are in the **Temporal Dead Zone (TDZ)**.

---

## Example 3: Function Declaration Hoisting
```javascript
greet(); // Output: Hello, World!

function greet() {
  console.log("Hello, World!");
}
```

### Explanation
- Function declarations are fully hoisted, meaning both the declaration and definition are moved to the top of the scope.
- This allows you to call the `greet` function before its declaration.

---

## Example 4: Function Expression Hoisting
```javascript
sayHi(); // TypeError: sayHi is not a function

var sayHi = function () {
  console.log("Hi!");
};
```

### Explanation
- Only the variable declaration `var sayHi` is hoisted, not the function definition.
- During execution:
  1. `sayHi` is initialized to `undefined` because the function expression is not hoisted.
  2. Trying to call `sayHi()` before its definition results in a `TypeError`.

---

## Example 5: Class Hoisting
```javascript
const obj = new MyClass(); // ReferenceError: Cannot access 'MyClass' before initialization

class MyClass {
  constructor() {
    this.name = "JavaScript";
  }
}
```

### Explanation
- Classes are hoisted like `let` and `const`, but they are not initialized.
- Accessing the class before its declaration results in a `ReferenceError`.

---

## Summary Table

| Type                | Hoisted?        | Initialized to `undefined`? | Access before declaration? |
|---------------------|-----------------|-----------------------------|----------------------------|
| `var`              | Yes             | Yes                         | `undefined`               |
| `let`              | Yes             | No                          | `ReferenceError`          |
| `const`            | Yes             | No                          | `ReferenceError`          |
| Function Declaration | Yes            | Fully hoisted               | Yes                       |
| Function Expression | Partially       | Only variable hoisted       | `TypeError`               |
| Class Declaration  | Yes             | No                          | `ReferenceError`          |

Understanding hoisting helps prevent bugs and improve readability in JavaScript code. Always declare variables and functions at the top of their scope for clarity!

---

## 5. Working with Numbers

JavaScript provides various operators and built-in methods to work with numbers. Let’s explore basic arithmetic operations, real-world calculator implementations, and advanced Math object functionalities.

---

### Example 1: Basic Arithmetic Operations

```javascript
let num1 = 10;
let num2 = 3;

// Arithmetic
console.log(num1 + num2); // 13
console.log(num1 - num2); // 7
console.log(num1 * num2); // 30
console.log(num1 / num2); // 3.3333333333333335
console.log(num1 % num2); // 1 (remainder)
```

### Explanation
1. `+` adds the two numbers.
2. `-` subtracts `num2` from `num1`.
3. `*` multiplies `num1` and `num2`.
4. `/` divides `num1` by `num2` and returns a floating-point result.
5. `%` computes the remainder of the division.

---

### Example 2: Real-World Example - Simple Calculator Function

```javascript
function calculator(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
    case "%":
      return num1 % num2;
    default:
      return "Invalid operator";
  }
}

// Testing the calculator function
console.log(calculator(10, 3, "+")); // 13
console.log(calculator(10, 3, "-")); // 7
console.log(calculator(10, 3, "*")); // 30
console.log(calculator(10, 3, "/")); // 3.3333333333333335
console.log(calculator(10, 3, "%")); // 1
console.log(calculator(10, 0, "/")); // Cannot divide by zero
```

### Explanation
- The function accepts two numbers and an operator as input.
- It performs the corresponding operation using a `switch` statement.
- Edge cases like division by zero are handled gracefully.

---

### Example 3: Hands-On Arithmetic Functions with Math Object

```javascript
let num1 = 16;
let num2 = 4;

// Basic Arithmetic
console.log(num1 + num2); // 20
console.log(num1 - num2); // 12
console.log(num1 * num2); // 64
console.log(num1 / num2); // 4
console.log(num1 % num2); // 0

// Advanced Operations
console.log(Math.pow(num1, 2)); // 256 (16 squared)
console.log(Math.sqrt(num1)); // 4 (Square root of 16)
console.log(Math.max(num1, num2)); // 16 (Maximum of 16 and 4)
console.log(Math.min(num1, num2)); // 4 (Minimum of 16 and 4)
console.log(Math.round(4.567)); // 5 (Round to nearest integer)
console.log(Math.ceil(4.2)); // 5 (Round up)
console.log(Math.floor(4.8)); // 4 (Round down)
console.log(Math.random()); // Random number between 0 and 1
console.log((Math.random() * 100).toFixed(2)); // Random number between 0 and 100 with 2 decimals
```

### Explanation
1. **Basic Arithmetic**:
   - Uses standard operators for addition, subtraction, multiplication, and division.
   - Remainder is computed using `%`.

2. **Advanced Math Object**:
   - `Math.pow(x, y)`: Raises `x` to the power of `y`.
   - `Math.sqrt(x)`: Calculates the square root of `x`.
   - `Math.max(x, y)`: Returns the maximum of given values.
   - `Math.min(x, y)`: Returns the minimum of given values.
   - `Math.round(x)`, `Math.ceil(x)`, `Math.floor(x)`: Round to the nearest integer, up, or down respectively.
   - `Math.random()`: Generates a random number between `0` and `1`.

---

### Example 4: Comprehensive Calculator with Advanced Operations

```javascript
function advancedCalculator(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
    case "%":
      return num1 % num2;
    case "pow":
      return Math.pow(num1, num2);
    case "sqrt1":
      return Math.sqrt(num1);
    case "sqrt2":
      return Math.sqrt(num2);
    default:
      return "Invalid operator";
  }
}

// Testing advancedCalculator
console.log(advancedCalculator(16, 4, "pow")); // 65536
console.log(advancedCalculator(16, 4, "sqrt1")); // 4
console.log(advancedCalculator(16, 4, "sqrt2")); // 2
console.log(advancedCalculator(16, 4, "+")); // 20
```

### Explanation
- This calculator supports both basic and advanced operations.
- Additional operators like `"pow"` and `"sqrt1"` are implemented using the Math object.

---

## 6. Working with Booleans

Booleans represent logical values: `true` or `false`. They are fundamental in decision-making logic and are often used in conditional statements and logical expressions.

---

## Example 1: Boolean Logic Scenarios

### Scenario: Can the user log in?
- **Conditions**:
  - The user can log in if they are an admin (`isAdmin === true`) OR if they have access (`hasAccess === true`).

```javascript
let isAdmin = true;
let hasAccess = false;

if (isAdmin || hasAccess) {
  console.log("User can log in."); // Output: User can log in.
} else {
  console.log("Access denied.");
}
```

### Explanation
- The logical `OR (||)` operator checks if at least one of the conditions is `true`.
- Here, `isAdmin` is `true`, so the user can log in, even if `hasAccess` is `false`.

---

## Example 2: Strict Login Permissions
- **Conditions**:
  - The user can log in only if they are an admin **AND** they have access.

```javascript
let isAdmin = true;
let hasAccess = false;

if (isAdmin && hasAccess) {
  console.log("User can log in.");
} else {
  console.log("Access denied."); // Output: Access denied.
}
```

### Explanation
- The logical `AND (&&)` operator checks if **both** conditions are `true`.
- Since `hasAccess` is `false`, the user is denied access.

---

## Example 3: Combining Multiple Conditions

### Scenario: Validate User Login with Additional Flags
- **Conditions**:
  - The user can log in if they are an admin OR have access, and their account is active.

```javascript
let isAdmin = false;
let hasAccess = true;
let isActive = true;

if ((isAdmin || hasAccess) && isActive) {
  console.log("User can log in."); // Output: User can log in.
} else {
  console.log("Access denied.");
}
```

### Explanation
- The parentheses group `isAdmin || hasAccess`, which evaluates to `true`.
- The logical `AND (&&)` ensures that the account must also be active (`isActive === true`).

---

## Example 4: Decision-Making Logic with `NOT` Operator

### Scenario: Deny Access to Inactive Accounts
- **Condition**:
  - Deny access if the account is not active.

```javascript
let isActive = false;

if (!isActive) {
  console.log("Account is inactive. Access denied."); // Output: Account is inactive. Access denied.
} else {
  console.log("Account is active. Welcome!");
}
```

### Explanation
- The logical `NOT (!)` operator inverts the boolean value of `isActive`.
- If `isActive` is `false`, the condition `!isActive` evaluates to `true`.

---

## Example 5: Hands-On - Login Permissions Function

### Scenario: Write a function to validate login permissions

```javascript
function canUserLogIn(isAdmin, hasAccess, isActive) {
  if ((isAdmin || hasAccess) && isActive) {
    return "User can log in.";
  } else {
    return "Access denied.";
  }
}

// Test cases
console.log(canUserLogIn(true, false, true)); // Output: User can log in.
console.log(canUserLogIn(false, true, false)); // Output: Access denied.
console.log(canUserLogIn(false, false, true)); // Output: Access denied.
```

### Explanation
- This function accepts three parameters and returns whether the user can log in based on the conditions.
- It handles multiple scenarios efficiently.

---

## Example 6: Logical Operators in Short-Circuiting

```javascript
let isAdmin = false;
let message = isAdmin && "Welcome Admin!";
console.log(message); // Output: false

let hasAccess = true;
message = hasAccess || "Access Restricted!";
console.log(message); // Output: true
```

### Explanation
- **`&&` (AND)**: If the left-hand side is `false`, it stops and returns the left-hand side.
- **`||` (OR)**: If the left-hand side is `true`, it stops and returns the left-hand side.

---

## Summary of Logical Operators

| Operator  | Description                               | Example                     | Result                         |
|-----------|-------------------------------------------|-----------------------------|--------------------------------|
| `&&`      | Logical AND: All conditions must be true  | `true && false`             | `false`                       |
| `||`      | Logical OR: At least one condition is true| `true || false`             | `true`                        |
| `!`       | Logical NOT: Inverts a boolean value      | `!true`                     | `false`                       |

---

## Real-World Applications
1. **Authentication**:
   - Validate user roles and permissions before granting access.
2. **Feature Toggles**:
   - Enable or disable features based on user preferences or account status.
3. **Dynamic UI**:
   - Show or hide UI elements based on conditions.

Boolean logic is a cornerstone of programming, enabling dynamic and intelligent behavior in applications.

---

## Conclusion
By incorporating hands-on activities, real-world examples, and interactive elements, this session aims to make the concept of variables engaging and practical. Practice these exercises to build a solid foundation in programming.
