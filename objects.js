//What are Objects in JavaScript?

//In JavaScript, an object is a collection of properties, and a property is an association between a name (or key) and a value. A property's value can be a function, in which case the property is known as a method.

//Here is an example of an object in JavaScript:

const person = {
  fullName: "Nafees Rehman",
  age: 21,
  speak: function () {
    console.log(`Hi, my name is ${this.fullName}`);
  },
};

//In this example, "person" is an object with three properties: "name", "age", and "speak". The value of the "name" property is a string, the value of the "age" property is a number, and the value of the "speak" property is a function.

//You can access the properties of an object using dot notation or bracket notation. For example:

console.log(person.fullName); // Outputs "Nafees Rehman"
console.log(person["age"]); // Outputs 21

// ========......=========== \\

//The "speak" property is a method that outputs a message to the console.

//To call a method of an object, you can use the dot notation or the bracket notation, followed by parentheses to execute the function. For example:

person.speak(); // Outputs: "Hi, my name is Nafees Rehman"
person["speak"](); // Outputs: "Hi, my name is Nafees Rehman"

//You can also add, modify, or delete properties of an object. For example:

person.email = "nafees@example.com"; // Adds a new property to the object
person.fullName = "Nafees Ur Rehman"; // Modifies the value of an existing property
delete person.age; // Removes a property from the object

//You can also pass arguments to a method by including them in the parentheses. For example:

const calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
};

console.log(calculator.add(1, 2)); // Outputs: 3
console.log(calculator.subtract(5, 3)); // Outputs: 2

//In this example, "calculator" is an object with two methods: "add" and "subtract". Each method takes two arguments and returns the result of a calculation.

// ========......=========== \\

//JavaScript objects are useful for storing and organizing data. They are similar to real-world objects in that they have properties (which are like characteristics or attributes of the object) and methods (which are functions that the object can perform).

//Here is an example of using an object to store data about a car:

const car = {
  make: "Ford",
  model: "Mustang",
  year: 2023,
  color: "red",
  getDescription: function () {
    return `This is a ${this.year} ${this.make} ${this.model} in ${this.color} color.`;
  },
};

console.log(car.getDescription()); // Outputs: "This is a 2023 Ford Mustang in red color."

//In this example, "car" is an object with five properties: "make", "model", "year", "color", and "getDescription". The "getDescription" property is a method that returns a string describing the car.

//You can access the properties of an object using dot notation or bracket notation. For example:

console.log(car.make); // Outputs "Ford"
console.log(car["make"]); // Outputs "Ford"

//JavaScript objects can also be used to store collections of related data. For example, you could use an object to store a list of students in a class, where each student has a name, an age, and a list of grades.

const classList = {
  student1: {
    name: "Alice",
    age: 21,
    grades: [80, 90, 95],
  },
  student2: {
    name: "Bob",
    age: 22,
    grades: [70, 75, 85],
  },
  student3: {
    name: "Charlie",
    age: 23,
    grades: [60, 65, 75],
  },
};

//In this example, "classList" is an object with three properties, each of which is an object representing a student. Each student object has three properties: "name", "age", and "grades".
