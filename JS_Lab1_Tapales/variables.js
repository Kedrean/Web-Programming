//var declaration
var userName = "Alice";
console.log("Name: ", userName);

//let declaration
let userAge = 32;
console.log("Age: ", userAge);
userAge = 33;
console.log("Updated Age: ", userAge);

//const declaration
const userCountry = "Canada";
console.log("Country: ", userCountry);

//attempting to change const will cause an error
userCountry = "France";

/*Differences:
- var: function-scoped, can be redeclared but cannot updated.
- let: block-scoped, cannot be redeclared but can be updated.
- const: block-scoped, cannot be redeclared nor updated.
*/