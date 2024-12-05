// In this example, an immediately invoked function expression (IIFE) is used. The function takes a single parameter `num`.
// The argument passed is `false`, and within the function, it tries to calculate the square of `num` (num * num).

(function(num) {
    console.log(num * num); // Output: 0
})(false);

// Explanation:
// - The function is immediately invoked with the argument `false`.
// - The value `false` is a boolean, and when performing arithmetic operations with booleans, JavaScript converts `false` to `0`.
// - Therefore, `false * false` results in `0 * 0`, which equals `0`.
// - However, since `num * num` is expected to return `NaN` (when the argument is not properly converted to a number), the result is `NaN`.
