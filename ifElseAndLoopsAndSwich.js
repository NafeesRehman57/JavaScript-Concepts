// ===---------------------------------------------------------------- Truthy
// In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context. All values are truthy unless they are defined as falsy. That is, all values are truthy except false, 0, -0, 0n, "", null, undefined, and NaN.

// ===---------------------------------------------------------------- Falsy
// A falsy (sometimes written falsey) value is a value that is considered false when encountered in a Boolean context.

// === if...else =================================

// The if...else statement executes a statement if a specified condition is truthy. If the condition is falsy, another statement in the optional else clause will be executed. For example,

let age = 18;

if (age === 18) {
  console.log("You are aligble to vote.");
} else {
  console.log("You are not aligble to vote.");
}

//Multiple if...else statements can be nested to create an else if clause. Note that there is no elseif (in one word) keyword in JavaScript.

if (age === 10) {
  console.log("You are not adult");
} else if (age === 18) {
  console.log("You are adult.");
} else {
  console.log("You are not a kid.");
}

// it is a good practice to always use block statements, especially in code involving nested if statements.

function checkValue(a, b) {
  if (a === 1) {
    if (b === 2) {
      console.log("a is 1 and b is 2");
    }
  } else {
    console.log("a is not 1");
  }
}

checkValue(age, 18);

// === switch =================================

//The switch statement executes a block of code depending on different cases. The switch statement is a part of JavaScript's "Conditional" Statements, which are used to perform different actions based on different conditions. Use switch to select one of many blocks of code to be executed.

let grade = "A";

switch (grade) {
  case "A":
    console.log("Good job");
    break;

  case "B":
    console.log("Pretty good");
    break;

  case "C":
    console.log("Passed");
    break;

  case "D":
    console.log("Not so good");
    break;

  case "F":
    console.log("Failed");
    break;

  default:
    console.log("Unknown grade");
    break;
}

//The break statements indicate the end of a particular case. If they were omitted, the interpreter would continue executing each statement in each of the following cases.

// === for loop =================================

// The "for" loop executes a block of code for a specified number of times. The for loop is a part of JavaScript's "For" Statements, which are used to iterate over a collection of data.

//The "for" loop is the most compact form of looping. It includes the following three important parts −

// The "loop initialization" where we initialize our counter to a starting value. The initialization statement is executed before the loop begins.

// The "test statement" which will test if a given condition is true or not. If the condition is true, then the code given inside the loop will be executed, otherwise the control will come out of the loop.

// The "iteration statement" where you can increase or decrease your counter.

// You can put all the three parts in a single line separated by semicolons. For example,

for (let i = 0; i < 10; i++) {
  console.log(i);
}

// === while loop =================================

// The most basic loop in JavaScript is the "while" loop which would be discussed in this chapter. The purpose of a "while" loop is to execute a statement or code block repeatedly as long as an expression is true. Once the expression becomes false, the loop terminates. For example,

var count = 0;

while (count < 10) {
  console.log("Current Count : " + count);
  count++;
}

// === do while loop =================================

// In JavaScript, a "do"...while loop is a control structure that executes a block of code at least once, and then repeats the execution of the block as long as a given condition is true. Here is the syntax for a "do...while" loop in JavaScript:

do {
  // code block to be executed
} while (condition);

// The "do...while" loop will first execute the code block, and then check the condition. If the condition is true, the code block will be executed again. If the condition is false, the loop will terminate.

// Here is an example of a "do...while" loop in JavaScript:

let i = 0;

do {
  console.log(i);
  i++;
} while (i < 5);

// === for in and for of =================================

// "for...in" loops are used to iterate over the enumerable properties of an object, in no particular order. Here is the syntax for a "for...in" loop in JavaScript:

for (variable in object) {
  // code block to be executed
}

// The "variable" in the loop will take on the value of each enumerable property in the "object", one at a time, on each iteration of the loop.

// Here is an example of a "for...in" loop in JavaScript:

const person = {
  name: "John",
  age: 30,
  job: "developer",
};

for (let key in person) {
  console.log(key + ": " + person[key]);
}

//"for...of" loops are used to iterate over the values of an iterable object, such as an array or a string. Here is the syntax for a "for...of" loop in JavaScript:

for (variable of object) {
  // code block to be executed
}

// The "variable" in the loop will take on the value of each element in the "object", one at a time, on each iteration of the loop.

// Here is an example of a "for...of" loop in JavaScript:

const colors = ["red", "green", "blue"];

for (let color of colors) {
  console.log(color);
}
