// This is another example of type coercion in JavaScript.
// When using `==` to compare `o.a` (an array) with `str` (a string), JavaScript converts `o.a` to a string.
// Since `o.a` (which is `[1, 2, 3]`) becomes "1,2,3", it matches `str`, so `o.a == str` returns true.
// However, `o.a == arr` is false because `==` and `===` compare object references for arrays and objects.
// Even though `o.a` and `arr` contain the same elements, they are separate objects in memory, so the comparison returns false.

const arr = [1, 2, 3];
let str = '1,2,3';
let o = {
    a: [1, 2, 3]
}
console.log(o.a == str); // true due to type coercion of o.a to "1,2,3"
console.log(o.a == arr); // false because o.a and arr are different object references
