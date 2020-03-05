//Array.every()
//The every() method is available on all Arrays. 
//It is used to test whether all the items in an array pass a specified test. 
//The test is performed by executing a function that you pass into the every() method for every item in the Array.

const oldEnough = [21, 25, 23, 21, 22, 24];
const notOldEnough = [21, 25, 23, 21, 17, 24];

function is21OrUnder(age) {
    return age < 21;
}

console.log(oldEnough.every(is21OrUnder)); // false
console.log(notOldEnough.every(is21OrUnder)); // false

//Using an anonymous function

const oldEnough1 = [21, 25, 23, 21, 22, 24];
const notOldEnough1 = [21, 25, 23, 21, 17, 24];

console.log(
    oldEnough1.every((age) => {
        return age >= 21;
    })
); // true

console.log(
    notOldEnough1.every((age) => {
        return age >= 21;
    })
); // false

//Array.filter()
//The filter() method is available on all Arrays. 
//It is used to create a new array with all the items that pass a test. 
//The test is performed by executing a function that you pass into the filter() method for every item in the Array.

const nums = [1, 2, 3, 4, 5];

const evens = nums.filter((i) => {
    return i % 2 == 0;
});

console.log(nums); // [1, 2, 3, 4, 5]
console.log(evens); // [2,4]

//example 2

const n = [6, 7, 8, 9, 10];

const odd = n.filter((i) => {
    return i % 2 == 1;
});

console.log(n); // [1, 2, 3, 4, 5]
console.log(odd); // [2,4]

//Array.forEach()
//Executes a callback for each item in the array.
//The forEach method can be used instead of a for loop. The code is easier to read and follow as it makes logical sense. You are running a callback function "for each" item in the array.

const n1 = [1, 3, 5];

n1.forEach((n1, index) => {
    console.log(`The number at index ${index} is ${n1}`);
});

// Output:
// The number at index 0 is 1
// The number at index 1 is 3
// The number at index 2 is 5