const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const locationRoutes = require('./routes/locationRoutes');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.use('/api/user', userRoutes);
app.use('/api/location', locationRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.error("MongoDB Connection Error:", err));


// Server.js or your routes file

// This handles POST requests from your frontend form:
app.post('/api/user/profile', upload.none(), (req, res) => {
    console.log("Received data:", req.body);
    res.json({ message: "Profile created successfully!" });
});

// Optional: handle GET request for testing
app.get('/api/user/profile', (req, res) => {
    res.json({ message: "This is a test GET response" });
});

app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
});