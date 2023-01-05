// What is function in javascript?

// a function is a block of code that performs a specific task. It is executed when it is called, or invoked. Functions are an important part of the JavaScript language and are used to perform repetitive tasks, as well as to abstract complex logic into simpler blocks of code. For example,

function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Nafees"); // Output: 'Hello, Nafees!'

//In this example, the function "greet" takes in a single argument called "name", and logs a greeting to the console. The function is called with the argument "Nafees", which causes it to log the  "Hello, Nafees!" to the console.

//Functions can also return values. For example:

function add(a, b) {
  return a + b;
}

let sum = add(5, 5); // sum is now 10

// In this example, the function "add" takes in two arguments, "a" and "b", and returns the sum of those two numbers. The function is called with the arguments "5" and "5", and the value returned by the function is stored in the variable "sum".

// === Arrow Functions =================================================

//An arrow function is a shorter syntax for writing function expressions in JavaScript. They are often used as a way to write anonymous functions, or functions without a name.

// Here is an example of a function written using the regular function syntax:

function add(a, b) {
  return a + b;
}

// And here is the same function written using the arrow function syntax:

const add = (a, b) => {
  return a + b;
};

console.log(add(5, 5)); // Output: 10

// As you can see, the arrow function syntax is shorter and more concise than the regular function syntax.

// Arrow functions have a number of other features and benefits, such as:

//   They do not have their own "this", "arguments", or "super" binding. Instead, they inherit these values from the enclosing scope.
//   They can be used with array methods like "map", "filter", and "reduce "to create concise and expressive code.
//   Here is an example of using an arrow function with the "map" method:

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((x) => x * 2);

console.log(doubled); // Output: [2, 4, 6, 8, 10]

// In this example, the "map" method calls the arrow function for each element in the "numbers" array, and the arrow function returns the value of the element multiplied by 2. The resulting array is stored in the "doubled" variable.
