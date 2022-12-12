const { createhash } = require('crypto');

// create hash string

function hash(input) {
    return createhash('sha256').update(input).digest('base64');
}

// compre two hashed passwords

let password = 'hi-mom!';
const hash1 = hash(password);
console.log(hash1)

// ... some time later

password = 'hi-mom!';
const hash2 = hash(password);
const match = hash1 === hash2;

console.log(match ? '✔️ good password' : '❌ password does not match')