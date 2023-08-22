const express = require('express')
const app = express()

// Routes
app.get('/api', (req, res) => {
    res.json({ "message": "Welcome to Scales & Slumber!" });
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
