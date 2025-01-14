# Understanding Encapsulation in Object-Oriented Programming (OOP)

## Overview
This 4-hour session will cover the concept of **Encapsulation** in Object-Oriented Programming (OOP), focusing on how data can be protected from outside interference and how objects interact with each other. We'll also dive into **data hiding**, **access control**, **private/public members**, and techniques for implementing encapsulation in **JavaScript**. By the end of this session, you'll have a strong understanding of how encapsulation works and how to apply it in your JavaScript projects.

## Session Breakdown

### 1. **Introduction to Encapsulation (15 mins)**

Encapsulation is one of the fundamental principles of **Object-Oriented Programming (OOP)**. It refers to the concept of bundling the data (properties) and the methods (functions) that operate on the data into a single unit or class.

#### Key Concepts:
- **Data Hiding:** Hiding internal object details from the outside world.
- **Access Control:** Controlling how the data is accessed and modified.
- **Private vs. Public Members:** Defining which properties and methods are accessible outside the class.

#### Code Example:
```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const person1 = new Person("John", 30);
person1.greet(); // Output: Hello, my name is John
```

**Explanation:**
- Here, the `Person` class encapsulates two properties (`name`, `age`) and one method (`greet`). The `greet` method is used to access the `name` property and output it in the console. This is a simple example of encapsulation, where data (name and age) is encapsulated within the object, and only the `greet` method interacts with it.

---

### 2. **Data Hiding and Access Control (30 mins)**

Data hiding is a technique to restrict direct access to an object's internal state, ensuring that the object maintains control over its own data. This is implemented via **access control** mechanisms, such as public, private, and protected members.

#### Access Control in JavaScript:
- **Public Members:** Accessible outside the class.
- **Private Members:** Not directly accessible outside the class.

#### Private Members using Symbol (Introduced in ES6):
```javascript
const _age = Symbol('age');

class Person {
  constructor(name, age) {
    this.name = name;
    this[_age] = age;
  }

  getAge() {
    return this[_age];
  }

  setAge(age) {
    if (age > 0) {
      this[_age] = age;
    }
  }
}

const person1 = new Person('John', 30);
console.log(person1.getAge()); // 30
person1.setAge(35);
console.log(person1.getAge()); // 35
```
**Explanation:**
- In this example, the `_age` property is made private by using a `Symbol`. The `getAge` and `setAge` methods are used to interact with the private `_age` property. This demonstrates how JavaScript provides an option to simulate private properties with `Symbols`, which can't be accessed directly from outside the class.

---

### 3. **Private and Public Members in JavaScript (30 mins)**

JavaScript allows us to control the visibility of members using closures or newer syntax for private fields.

#### Using ES6 Class Fields (Private and Public Members):
```javascript
class Car {
  #speed = 0; // Private field

  constructor(make, model) {
    this.make = make; // Public field
    this.model = model; // Public field
  }

  accelerate() {
    this.#speed += 10;
  }

  getSpeed() {
    return this.#speed;
  }
}

const car1 = new Car("Toyota", "Corolla");
car1.accelerate();
console.log(car1.getSpeed()); // 10
// console.log(car1.#speed); // Error: Private field '#speed' must be declared in an enclosing class
```
**Explanation:**
- The `#speed` property is defined as a private field using the ES6 private field syntax. This field cannot be accessed directly from outside the class, as seen in the commented line `console.log(car1.#speed)` which would throw an error. Instead, the `getSpeed` method is used to safely access the private speed.

---

### 4. **Encapsulating Data with Getters and Setters (30 mins)**

Getters and setters allow controlled access to object properties. A getter retrieves a property, while a setter modifies it.

#### Code Example:
```javascript
class Rectangle {
  constructor(length, width) {
    this._length = length;
    this._width = width;
  }

  get area() {
    return this._length * this._width;
  }

  set length(value) {
    if (value > 0) {
      this._length = value;
    }
  }

  set width(value) {
    if (value > 0) {
      this._width = value;
    }
  }
}

const rectangle = new Rectangle(10, 5);
console.log(rectangle.area); // 50
rectangle.length = 20;
console.log(rectangle.area); // 100
```
**Explanation:**
- Here, the `area` is a getter, which calculates and returns the area of the rectangle. The `length` and `width` properties are set via setters that ensure only positive values are assigned to them. This is an example of how getters and setters can be used to encapsulate the internal logic of the class while still allowing access to specific properties in a controlled manner.

---

### 5. **Benefits and Importance of Encapsulation (15 mins)**

Encapsulation offers several benefits, including:

- **Data Protection:** Ensures that object data is modified only through defined methods.
- **Abstraction:** Hides unnecessary details from the user.
- **Maintainability:** Makes code easier to manage and update by changing only the internal implementation without affecting external code.
- **Modularity:** Encourages a modular approach where each class is responsible for its own behavior.

---

### 6. **Implementing Encapsulation in JavaScript Classes (30 mins)**

Let's implement encapsulation in JavaScript classes to protect the internal state.

#### Code Example:
```javascript
class BankAccount {
  #balance = 0;

  constructor(accountNumber) {
    this.accountNumber = accountNumber;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
    }
  }

  withdraw(amount) {
    if (amount <= this.#balance) {
      this.#balance -= amount;
    } else {
      console.log("Insufficient funds");
    }
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount(12345);
account.deposit(1000);
account.withdraw(500);
console.log(account.getBalance()); // 500
```
**Explanation:**
- In this example, the `#balance` is a private field, and it's only accessible and modifiable through the `deposit`, `withdraw`, and `getBalance` methods. This ensures that the balance is protected from being changed directly, and it can only be modified through defined operations, ensuring the integrity of the account balance.

---

### 7. **Using Closures for Private Members (30 mins)**

In JavaScript, closures can also be used to create private members. This is a common technique in older JavaScript versions before private fields were introduced.

#### Code Example:
```javascript
function createPerson(name, age) {
  let _name = name;
  let _age = age;

  return {
    getName: function() {
      return _name;
    },
    getAge: function() {
      return _age;
    },
    setAge: function(age) {
      if (age > 0) _age = age;
    },
  };
}

const person = createPerson("Alice", 25);
console.log(person.getName()); // Alice
console.log(person.getAge()); // 25
person.setAge(30);
console.log(person.getAge()); // 30
```
**Explanation:**
- This example demonstrates how closures can be used to create private variables (`_name`, `_age`) that are not directly accessible from outside the function. The `getName`, `getAge`, and `setAge` methods provide controlled access to these private variables, demonstrating the use of closures for encapsulation in JavaScript.

---

### 8. **Weak Encapsulation Techniques (30 mins)**

Weak encapsulation refers to cases where private data is still accessible, though it is less common.

#### Example of Weak Encapsulation:
```javascript
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius ** 2;
  }
}

const circle = new Circle(5);
console.log(circle.getArea()); // 78.54
console.log(circle.radius); // 5 (Direct access to the radius)
```
**Explanation:**
- Here, the `radius` property is public, meaning it can be accessed and modified directly from outside the class. This is an example of weak encapsulation, where the object’s internal data is exposed and can be accessed or changed without any control.

---

### 9. **Encapsulation in Module Systems (30 mins)**

Encapsulation is also critical in JavaScript module systems. Both **CommonJS** and **ES6 Modules** provide ways to control the exposure of internal methods and variables.

#### CommonJS Example:
```javascript
// bankAccount.js
let balance = 0;

function deposit(amount) {
  balance += amount;
}

function getBalance() {
  return balance;
}

module.exports = { deposit, getBalance };

// main.js
const bankAccount = require('./bankAccount');
bankAccount.deposit(100);
console.log(bankAccount.getBalance()); // 100
```
**Explanation:**
- In the CommonJS example, the `balance` variable is hidden from external modules. Only the `deposit` and `getBalance` functions are exposed. This is a form of encapsulation where the internal state (`balance`) is hidden, and the external world interacts with it through the exposed methods.

#### ES6 Module Example:
```javascript
// bankAccount.js
let balance = 0;

export function deposit(amount) {
  balance += amount;
}

export function getBalance() {
  return balance;
}

// main.js
import { deposit, getBalance } from './bankAccount.js';
deposit(100);
console.log(getBalance()); // 100
```
**Explanation:**
- The ES6 module example works similarly to the CommonJS example. The internal `balance` is encapsulated within the module, and the external code interacts with it using the `deposit` and `getBalance` functions.

---

### 10. **Encapsulation in Prototypal Inheritance (30 mins)**

In JavaScript, objects inherit properties and methods from other objects. Even with prototypal inheritance, encapsulation can be applied to control access to inherited properties.

#### Code Example:
```javascript
function Animal(name) {
  let _name = name;

  this.getName = function() {
    return _name;
  };
}

Animal.prototype.sayHello = function() {
  console.log(`Hello, I am ${this.getName()}`);
};

const dog = new Animal('Dog');
dog.sayHello(); // Hello, I am Dog
// console.log(dog._name); // Error: Cannot access private member _name
```
**Explanation:**
- In this example, the `Animal` constructor function has a private variable `_name` which is encapsulated using closures. The `getName` method provides controlled access to the private `_name` variable. The `sayHello` method is inherited by objects created using the `Animal` constructor.

---

### 11. **Quiz (15 mins)**

1. **What is encapsulation in OOP?**
   - aa) Hiding the implementation details of an object
   - b) Making data public for easy access
   - c) Grouping only data
   - d) Grouping only methods

2. **How do private members differ from public members?**
   - a) Public members are accessible inside the class only
   - bb) Private members are not accessible outside the class
   - c) Private members can be accessed directly from the object
   - d) Public members are always immutable

3. **Which of the following methods allows controlled access to object properties in JavaScript?**
   - aa) Setters
   - b) Constructors
   - c) Loops
   - d) Functions

4. **What does weak encapsulation mean in JavaScript?**
   - a) The class hides all its data
   - bb) Internal data can be accessed but is not intended to be directly manipulated
   - c) Data is encrypted
   - d) Data is not defined inside the class

5. **What is the main advantage of using closures for private members in JavaScript?**
   - a) It makes the class more secure
   - b) It prevents the data from being modified
   - cc) It hides data from the outside world
   - d) It increases the speed of execution

---

### Conclusion (5 mins)
In this session, we covered how encapsulation works in OOP and how it is implemented in JavaScript. We also explored practical examples, private/public member definitions, the use of getters and setters, and different methods of encapsulating data. Understanding encapsulation is crucial for writing maintainable and secure code, and now you should be able to apply these concepts in your JavaScript applications.
```