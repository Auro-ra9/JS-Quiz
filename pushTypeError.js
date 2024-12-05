// Here, we use the `push` method on an array `[1]`, which returns the new length of the array after pushing an element.
// `arr` is assigned the return value of `[1].push(2)`, not the array itself.
// Since `push` returns the new length of the array (2), `arr` is set to 2, not an array.

// Attempting `arr.push(3)` will throw an error because `arr` is not an array, but a number (2).

let arr = [1].push(2);
console.log(arr);           // Output: 2, because `push` returns the new length of the array
console.log(arr.length);    // Output: undefined, since `arr` is a number, not an array
console.log(arr.push(3));   // Error: `arr.push` is not a function, as `arr` is not an array
