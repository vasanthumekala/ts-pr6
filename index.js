"use strict";
function createUser(name, email) {
    return {
        id: 1,
        name,
        email,
        password: 'password123'
    };
}
const newUser = createUser('John Doe', 'john.doe@example.com');
console.log(newUser);
