// In this example, we are working with an object `data`. The `id` property of the object is initially set to '1'.
// Then, the value of the `id` property is updated to '2'. Since objects in JavaScript are mutable, we can change the values of their properties.

const data = {
    id: '1'
};

data.id = '2';  // The value of the `id` property is updated from '1' to '2'.
console.log(data.id); // Output: '2'

// Explanation:
// - Objects in JavaScript are mutable, meaning we can update their properties after they are defined.
// - The `data.id` property is initially '1', but after the assignment `data.id = '2'`, the value of `id` changes to '2'.
// - The `console.log(data.id)` statement will print the updated value, which is '2'.
