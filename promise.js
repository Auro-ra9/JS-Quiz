// This example demonstrates the behavior of promises and their asynchronous execution in JavaScript.
// The promise executor function is executed immediately, but the `then` block (if provided) would execute asynchronously.

new Promise(() => {
    console.log('s');  // The executor function of the Promise is executed immediately.
});

console.log('d');  // This is executed synchronously, immediately after the Promise executor.

