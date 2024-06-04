// backend.js

const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3001;

app.use(express.json());

// Function to read users from database.json
function readUsers() {
    const users = JSON.parse(fs.readFileSync('./database.json', 'utf-8'));
    return users;
}

// Function to write users to database.json
function writeUsers(users) {
    fs.writeFileSync('database.json', JSON.stringify(users, null, 2));
}

// Endpoint to get all users
app.get('/users', (req, res) => {
    const users = readUsers();
    res.json(users);
});

// Endpoint to add a new user
app.post('/users', (req, res) => {
    const newUser = req.body;
    const users = readUsers();
    users.push(newUser);
    writeUsers(users);
    res.json({ message: 'User added successfully' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
