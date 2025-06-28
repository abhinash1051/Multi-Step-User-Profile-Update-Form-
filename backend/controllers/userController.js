const User = require('../models/user');

exports.uploadPhoto = (req, res) => {
    res.json({ path: `/uploads/${req.file.filename}` });
};

exports.checkUsername = async (req, res) => {
    const { username } = req.body;
    const user = await User.findOne({ username });
    res.json({ available: !user });
};

exports.updateProfile = async (req, res) => {
    const data = req.body;
    try {
        await User.create(data);
        res.json({ message: "Profile updated successfully" });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};
