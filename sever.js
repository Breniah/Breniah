const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static(__dirname)); // Serve static files like HTML and CSS


const users = [
    { username: 'admin', password: 'password123' },
    { username: 'user1', password: 'mypassword' }
];

app.post('/login', (req, res) => {
    const { username, password } = req.body;


    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        res.status(200).send('Login successful');
    } else {
        res.status(401).send('Invalid username or password');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
