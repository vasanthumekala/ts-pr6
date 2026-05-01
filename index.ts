interface user {
    id: number;
    name: string;
    email: string;
    password: string;
}

function createUser(name: string, email: string,): user {
    return {
        id: 1,
        name,
        email,
        password: 'password123'
    }
}

const newUser = createUser('John Doe', 'john.doe@example.com');
console.log(newUser);