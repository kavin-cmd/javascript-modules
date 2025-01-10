### **Introduction to Variables**
Variables are containers for storing data values. They play a foundational role in programming as they allow you to store, retrieve, and manipulate data during the execution of a program.

#### **Declaration and Naming Conventions**
1. **Declaration**: Variables are declared using keywords depending on the programming language (e.g., `let`, `const`, `var` in JavaScript, `int`, `float` in C, etc.).
2. **Naming Conventions**:
   - Must begin with a letter, `$`, or `_`.
   - Cannot use reserved keywords.
   - Use camelCase for naming (e.g., `userName`).
   - Be descriptive (e.g., `age` instead of `a`).

**Example (JavaScript)**:
```javascript
let userName = "Vikas"; // Variable declaration
const $pi = 3.14; // Constant declaration
var _age = 25; // Older way of declaring variables
```
**Explanation:** In the example above:
- `let` is used to declare a variable whose value can change.
- `const` declares a constant whose value cannot be changed.
- `var` is an older way to declare variables (now less commonly used due to scoping issues).

---

### **Data Types**

#### **Primitive Types**
These are the basic building blocks of data in a language.

1. **String**: Text enclosed in quotes.
   - Example:
     ```javascript
     let greeting = "Hello, World!";
     ```
   **Explanation:** Strings are sequences of characters. Here, `greeting` holds the value "Hello, World!".

2. **Number**: Integers or floating-point numbers.
   - Example:
     ```javascript
     let score = 95.5;
     ```
   **Explanation:** The variable `score` holds a numeric value of 95.5.

3. **Boolean**: Represents `true` or `false`.
   - Example:
     ```javascript
     let isLoggedIn = true;
     ```
   **Explanation:** The variable `isLoggedIn` holds a boolean value `true`.

4. **Undefined**: A variable declared but not assigned a value.
   - Example:
     ```javascript
     let x;
     console.log(x); // undefined
     ```
   **Explanation:** Here, `x` is declared but has no assigned value, so it defaults to `undefined`.

5. **Null**: Represents an empty or non-existent value.
   - Example:
     ```javascript
     let noValue = null;
     ```
   **Explanation:** The variable `noValue` is explicitly assigned a `null` value, indicating it is empty.

---

#### **Objects**
Objects are collections of key-value pairs used to store complex data.

**Example (JavaScript)**:
```javascript
let user = {
    name: "Vikas",
    age: 25,
    isMember: true
};
console.log(user.name); // Accessing properties
```
**Explanation:** The `user` object contains properties like `name`, `age`, and `isMember`. You can access a property using dot notation, e.g., `user.name`.

---

#### **Type Coercion**
Type coercion occurs when a value is automatically converted from one type to another.

**Example (JavaScript)**:
```javascript
console.log("5" + 5); // "55" (String concatenation)
console.log("5" - 2); // 3 (String converted to number)
console.log(Boolean(0)); // false (0 coerced to false)
```
**Explanation:**
- In the first example, the number `5` is coerced into a string and concatenated with "5".
- In the second example, the string "5" is coerced into a number before subtraction.
- In the third example, `0` is coerced into a boolean value `false`.

---

### **Variable Scope**
Scope determines the visibility and lifetime of variables.

1. **Global Scope**: Accessible throughout the program.
   - Example:
     ```javascript
     let globalVar = "I am global";
     console.log(globalVar); // Accessible anywhere
     ```
   **Explanation:** Variables declared outside of any block or function are globally scoped and can be accessed anywhere in the code.

2. **Local Scope**: Accessible within a block or function.
   - Example:
     ```javascript
     function greet() {
         let localVar = "I am local";
         console.log(localVar);
     }
     greet();
     // console.log(localVar); // Error: localVar is not defined
     ```
   **Explanation:** `localVar` is declared inside the function `greet` and cannot be accessed outside its scope.

3. **Block Scope**: Declared within `{}` using `let` or `const`.
   - Example:
     ```javascript
     {
         let blockVar = "Block Scoped";
         console.log(blockVar);
     }
     // console.log(blockVar); // Error
     ```
   **Explanation:** `blockVar` is accessible only within the block where it is defined.

---

### **Working with Numbers**
Numbers in programming can be manipulated using arithmetic operations, functions, and libraries.

**Example (JavaScript)**:
```javascript
let num1 = 10;
let num2 = 3;

// Arithmetic
console.log(num1 + num2); // 13
console.log(num1 - num2); // 7
console.log(num1 * num2); // 30
console.log(num1 / num2); // 3.33
console.log(num1 % num2); // 1 (remainder)

// Functions
console.log(Math.pow(num1, 2)); // 100
console.log(Math.sqrt(25)); // 5
```
**Explanation:**
- Arithmetic operations perform basic mathematical calculations.
- `Math.pow` raises `num1` to the power of 2.
- `Math.sqrt` calculates the square root of a number.

---

### **Working with Boolean**
Booleans are often used for decision-making in programming.

**Example (JavaScript)**:
```javascript
let isAdult = true;
let hasPermission = false;

// Logical Operators
console.log(isAdult && hasPermission); // false (AND)
console.log(isAdult || hasPermission); // true (OR)
console.log(!isAdult); // false (NOT)

// Conditional Statements
if (isAdult) {
    console.log("Access granted.");
} else {
    console.log("Access denied.");
}
```
**Explanation:**
- Logical operators (`&&`, `||`, `!`) are used to combine or negate boolean values.
- In the conditional statement, the program checks if `isAdult` is `true` and prints the corresponding message.
