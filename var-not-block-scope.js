// In this example, `var` is used to declare the variable `a` inside a block with an `if` statement.
// `var` is function-scoped or globally-scoped, meaning it is not limited to the block, even if the condition is false.

if (false) {
    var a = 'ashna'; // This line will not execute because the condition is false.
}

console.log(a); // Output: undefined
