// In this example, a string `str` is defined with the value `'join'`. The length of a string is immutable, meaning 
// it cannot be directly changed by reassigning a value to `str.length`. JavaScript allows you to read `str.length`, 
// but you cannot modify it directly.

let str = 'join';
str.length = 0;  // This does not change the actual length of the string.
console.log(str.length);  // Output: 4

// Explanation:
// - Strings in JavaScript are immutable, and their `length` property is read-only.
// - Even though we try to set `str.length = 0`, this operation does not actually modify the string's length.
// - The length of the string `str` remains 4 because `'join'` has four characters.
