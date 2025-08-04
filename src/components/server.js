const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection (ensure you are using localhost)
const dbUrl = 'mongodb://localhost:27017/sample_mflix'; // Ensure this is the local database

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log('Error connecting to MongoDB:', err));

// Routes
app.post('/api/signup', async (req, res) => {
    const { username, email, password, role, businessName, adminId } = req.body;
    // Here, add your MongoDB save logic...
    res.json({ message: "Signup successful!" });
});

// Listening on localhost only
const HOST = '127.0.0.1'; // Localhost
const PORT = 3002;
app.listen(PORT, HOST, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

