# Object-Oriented Programming (OOP) Workshop

## **Introduction to Object-Oriented Programming (OOP)**
Object-Oriented Programming (OOP) is a programming paradigm that organizes code around objects. These objects can encapsulate data (properties) and behavior (methods). OOP promotes modular, reusable, and scalable code by adhering to its core principles.

### **Core Principles of OOP**
1. **Encapsulation**:
   - Bundles data (properties) and methods (functions) into a single unit called an object.
   - Provides controlled access to the object’s data via public or private methods.
   
   **Example:**
   ```javascript
   class Person {
       constructor(name, age) {
           this._name = name; // private property by convention
           this._age = age;
       }

       getDetails() {
           return `Name: ${this._name}, Age: ${this._age}`;
       }
   }

   const person = new Person("Vikas", 30);
   console.log(person.getDetails()); // Output: Name: Vikas, Age: 30
   ```

2. **Abstraction**:
   - Hides implementation details and exposes only the necessary functionality.
   
   **Example:**
   ```javascript
   class Calculator {
       add(a, b) {
           return a + b;
       }

       subtract(a, b) {
           return a - b;
       }
   }

   const calc = new Calculator();
   console.log(calc.add(5, 3)); // Output: 8
   console.log(calc.subtract(5, 3)); // Output: 2
   ```

3. **Inheritance**:
   - Enables a class to derive properties and methods from another class.
   
   **Example:**
   ```javascript
   class Animal {
       constructor(name) {
           this.name = name;
       }

       eat() {
           console.log(`${this.name} is eating.`);
       }
   }

   class Dog extends Animal {
       bark() {
           console.log(`${this.name} says Woof!`);
       }
   }

   const dog = new Dog("Buddy");
   dog.eat(); // Output: Buddy is eating.
   dog.bark(); // Output: Buddy says Woof!
   ```

4. **Polymorphism**:
   - Allows different classes to define the same method with different implementations.
   
   **Example:**
   ```javascript
   class Shape {
       calculateArea() {
           console.log("Area not defined");
       }
   }

   class Circle extends Shape {
       constructor(radius) {
           super();
           this.radius = radius;
       }

       calculateArea() {
           return Math.PI * this.radius * this.radius;
       }
   }

   class Rectangle extends Shape {
       constructor(width, height) {
           super();
           this.width = width;
           this.height = height;
       }

       calculateArea() {
           return this.width * this.height;
       }
   }

   const circle = new Circle(5);
   console.log(circle.calculateArea()); // Output: 78.5398...

   const rectangle = new Rectangle(4, 5);
   console.log(rectangle.calculateArea()); // Output: 20
   ```

---

## **Classes and Objects in JavaScript**
In JavaScript, classes are templates for creating objects, and objects are specific instances of these templates.

### **Example: Creating a Class and Object**
```javascript
class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }

    makeSound() {
        console.log(`${this.name} says ${this.sound}`);
    }
}

const dog = new Animal("Dog", "Woof");
dog.makeSound(); // Output: Dog says Woof
```

**Explanation:**
- `Animal` is a class that defines a template for creating objects with `name` and `sound` properties.
- The `makeSound` method allows the object to perform an action.
- `dog` is an instance of the `Animal` class.

---

## **Constructors and Prototypes**
JavaScript uses constructor functions to initialize object properties, while prototypes allow sharing methods among all instances of a constructor.

### **Example: Constructor Function and Prototype**
```javascript
function Vehicle(type, wheels) {
    this.type = type;
    this.wheels = wheels;
}

Vehicle.prototype.describe = function () {
    console.log(`This vehicle is a ${this.type} with ${this.wheels} wheels.`);
};

const car = new Vehicle("Car", 4);
car.describe(); // Output: This vehicle is a Car with 4 wheels.
```

**Explanation:**
- `Vehicle` is a constructor function.
- `describe` is added to the prototype of `Vehicle`, so all instances can access it without duplicating the method.

---

## **Method Chaining and Fluent Interfaces**
Method chaining simplifies complex operations by allowing multiple method calls on the same object sequentially.

### **Example: Fluent Interface**
```javascript
class Calculator {
    constructor() {
        this.result = 0;
    }

    add(value) {
        this.result += value;
        return this;
    }

    subtract(value) {
        this.result -= value;
        return this;
    }

    multiply(value) {
        this.result *= value;
        return this;
    }

    getResult() {
        console.log(this.result);
        return this;
    }
}

const calc = new Calculator();
calc.add(5).subtract(2).multiply(3).getResult(); // Output: 9
```

**Explanation:**
- Each method returns `this`, enabling seamless chaining of method calls.

---

## **Static Methods and Properties**
Static members belong to the class itself and are not accessible via class instances.

### **Example: Static Methods**
```javascript
class MathUtils {
    static add(a, b) {
        return a + b;
    }

    static subtract(a, b) {
        return a - b;
    }
}

console.log(MathUtils.add(10, 5)); // Output: 15
console.log(MathUtils.subtract(10, 5)); // Output: 5
```

**Explanation:**
- Static methods like `add` and `subtract` are accessed using the class name.

---

## **Understanding the `this` Keyword**
The `this` keyword refers to the object it belongs to. Its value depends on how the function is invoked.

### **Example: `this` in Different Contexts**
```javascript
const obj = {
    name: "Vikas",
    greet() {
        console.log(`Hello, ${this.name}`);
    }
};

obj.greet(); // Output: Hello, Vikas

function globalGreet() {
    console.log(this);
}

globalGreet(); // Output: Window or undefined in strict mode
```

**Explanation:**
- Inside methods, `this` refers to the object invoking the method.
- In global functions, `this` refers to the global object or is `undefined` in strict mode.

---

## **Object Creation Patterns**

### **Factory Pattern**
The Factory Pattern is a design pattern that provides a way to create objects without specifying the exact class of object that will be created. The factory function encapsulates the object creation logic, providing flexibility and separation of concerns.

#### **Example 1: Basic Factory Pattern**
```javascript
function createPerson(name, age) {
    return {
        name,
        age,
        introduce() {
            console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
        }
    };
}

const person = createPerson("Vikas", 30);
person.introduce();  // Output: Hi, I'm Vikas and I'm 30 years old.
```

**Explanation:**
- `createPerson` is a factory function that returns an object with `name`, `age`, and an `introduce` method.
- The function hides the logic of object creation and ensures the objects created are uniform.

#### **Example 2: Factory Pattern with Different Object Types**
```javascript
function createEmployee(name, position) {
    return {
        name,
        position,
        work() {
            console.log(`${this.name} is working as a ${this.position}.`);
        }
    };
}

function createManager(name, department) {
    return {
        name,
        department,
        manage() {
            console.log(`${this.name} is managing the ${this.department} department.`);
        }
    };
}

const employee = createEmployee("Alice", "Developer");
employee.work();  // Output: Alice is working as a Developer.

const manager = createManager("Bob", "Engineering");
manager.manage();  // Output: Bob is managing the Engineering department.
```
**Explanation:**
- This example demonstrates creating different types of objects (`Employee` and `Manager`) using factory functions.
- Each factory function encapsulates the creation and behavior of a specific type of object, which makes the code more modular and maintainable.

#### **Example 3: Factory Pattern with Dynamic Object Creation**
```javascript
function createVehicle(type, wheels) {
    if (type === "car") {
        return {
            type: "Car",
            wheels: wheels || 4,
            drive() {
                console.log("The car is driving");
            }
        };
    } else if (type === "bike") {
        return {
            type: "Bike",
            wheels: wheels || 2,
            ride() {
                console.log("The bike is riding");
            }
        };
    } else {
        return null;
    }
}

const car = createVehicle("car", 4);
car.drive();  // Output: The car is driving.

const bike = createVehicle("bike", 2);
bike.ride();  // Output: The bike is riding.
```
**Explanation:**
- The factory function `createVehicle` dynamically creates different vehicle objects based on the `type` argument.
- Depending on the type, it either creates a car or a bike, each with its own specific behavior.

---

### **Constructor Pattern**
The Constructor Pattern is a method for creating new objects using constructor functions. This approach allows you to create multiple instances of the same type of object, where each instance can have its own properties.

#### **Example 1: Basic Constructor Pattern**
```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.introduce = function () {
        console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
    };
}

const person1 = new Person("Vikas", 30);
person1.introduce();  // Output: Hi, I'm Vikas and I'm 30 years old.

const person2 = new Person("Raj", 25);
person2.introduce();  // Output: Hi, I'm Raj and I'm 25 years old.
```
**Explanation:**
- The `Person` constructor function is used to create individual person objects with `name`, `age`, and an `introduce` method.
- Each instance of `Person` has its own values for `name` and `age`.

#### **Example 2: Constructor Pattern with Shared Methods**
```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.introduce = function () {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
};

const person1 = new Person("Vikas", 30);
person1.introduce();  // Output: Hi, I'm Vikas and I'm 30 years old.

const person2 = new Person("Raj", 25);
person2.introduce();  // Output: Hi, I'm Raj and I'm 25 years old.
```
**Explanation:**
- In this example, the `introduce` method is shared between all `Person` instances via the prototype.
- This allows memory optimization because the method is not duplicated for every instance.

#### **Example 3: Constructor Pattern with Inheritance**
```javascript
function Employee(name, position) {
    this.name = name;
    this.position = position;
}

Employee.prototype.work = function () {
    console.log(`${this.name} is working as a ${this.position}.`);
};

function Manager(name, department) {
    Employee.call(this, name, "Manager");
    this.department = department;
}

Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.manage = function () {
    console.log(`${this.name} is managing the ${this.department} department.`);
};

const manager = new Manager("Bob", "Engineering");
manager.work();  // Output: Bob is working as a Manager.
manager.manage();  // Output: Bob is managing the Engineering department.
```
**Explanation:**
- The `Manager` constructor inherits from the `Employee` constructor using `Employee.call(this, ...)` to share common properties like `name` and `position`.
- The `Manager` class adds its own behavior (`manage` method) while still inheriting the `work` method from `Employee`.

#### **Example 4: Constructor Pattern with Methods in Constructor**
```javascript
function Vehicle(type, wheels) {
    this.type = type;
    this.wheels = wheels;
    this.describe = function () {
        console.log(`This vehicle is a ${this.type} with ${this.wheels} wheels.`);
    };
}

const car = new Vehicle("Car", 4);
car.describe();  // Output: This vehicle is a Car with 4 wheels.

const bike = new Vehicle("Bike", 2);
bike.describe();  // Output: This vehicle is a Bike with 2 wheels.
```
**Explanation:**
- In this example, each `Vehicle` instance has its own `describe` method, which is created within the constructor function.

---

### Conclusion
Both the **Factory Pattern** and **Constructor Pattern** provide powerful ways to manage object creation in JavaScript. 

The **Factory Pattern** is particularly useful when you want to abstract away object creation logic, 

while the **Constructor Pattern** allows for creating multiple instances of the same type of object, making it suitable for use cases where you need multiple objects with similar structure but different data.

---

## **ES6 Class Syntax**
The ES6 `class` keyword simplifies object-oriented programming in JavaScript.

### **Example: ES6 Class**
```javascript
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    describe() {
        console.log(`${this.title} by ${this.author}`);
    }
}

const book = new Book("1984", "George Orwell");
book.describe();
```

**Explanation:**
- The `constructor` method initializes the class properties.
- Other methods are defined directly within the class body.

---

## **Using Classes in Modern JavaScript Frameworks**
Modern frameworks like React and Angular use OOP principles for component-based development.

### **Example: React Class Component**
```javascript
import React, { Component } from 'react';

class Welcome extends Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}

export default Welcome;
```
```javascript
import React from 'react';
import Welcome from './Welcome';

function App() {
    return (
        <div>
            <Welcome name="Vikas" />
            <Welcome name="John" />
            <Welcome name="Emma" />
        </div>
    );
}

export default App;
```

---

## **Introduction to the Virtual DOM**
The Virtual DOM is a lightweight representation of the real DOM, enabling efficient UI updates.

### **Key Benefits**
- Minimizes direct DOM manipulation.
- Uses a diffing algorithm to update only the changed elements.

### **Practical Exercise**
Create a simple React app that showcases dynamic rendering using the Virtual DOM.

