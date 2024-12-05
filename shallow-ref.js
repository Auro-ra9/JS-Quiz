// In this example, we are creating a shallow copy of the array `arr` using the spread syntax (`[...]`).
// Then, we modify elements in the copied array, and observe the effect on the original array.

let arr = [1, 2, [3, 4]];  // Original array with a nested array at index 2.
let copy = [...arr];  // Creating a shallow copy of `arr`.

// Modifying elements in the copied array.
copy[1] = 10;  // This changes the second element of `copy` from 2 to 10.
copy[2][0] = 100;  // This changes the first element of the nested array from 3 to 100.

console.log(arr);  // Output: [1, 2, [100, 4]]

// Explanation:
// - `copy = [...arr]` creates a shallow copy of the `arr` array. It copies the outer elements, but for nested objects (like the array at index 2), only references are copied, not the actual objects themselves.
// - When we modify `copy[1]`, it doesn't affect `arr` because `copy[1]` is a primitive value, so the change is isolated.
// - However, when we modify `copy[2][0]`, it affects the nested array that both `arr[2]` and `copy[2]` point to, because they both reference the same nested array object.
