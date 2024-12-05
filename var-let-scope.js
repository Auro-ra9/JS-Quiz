// This example demonstrates the differences between `var` and `let` in terms of scope:
// 1. `var` is function-scoped or globally scoped, meaning the variable `x` is shared across the entire function or global scope, even inside blocks.
// 2. `let` is block-scoped, so the variable `y` inside the block does not affect the `y` outside the block.

var x = 1;  // x is declared with var (global scope)
let y = 1;  // y is declared with let (block-scoped)

{
    var x = 2;  // x is re-assigned inside the block, affecting the global x
    let y = 2;  // y is declared inside the block and does not affect the outer y
}

console.log(x, y);  // Output: 2 1

// Explanation:
// - The `var x = 2` inside the block changes the value of `x` in the global scope, so `x` becomes 2.
// - The `let y = 2` inside the block creates a new `y` that only exists within the block, leaving the outer `y` unchanged (still 1).
