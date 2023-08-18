const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.send('Dragon Bed API is up and running!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


const mongoose = require('mongoose');

// Replace this URL with your MongoDB connection string
const MONGODB_URI = 'mongodb://localhost:5173/placeholder';

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const userSchema = new mongoose.Schema({
  username: String,
  password: String,  // Ensure you hash the password before storing!
  // any other user details you wish to store
});

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String, // URL to the image
  // any other product details
});

app.post('/api/generate', (req, res) => {
  // Code to generate a new design
});

app.get('/api/designs', (req, res) => {
  // Code to retrieve previous designs
});


const cors = require('cors');

// Use CORS middleware
app.use(cors());

