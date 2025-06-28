const express = require('express');
const router = express.Router();
const multer = require('multer');
const User = require('../models/user'); // adjust path if necessary

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage });

router.get('/check-username', async (req, res) => {
    const { username } = req.query;
    try {
        const user = await User.findOne({ username });
        return res.json({ available: !user });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

router.post('/profile', upload.single('profilePhoto'), async (req, res) => {
    try {
        const userData = req.body;
        if (req.file) {
            userData.profilePhotoPath = req.file.path;
        }

        // Create or update user
        const user = await User.create(userData);
        return res.json({ message: 'Profile saved successfully', user });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
    }
});

module.exports = router;
