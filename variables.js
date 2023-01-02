//What are the Variables in Javascript?

// A variable is a storage location for a value. Variables are declared using the "var" keyword, followed by the name of the variable. The value of the variable can be a number, a string, or any other data type that is supported by JavaScript.

//For example:

var x;
x = 05;

//Here, "x" is the name of the variable and "05" is the value assigned to it.

//You can also declare a variable and assign a value to it in a single line, like this:

var name = "Nafees Rehman";

//You can also use the "let" and "const" keywords to declare variables in JavaScript. The "let" keyword is used to declare variables that can be reassigned, while the "const" keyword is used to declare variables that cannot be reassigned. The "let" and "const" has th block scope but "Var" has the global scope.

//For example:

let y = 10;
y = 15; //  valid

const z = 15;
z = 10; // invalid

//In the example above, "y" is a variable declared using the "let" keyword, so it can be reassigned. "z" is a variable declared using the "const" keyword, so it cannot be reassigned.

// example of block scope variable.

var num = 20;
{
  let secNum = 30;
  console.log(SecNum); // Expected output: 30
}
console.log(num); // Expected output: 20
console.log(secNum); // Uncaught ReferenceError: exe is not defined

// In the example above, the "let" keyword has the block scope. We declared it in {} that it can use only in the {}.
