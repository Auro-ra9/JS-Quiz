x++;  // Incrementing `x`, but `x` is not yet initialized at this point.
console.log(x);  // Output: NaN
var x = 21;  // `x` is declared and assigned after the increment.

// Explanation:
// Hoisting: JavaScript hoists the declaration of x to the top of its scope, but the initialization (x = 21) happens only at the line var x = 21;. So, before that line, x is undefined.

// x++: The x++ operation increments x. Since x is undefined at that point, undefined++ results in NaN (Not a Number), because incrementing undefined is not a valid operation.

// console.log(x): After the increment, x still holds NaN (because of the invalid operation), and the output is NaN.