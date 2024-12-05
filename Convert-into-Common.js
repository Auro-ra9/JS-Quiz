// In this example, JavaScript uses type coercion when comparing an array and a boolean with the `==` (loose equality) operator.
// When comparing an empty array (`[]`) and `false`, JavaScript converts both values to primitive types for the comparison.

let a = [];
let b = false;
console.log(a == b); // Output: true

// Explanation:
// - The empty array `[]` is converted to an empty string `""` when compared loosely with `==`.
// - The boolean `false` is also converted to the empty string `""`.
// - Since both `"" == ""` evaluates to `true`, the comparison `a == b` returns `true`.
