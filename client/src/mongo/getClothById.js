import express from 'express';
import mongoose from 'mongoose';
import clothModel from './clothModel.js';

const router = express.Router();

// Route to get a comment by ID
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send("Invalid ID format");
    }
 
    try {
        const cloths = await clothModel.findById(id);

        if (!cloths) {
            return res.status(404).send("Comment not found");
        }        
        res.status(200).json(cloths);
    } catch (err) {
        console.error(err);
        res.status(500).send("Failed to fetch comment data");
    }
});

export default router;