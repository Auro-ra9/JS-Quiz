function f() {
    let a = b = 14; // 'a' is declared with 'let' inside the function, but 'b' is assigned without 'let', 'var', or 'const', so 'b' becomes a global variable.
}
f();
console.log(b); // This logs '14' because 'b' is now a global variable, even though it was assigned inside the function.

//In JavaScript, when you assign a value to a variable without declaring it (like b = 14), it automatically becomes a global variable if executed in the global scope or in a function scope without strict mode.
