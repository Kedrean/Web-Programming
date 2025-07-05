//arrow function: square
const square = (num) => num * num; //syntax: (param) => expression
console.log("Square of 5: ", square(5));

//arrow function: greet
const greet = (name) => { //syntax: (param) => template string
    console.log(`Hello, ${name}!`); //using template string to embed $() variable
};

greet("Alice");