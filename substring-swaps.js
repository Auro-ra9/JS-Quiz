// In this example, the `substring()` method is used on a string `a`.
// The `substring(start, end)` method extracts characters from index `start` up to, but not including, index `end`.
// If `start` is greater than `end`, the method swaps them.

let a = 'Learn';
console.log(a.substring(5, 1)); // Output: "earn"

// Explanation:
// - The `substring(5, 1)` call means to start at index 5 and go until index 1.
// - Since `start` is greater than `end`, `substring()` swaps them, effectively extracting from index 1 to 5.
