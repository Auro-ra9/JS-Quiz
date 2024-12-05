// In JavaScript, `NaN` is not considered equal to any other value, including itself.
// Therefore, `x === y` will return false when both `x` and `y` are `NaN`.
// However, the `isNaN` function checks if a value is `NaN` and returns true for both `x` and `y` here.
// This means `isNaN(x) === isNaN(y)` will return true.
// JavaScript defines `NaN` (Not-a-Number) as a special numeric value that represents an undefined or unrepresentable value in mathematics or type conversion.

let x = NaN;
let y = NaN;
console.log(x === y); // Output: false, because NaN is not equal to NaN
console.log(isNaN(x) === isNaN(y)); // Output: true, because isNaN(x) and isNaN(y) both return true
