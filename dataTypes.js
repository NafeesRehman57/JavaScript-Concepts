//There are different types of data that we can use in a JavaScript program. For example,

const x = 10;
const y = "Nafees";

//In this example,

//10 is an integer data.
//"Nafees" is a string data.

// === Javascript Data types =================================

//There are eight basic data types in JavaScript. They are:

// 1: String
// 2: Number
// 3: Boolean
// 4: BigInt
// 5: Undefined
// 6: Null
// 7: Symbol
// 8: Object

// All data types except Object are primitive data types, whereas Object is non-primitive.

// === String =================================

/* String is used to store text. In JavaScript, strings are surrounded by quotes:

    Single quotes: 'Hello'
    Double quotes: "Hello"
    Backticks: `Hello`

For example, */

//strings example
const firstName = "Nafees";
const lastName = "Rehman";
const result = `The names are ${firstName} and ${lastName}`;
console.log(result);

/*

Single quotes and double quotes are practically the same and you can use either of them.

Backticks are generally used when you need to include variables or expressions into a string. This is done by wrapping variables or expressions with ${variable or expression} as shown above. 

*/

// === Number =================================

/* 
Number represents integer and floating numbers (decimals and exponentials). For example,
*/

const num1 = 1;
const num2 = 1.11;
const num3 = 2e5; // 2 * 10^5

console.log(num1);
console.log(num2);
console.log(num3);

//A number type can also be +Infinity, -Infinity, and NaN (not a number). For example,

const number1 = 3 / 0;
console.log(number1); // Infinity

const number2 = -3 / 0;
console.log(number2); // -Infinity

// strings can't be divided by numbers
const number3 = "abc" / 3;
console.log(number3); // NaN

// === BigInt =================================

// In JavaScript, Number type can only represent numbers less than (2**53 - 1) and more than -(2**53 - 1). However, if you need to use a larger number than that, you can use the "BigInt" data type.

// A "BigInt" number is created by appending n to the end of an integer. For example,

// BigInt value
const value1 = 900719925124740998n;

// Adding two big integers
const result1 = value1 + 1n;
console.log(result1); // "900719925124740999n"

const value2 = 900719925124740998n;

// Error! BitInt and number cannot be added
const result2 = value2 + 1;
console.log(result2);

// "BigInt" was introduced in the newer version of JavaScript and is not supported by many browsers including Safari.

// === Boolean =================================

//  A boolean value is one that can either be TRUE or FALSE. If you need to know “yes” or “no” about something, then you would want to use the boolean function. It sounds extremely simple, but booleans are used all the time in JavaScript programming, and they are extremely useful. For example,

const dataChecked = true;
const valueCounted = false;

// === Undefined =================================

// The "undefined" data type represents value that is not assigned. If a variable is declared but the value is not assigned, then the value of that variable will be undefined. For example,

let value;
console.log(value); // "undefined"

// It is also possible to explicitly assign a variable value undefined. For example,

let value01 = undefined;
console.log(value01); // undefined

// you can declare a undefined variable with "const"

// === Null =================================

// null is a special value that represents empty or unknown value. For example,

const store = null;

// the above variable is empty

// === Symbol =================================

// This data type was introduced in a newer version of JavaScript (from ES2015).

// A value having the data type "Symbol" can be referred to as a symbol value. "Symbol" is an immutable primitive value that is unique. For example,

// two symbols with the same description
const symbol1 = Symbol("hello");
const symbol2 = Symbol("hello");

// Though "symbol1" and "symbol2" both contain 'hello', they are different as they are of the "Symbol "type.

// === Object =================================

// In JavaScript, an object is a standalone entity, with properties and type. Compare it with a cup, for example. A cup is an object, with properties. A cup has a color, a design, weight, a material it is made of, etc. The same way, JavaScript objects can have properties, which define their characteristics. It is a complex data type that allows us to store collections of data. For example,

const student = {
  firstName: "Nafees",
  lastName: null,
  class: 12,
};

// === Javascript typeof === \\

// To find the type of a variable, you can use the typeof operator. For example,
const name = "ram";
typeof name; // returns "string"

const number = 4;
typeof number; //returns "number"

const valueChecked = true;
typeof valueChecked; //returns "boolean"

const a = null;
typeof a; // returns "object"
