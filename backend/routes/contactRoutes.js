const express = require("express");
const Contact = require("../models/Contact");

const router = express.Router();

router.post("/", async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({
            success: false,
            message: "Name, email, and message are required."
        });
    }

    try {
        await Contact.create({
            name,
            email,
            message
        });

        res.status(201).json({
            success: true,
            message: "Your message was sent successfully!"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Unable to save your message."
        });
    }
});

module.exports = router;