const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Serve static files like login.html

// Dummy user data for authentication
const users = [
    { username: 'admin', password: 'password123' },
    { username: 'user1', password: 'mypassword' }
];

// Route to serve the login page
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/login.html');
});

// Handle login form submission
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Check if the user exists
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        res.send(`<h1>Welcome, ${username}!</h1><p>Login successful.</p>`);
    } else {
        res.status(401).send('<h1>Login Failed</h1><p>Invalid username or password.</p>');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
