const express = require('express')
const app = express()
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const mysql = require('mysql2/promise');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '1010',
    database: 'scalesandslumbers'
});

// Routes
app.get('/api', (req, res) => {
    res.json({ "message": "Welcome to Scales & Slumber!" });
});

app.get('/api/products', async (req, res) => {
    try {
        const [rows, fields] = await db.query('SELECT * FROM Products');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err });
    }
});

// Server start
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// app.post('/api/generate', (req, res) => {
//   // Code to generate a new design
// });

// app.get('/api/designs', (req, res) => {
//   // Code to retrieve previous designs
// });
