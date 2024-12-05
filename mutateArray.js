// The `reverse` method in JavaScript reverses the array in place, meaning it modifies the original array.
// `reverse` also returns the modified array, so both `arr` and `rev` refer to the same reversed array.
// Therefore, modifying one will affect the other, as they both point to the same array in memory.

let arr = [1, 2];
let rev = arr.reverse();
console.log(arr, rev); // Output: [2, 1] [2, 1]

// Explanation:
// 1. `arr.reverse()` reverses `arr` in place, so `arr` is now `[2, 1]`.
// 2. Since `reverse` returns the modified array, `rev` is assigned `[2, 1]`.
// 3. Both `arr` and `rev` point to the same array object, so they produce the same output when logged.
