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
```

#### 2. **Number**
- **Definition**: Integers or floating-point numbers.
- **Example:**
```javascript
let score = 95.5;
```

#### 3. **Boolean**
- **Definition**: Represents `true` or `false`.
- **Example:**
```javascript
let isLoggedIn = true;
```

#### 4. **Undefined**
- **Definition**: A variable declared but not assigned a value.
- **Example:**
```javascript
let x;
console.log(x); // undefined
```

#### 5. **Null**
- **Definition**: Represents an empty or non-existent value.
- **Example:**
```javascript
let noValue = null;
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
console.log(user.name); // Accessing properties
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

### Deep Dive: Scoping in Modern Programming
Discuss `var`, `let`, and `const` in detail, highlighting their differences.

---

## 5. Working with Numbers

#### Example (JavaScript):
```javascript
let num1 = 10;
let num2 = 3;

// Arithmetic
console.log(num1 + num2); // 13
console.log(num1 - num2); // 7
console.log(num1 * num2); // 30
console.log(num1 / num2); // 3.33
console.log(num1 % num2); // 1 (remainder)
```

#### Real-World Example: Calculator Implementation
Write a simple calculator function that takes two numbers and an operator as input.

#### Hands-On: Building Arithmetic Functions
1. Implement a program that uses all arithmetic operators.
2. Use the `Math` object to perform advanced operations like power and square root.

---

## 6. Working with Booleans

#### Interactive Poll: Boolean Logic Scenarios
Present the audience with scenarios like "Can the user log in if `isAdmin` is true and `hasAccess` is false?".

#### Hands-On: Creating Decision-Making Logic
1. Write conditional statements to check login permissions.
2. Use logical operators to handle multiple conditions.

---

## Conclusion
By incorporating hands-on activities, real-world examples, and interactive elements, this session aims to make the concept of variables engaging and practical. Practice these exercises to build a solid foundation in programming.
