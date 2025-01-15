const _age = Symbol('age');
// A Symbol is a primitive data type introduced in ES6. It is a unique and immutable value, primarily used as an identifier for object properties. Every time you create a Symbol, even with the same description, it is guaranteed to be unique.

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
console.log(person1)
console.log(person1.getAge());