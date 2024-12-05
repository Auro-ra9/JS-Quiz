// In JavaScript, strings are immutable, meaning individual characters in a string cannot be changed directly.
// Attempting `str[5] = ''` will not modify the original string; it will remain unchanged.
// To change the content of `str`, you must create a new string and reassign it.

let str = 'ashnaahammed';
str[5] = ''; // This line has no effect as strings are immutable
console.log(str); // Output: "ashnaahammed" - the original string is unchanged

str = 'ashna ahammed'; // Reassigning `str` with a new string value
console.log(str); // Output: "ashna ahammed" - now `str` has a space added
