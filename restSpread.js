//rest operations
const sumAll = (...numbers) => { //using rest (...param) to accept any nos of arguments
    return numbers.reduce((sum, num) => sum + num, 0); //reduce adds all numbers in array
};

console.log("Rest Sum: ", sumAll(1, 3, 5));

//spread: array passing
const nums = [2, 4, 6]; //using spread to expand array elements into individual arguments
console.log("Spread Sum: ", sumAll(...nums));

//spread: combine
const arr1 = [1, 3];
const arr2 = [2, 4];
const combined = [...arr1, ...arr2];
console.log("Combined Array: ", combined);