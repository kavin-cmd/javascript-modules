# Advanced JavaScript Workshop: Prototypal Inheritance and Object-Oriented Programming

## Overview
This workshop explores JavaScript's object-oriented capabilities, focusing on prototypal inheritance and related concepts. Participants will learn about prototype chains, constructor functions, ES6 classes, and advanced inheritance techniques with engaging examples, discussions, and quizzes.

---

## Workshop Agenda

1. **Introduction to Prototypal Inheritance**
   - What is Prototypal Inheritance?  
   - Example with a prototype chain.  

2. **Creating and Extending Objects with Prototype Chains**
   - Using `Object.create`  
   - Setting up custom prototype chains.  

3. **Constructor Functions and the `new` Keyword**
   - Creating objects using constructors.  
   - How `new` works under the hood.  

4. **The Prototype Object and Prototype Methods**
   - Adding methods to the prototype.  
   - Optimizing memory usage.  

5. **Overriding and Inheriting Methods**
   - Method overriding in the prototype chain.  

6. **The `super` Keyword and Calling Parent Methods**
   - How `super` enables cleaner inheritance.  

7. **Classical Inheritance vs. Prototypal Inheritance**
   - Key differences with examples.  

8. **Constructor Stealing and Object Composition**
   - Using constructor functions for inheritance.  
   - Favoring composition over inheritance.  

9. **Mixins and Multiple Inheritance**
   - Creating reusable functionality with mixins.  

10. **Implementing Inheritance with ES6 Classes**
    - Modern inheritance patterns with `class`.  

11. **Interactive Exercises and MCQs**
    - Test and reinforce understanding with quizzes and coding challenges.  

---

## Section 1: Introduction to Prototypal Inheritance

**What is Prototypal Inheritance?**  
Prototypal inheritance allows objects to inherit properties and methods from another object through the prototype chain. Every JavaScript object has an internal link to another object, known as its prototype.

**Example:**
```javascript
const person = {
  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }
};

const john = Object.create(person);
john.name = 'John';
john.greet(); // Hello, my name is John.
```

**Explanation:**  
- `john` inherits from `person` via `Object.create`.  
- The `greet` method is not defined on `john` but is accessible through the prototype chain.  

**Insight:**  
Prototype chains reduce memory consumption by sharing methods among objects.  

---

## Section 2: Creating and Extending Objects with Prototype Chains

**Using `Object.create`:**  
```javascript
const animal = {
  makeSound() {
    console.log('Some generic sound');
  }
};

const dog = Object.create(animal);
dog.bark = function () {
  console.log('Woof!');
};

dog.makeSound(); // Some generic sound
dog.bark();      // Woof!
```

**Explanation:**  
- `Object.create` creates a new object with `animal` as its prototype.  
- Custom methods like `bark` can be added to the derived object.  

**Engaging Insight:**  
Using `Object.create` is a cleaner alternative to constructors when setting up inheritance.  

---

## Section 3: Constructor Functions and the `new` Keyword

### What are Constructor Functions?
Constructor functions are special functions in JavaScript used to create and initialize objects. When called with the `new` keyword, they act as templates for creating multiple similar objects.

---

### Example 1: Creating a Simple Constructor Function

```javascript
function Car(make, model) {
  this.make = make;
  this.model = model;
}

Car.prototype.start = function() {
  console.log(`${this.make} ${this.model} is starting.`);
};

const myCar = new Car('Toyota', 'Corolla');
myCar.start(); // Toyota Corolla is starting.
```

**Explanation:**
1. `Car` is a constructor function, which is like a blueprint for creating car objects.
2. The `new` keyword:
   - Creates a new object.
   - Sets the prototype of the object to `Car.prototype`.
   - Assigns `this` inside the constructor to the newly created object.
3. The `start` method is shared among all objects created by `Car` because it is added to `Car.prototype`.

---

### Example 2: Adding More Properties and Methods

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.introduce = function() {
  console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
};

const alice = new Person('Alice', 25);
const bob = new Person('Bob', 30);

alice.introduce(); // Hi, I'm Alice and I'm 25 years old.
bob.introduce();   // Hi, I'm Bob and I'm 30 years old.
```

**Explanation:**
- The `Person` constructor initializes `name` and `age` for each instance.
- The `introduce` method is defined on the prototype, ensuring it is shared among all instances.

---

### Example 3: Combining Constructor Functions with Prototypes

```javascript
function Book(title, author) {
  this.title = title;
  this.author = author;
}

Book.prototype.getDetails = function() {
  return `${this.title} by ${this.author}`;
};

const book1 = new Book('1984', 'George Orwell');
const book2 = new Book('To Kill a Mockingbird', 'Harper Lee');

console.log(book1.getDetails()); // 1984 by George Orwell
console.log(book2.getDetails()); // To Kill a Mockingbird by Harper Lee
```

**Key Points:**
- The `Book` constructor initializes unique properties for each object.
- The `getDetails` method is shared via the prototype, making it memory-efficient.

---

### Example 4: Understanding the Role of `new`

```javascript
function Animal(type) {
  this.type = type;
}

Animal.prototype.makeSound = function() {
  console.log(`${this.type} is making a sound.`);
};

const dog = new Animal('Dog');
dog.makeSound(); // Dog is making a sound.
```

**Step-by-Step Process of `new Animal('Dog')`**:
1. A new empty object is created: `{}`.
2. The prototype of this object is set to `Animal.prototype`.
3. The `Animal` function is called with `this` bound to the new object.
4. The `type` property is added to the new object.
5. The new object is returned.

---

### Example 5: Adding Default Values in Constructors

```javascript
function Product(name = 'Generic Product', price = 0) {
  this.name = name;
  this.price = price;
}

Product.prototype.details = function() {
  console.log(`${this.name} costs $${this.price}.`);
};

const defaultProduct = new Product();
const customProduct = new Product('Laptop', 999);

defaultProduct.details(); // Generic Product costs $0.
customProduct.details();  // Laptop costs $999.
```

**Explanation:**
- Default values ensure that if no arguments are passed, the object will still have meaningful properties.

---

### Example 6: Sharing Methods with Prototype

```javascript
function Vehicle(type, speed) {
  this.type = type;
  this.speed = speed;
}

Vehicle.prototype.move = function() {
  console.log(`${this.type} is moving at ${this.speed} km/h.`);
};

const car = new Vehicle('Car', 120);
const bike = new Vehicle('Bike', 60);

car.move(); // Car is moving at 120 km/h.
bike.move(); // Bike is moving at 60 km/h.
```

**Insight:**  
Using prototypes ensures that methods like `move` are not duplicated for each object instance, improving memory usage.

---

### Example 7: Overriding Methods in Instances

```javascript
function Gadget(name) {
  this.name = name;
}

Gadget.prototype.getDescription = function() {
  return `This is a gadget called ${this.name}.`;
};

const phone = new Gadget('Phone');
phone.getDescription = function() {
  return `This is a smartphone named ${this.name}.`;
};

console.log(phone.getDescription()); // This is a smartphone named Phone.

const tablet = new Gadget('Tablet');
console.log(tablet.getDescription()); // This is a gadget called Tablet.
```

**Explanation:**  
- Methods can be overridden in individual instances without affecting other objects or the prototype.

---

### Interactive MCQs

**MCQ 1:** What does the `new` keyword do in JavaScript?  
1. Creates a new object.  
2. Sets the prototype of the object to the constructor’s prototype.  
3. Binds `this` inside the constructor to the new object.  
4. All of the above.  

**Answer:** 4. All of the above  

**MCQ 2:** Where should methods be added in a constructor function for memory efficiency?  
1. Inside the constructor.  
2. On the prototype of the constructor.  
3. On each instance of the object.  
4. None of the above.  

**Answer:** 2. On the prototype of the constructor  

**MCQ 3:** What happens if you forget to use `new` with a constructor function?  
1. An error is thrown.  
2. The function executes in the global context, and `this` refers to the global object (`window` in browsers).  
3. A default object is returned.  
4. The prototype chain breaks.  

**Answer:** 2. The function executes in the global context, and `this` refers to the global object.

---

### Key Takeaways
1. Constructor functions act as blueprints for creating objects.
2. The `new` keyword simplifies object creation and ensures proper prototype chaining.
3. Adding methods to the prototype saves memory and ensures efficient inheritance.
4. Methods can be overridden at the instance level when needed.

---

This concludes **Section 3: Constructor Functions and the `new` Keyword**. Let me know if you'd like to enhance any section further!

---

## Section 4: The Prototype Object and Prototype Methods

### What is the Prototype Object?
The prototype object in JavaScript is a built-in object associated with every function and is used to share properties and methods across all instances created by that function.

---

### Example 1: Adding Methods to the Prototype

```javascript
function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.getArea = function() {
  return Math.PI * this.radius ** 2;
};

const smallCircle = new Circle(5);
console.log(smallCircle.getArea()); // 78.53981633974483
```

**Explanation:**
1. The `Circle` constructor initializes the `radius` property for each instance.
2. The `getArea` method is added to `Circle.prototype` and shared across all instances.
3. This approach saves memory as the method is not duplicated for each object.

---

### Example 2: Adding Multiple Methods to the Prototype

```javascript
function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

Rectangle.prototype.getArea = function() {
  return this.length * this.width;
};

Rectangle.prototype.getPerimeter = function() {
  return 2 * (this.length + this.width);
};

const myRectangle = new Rectangle(10, 5);
console.log(myRectangle.getArea());       // 50
console.log(myRectangle.getPerimeter());  // 30
```

**Explanation:**
- The `getArea` and `getPerimeter` methods are defined on the prototype of `Rectangle`.
- Both methods are shared among all `Rectangle` instances, ensuring efficient memory usage.

---

### Example 3: Checking the Prototype Chain

```javascript
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  return `${this.name} makes a noise.`;
};

const dog = new Animal('Dog');

console.log(dog.speak());             // Dog makes a noise.
console.log(dog.__proto__ === Animal.prototype); // true
console.log(Animal.prototype.isPrototypeOf(dog)); // true
```

**Explanation:**
1. `dog.__proto__` points to `Animal.prototype`.
2. The `isPrototypeOf` method checks if `Animal.prototype` is in the prototype chain of `dog`.

---

### Example 4: Overriding Prototype Methods

```javascript
function Vehicle(type) {
  this.type = type;
}

Vehicle.prototype.describe = function() {
  return `This is a ${this.type}.`;
};

const car = new Vehicle('Car');
console.log(car.describe()); // This is a Car.

car.describe = function() {
  return `This is a customized ${this.type}.`;
};

console.log(car.describe()); // This is a customized Car.
```

**Explanation:**
- The `describe` method from `Vehicle.prototype` is overridden in the `car` instance.
- Other `Vehicle` instances still use the original prototype method.

---

### Example 5: Using Prototype for Shared Properties

```javascript
function User(name) {
  this.name = name;
}

User.prototype.role = 'Guest';

const user1 = new User('Alice');
const user2 = new User('Bob');

console.log(user1.role); // Guest
console.log(user2.role); // Guest

user1.role = 'Admin';
console.log(user1.role); // Admin
console.log(user2.role); // Guest
```

**Explanation:**
- The `role` property is shared via the prototype.
- Changing `role` directly on `user1` creates a new property on `user1` without affecting the prototype or `user2`.

---

### Example 6: Extending Built-in Prototypes

```javascript
Array.prototype.sum = function() {
  return this.reduce((total, num) => total + num, 0);
};

const numbers = [1, 2, 3, 4, 5];
console.log(numbers.sum()); // 15
```

**Explanation:**
- A custom method `sum` is added to `Array.prototype`.
- All arrays in the program inherit this method, allowing seamless summation of array elements.

---

### Example 7: Dynamic Addition of Methods

```javascript
function Gadget(name) {
  this.name = name;
}

const gadget = new Gadget('Smartphone');

// Dynamically add a method to Gadget's prototype
Gadget.prototype.getName = function() {
  return `This gadget is called ${this.name}.`;
};

console.log(gadget.getName()); // This gadget is called Smartphone.
```

**Explanation:**
- Methods can be added to the prototype dynamically, even after creating instances.
- Existing instances automatically gain access to the newly added method.

---

### MCQs for Prototype Object and Methods

**MCQ 1:** What is the primary purpose of the prototype in JavaScript?  
1. To store instance-specific properties.  
2. To share methods and properties among all instances.  
3. To override the constructor function.  
4. To create private methods for an object.  

**Answer:** 2. To share methods and properties among all instances.  

---

**MCQ 2:** Which of the following methods checks if an object exists in another object's prototype chain?  
1. `isPrototypeOf()`  
2. `hasOwnProperty()`  
3. `Object.keys()`  
4. `Object.assign()`  

**Answer:** 1. `isPrototypeOf()`  

---

**MCQ 3:** What happens if a property or method is not found in an object?  
1. It throws an error.  
2. It looks for the property or method in the prototype chain.  
3. It returns `undefined` without further checks.  
4. It creates a new property or method dynamically.  

**Answer:** 2. It looks for the property or method in the prototype chain.  

---

**MCQ 4:** Which method checks if an object directly contains a property (not inherited from the prototype)?  
1. `hasOwnProperty()`  
2. `isPrototypeOf()`  
3. `Object.keys()`  
4. `Object.getPrototypeOf()`  

**Answer:** 1. `hasOwnProperty()`  

---

### Key Takeaways
1. Methods and properties added to the prototype are shared among all instances, optimizing memory usage.
2. JavaScript's prototype chain allows dynamic method lookups, ensuring efficient inheritance.
3. The prototype can be dynamically extended, and new methods are available to all existing instances.
4. Use `isPrototypeOf` and `hasOwnProperty` to inspect object inheritance and direct properties.

---

## Section 5: Overriding and Inheriting Methods

### What is Method Overriding?
Method overriding in JavaScript occurs when a method in a derived object or class has the same name as a method in its prototype or parent class. The derived method replaces (or "overrides") the parent method for that specific instance or class.

---

### Example 1: Overriding a Prototype Method

```javascript
const vehicle = {
  start() {
    console.log('Vehicle is starting.');
  }
};

const bike = Object.create(vehicle);
bike.start = function() {
  console.log('Bike is starting.');
};

bike.start(); // Bike is starting.
vehicle.start(); // Vehicle is starting.
```

**Explanation:**
1. `bike` is created using `Object.create(vehicle)` and inherits all methods from `vehicle`.
2. The `start` method in `bike` overrides the `start` method from `vehicle`.
3. The overridden method in `bike` only affects the `bike` object.

---

### Example 2: Overriding Methods in a Constructor Function

```javascript
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  console.log(`${this.name} makes a noise.`);
};

function Dog(name) {
  Animal.call(this, name);
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.speak = function() {
  console.log(`${this.name} barks.`);
};

const dog = new Dog('Rex');
dog.speak(); // Rex barks.
```

**Explanation:**
1. `Dog` inherits from `Animal` using `Object.create(Animal.prototype)`.
2. The `speak` method in `Dog.prototype` overrides the method in `Animal.prototype`.
3. When `dog.speak()` is called, the overridden method in `Dog` is executed.

---

### Example 3: Overriding Methods in ES6 Classes

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog('Max');
dog.speak(); // Max barks.
```

**Explanation:**
1. The `Dog` class extends the `Animal` class using the `extends` keyword.
2. The `speak` method in the `Dog` class overrides the `speak` method in the `Animal` class.
3. The overridden method in `Dog` is executed when `speak` is called on a `Dog` instance.

---

### Example 4: Using `super` to Call Parent Methods

```javascript
class Person {
  greet() {
    console.log('Hello from Person.');
  }
}

class Employee extends Person {
  greet() {
    super.greet(); // Call the parent class's greet method
    console.log('Hello from Employee.');
  }
}

const emp = new Employee();
emp.greet();
// Output:
// Hello from Person.
// Hello from Employee.
```

**Explanation:**
1. The `super` keyword is used to call the method from the parent class.
2. The `Employee` class's `greet` method calls `Person`'s `greet` method before executing its own logic.

---

### Example 5: Overriding Methods Dynamically

```javascript
const animal = {
  speak() {
    console.log('Animal is speaking.');
  }
};

const dog = Object.create(animal);
dog.speak(); // Animal is speaking.

dog.speak = function() {
  console.log('Dog is barking.');
};

dog.speak(); // Dog is barking.
```

**Explanation:**
1. The `dog` object initially uses the `speak` method from its prototype (`animal`).
2. The `speak` method is dynamically overridden on the `dog` object, replacing the one inherited from `animal`.

---

### Example 6: Method Overriding with Mixins

Mixins are a design pattern in JavaScript that allows objects to share functionalities by merging their properties and methods. When two or more objects have methods with the same name, the method in the last added object overrides the previous one. This is especially useful for combining behaviors in a flexible and reusable way.

```javascript
const baseBehavior = {
  walk() {
    console.log('Walking...');
  }
};

const advancedBehavior = {
  walk() {
    console.log('Running...');
  }
};

const robot = Object.assign({}, baseBehavior);
robot.walk(); // Walking...

Object.assign(robot, advancedBehavior);
robot.walk(); // Running...
```

**Explanation:**
1. The `robot` object is first assigned the `walk` method from `baseBehavior`.
2. The `walk` method from `advancedBehavior` overrides the original `walk` method when merged with `robot`.

---

### MCQs on Overriding and Inheriting Methods

**MCQ 1:** Which keyword is used to call a parent class's method in a subclass?  
1. `this`  
2. `parent`  
3. `super`  
4. `inherit`  

**Answer:** 3. `super`  

---

**MCQ 2:** What happens if a method is overridden in a derived class?  
1. The parent class's method is permanently replaced.  
2. The derived class uses its own method, but the parent method remains accessible.  
3. The parent class is removed from the prototype chain.  
4. It throws an error.  

**Answer:** 2. The derived class uses its own method, but the parent method remains accessible.  

---

**MCQ 3:** Which method is used to dynamically create an object that inherits from another object?  
1. `Object.create()`  
2. `Object.assign()`  
3. `Object.prototype()`  
4. `Object.define()`  

**Answer:** 1. `Object.create()`  

---

**MCQ 4:** What will the following code output?  

```javascript
class Parent {
  greet() {
    console.log('Hello from Parent.');
  }
}

class Child extends Parent {
  greet() {
    console.log('Hello from Child.');
  }
}

const child = new Child();
child.greet();
```

1. `Hello from Parent.`  
2. `Hello from Child.`  
3. Error: Cannot override parent methods.  
4. Both `Hello from Parent.` and `Hello from Child.`  

**Answer:** 2. `Hello from Child.`  

---

### Key Takeaways
1. Overriding allows derived objects or classes to redefine methods from their prototypes or parent classes.
2. The `super` keyword enables calling the parent method from within an overridden method.
3. Dynamic overriding can modify object behavior at runtime.
4. Method overriding is essential for achieving polymorphism and tailored functionality in object-oriented programming.

---

## Section 6: The `super` Keyword and Calling Parent Methods

**Using `super`:**  
```javascript
class Animal {
  speak() {
    console.log('Animal speaking...');
  }
}

class Dog extends Animal {
  speak() {
    super.speak();
    console.log('Dog barking...');
  }
}

const myDog = new Dog();
myDog.speak();
// Animal speaking...
// Dog barking...
```

**Explanation:**  
- `super.speak()` calls the parent method, enabling the derived class to build on it.  

---

## Section 7: Classical Inheritance vs. Prototypal Inheritance

| **Aspect**               | **Classical Inheritance** | **Prototypal Inheritance** |
|---------------------------|---------------------------|----------------------------|
| Nature                   | Rigid, blueprint-based.  | Flexible, object-based.   |
| Inheritance Setup        | Classes and constructors | `Object.create`           |
| Multiple Inheritance     | Not supported.           | Supported via mixins.     |

---

## Section 8: Constructor Stealing and Object Composition

**Constructor Stealing:**  
```javascript
function Parent(name) {
  this.name = name;
}

function Child(name, age) {
  Parent.call(this, name);
  this.age = age;
}

const child = new Child('Alice', 10);
console.log(child.name); // Alice
console.log(child.age);  // 10
```

---

## Section 9: Mixins and Multiple Inheritance

**Using Mixins:**  
```javascript
const canFly = {
  fly() {
    console.log('Flying high!');
  }
};

const canSwim = {
  swim() {
    console.log('Swimming deep!');
  }
};

const bird = Object.assign({}, canFly, canSwim);
bird.fly(); // Flying high!
bird.swim(); // Swimming deep!
```

---

## Section 10: Implementing Inheritance with ES6 Classes

**Example:**  
```javascript
class Vehicle {
  constructor(type) {
    this.type = type;
  }

  move() {
    console.log(`${this.type} is moving.`);
  }
}

class Truck extends Vehicle {
  move() {
    super.move();
    console.log('Truck is carrying cargo.');
  }
}

const truck = new Truck('Truck');
truck.move();
// Truck is moving.
// Truck is carrying cargo.
```

---

## Interactive Exercises and MCQs

**Exercise 1:**  
Create a `Library` class with methods to add and remove books. Extend it to `PublicLibrary` and add a method to issue a book.  

**MCQ:**  
Which of the following is true about ES6 classes?  
1. They are syntactic sugar over prototypes.  
2. They make inheritance easier.  
3. Both 1 and 2.  

**Answer:** 3. Both 1 and 2  

---

## Closing  
- Recap major concepts.  
- Address questions and provide additional resources.  
- Conduct feedback for future sessions.  