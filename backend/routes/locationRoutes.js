const express = require('express');
const router = express.Router();


app.post('/api/user/profile', (req, res) => {
    console.log(req.body); // see incoming data
    res.json({ message: 'Profile saved!' });
});

router.get('/countries', (req, res) => {
    res.json([{ name: 'India' }, { name: 'USA' }]);
});

router.get('/states/:country', (req, res) => {
    const states = {
        India: ['Delhi', 'Gujarat'],
        USA: ['Texas', 'California']
    };
    res.json(states[req.params.country] || []);
});

router.get('/cities/:state', (req, res) => {
    const cities = {
        Delhi: ['New Delhi', 'Old Delhi'],
        Gujarat: ['Ahmedabad', 'Surat'],
        Texas: ['Houston', 'Dallas'],
        California: ['LA', 'San Francisco']
    };
    res.json(cities[req.params.state] || []);
});

module.exports = router;
