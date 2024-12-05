// This example demonstrates the behavior of post-increment (x++) and pre-increment (++y) operators in JavaScript.
// `x++` returns the current value of `x` (1) and then increments it by 1.
// `++y` increments `y` by 1 first, then returns the incremented value.
// So, the expression `x++ + ++y` evaluates as follows:

let x = 1;
let y = 2;
console.log(x++ + ++y); // Output: 4

// Explanation of the expression:
// 1. `x++` returns 1 (then `x` becomes 2 after this operation).
// 2. `++y` increments `y` from 2 to 3, then returns 3.
// 3. `x++ + ++y` is evaluated as 1 + 3, resulting in 4.
