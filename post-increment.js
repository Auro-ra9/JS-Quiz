// In this example, `a++` is the post-increment operator, which means:
// 1. `b` is assigned the value of `a` before `a` is incremented.
// 2. Then, `a` is incremented by 1.

let a = 5;
let b = a++; // `b` is assigned the current value of `a` (5), then `a` becomes 6
console.log(a + b); // Output: 11, because a is now 6, and b was 5 (6 + 5 = 11)
