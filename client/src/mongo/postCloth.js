import express from 'express';
import clothModel from './clothModel.js';

const router = express.Router();

router.post("/", async (req, res) => {
    const { text, author } = req.body;

    // Validation to ensure both fields are provided
    if (!text || !author) {
        return res.status(400).send("Both 'text' and 'author' are required");
    }

    try {
        const newCloth = new clothModel({
            text,
            author
        });

        // Save the new cloth to the database
        await newCloth.save();

        res.status(201).json(newCloth);
    } catch (err) {
        console.error(err);
        res.status(500).send("Failed to create new cloth");
    }
});

export default router;
