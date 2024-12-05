// In this example, an object is defined with two properties having the same key (`name`), 
// but JavaScript objects cannot have duplicate keys. The last value assigned to a key will overwrite any previous ones.

let obj = {
    name: 'ashna',
    name: 'ahammed'
};

console.log(obj.name); // Output: "ahammed"

// Explanation:
// - The object has two `name` properties, but the second one will overwrite the first.
// - Therefore, the final value of `obj.name` is "ahammed", which is the last value assigned to the `name` key.
