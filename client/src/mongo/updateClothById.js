import express from 'express';
import mongoose from 'mongoose';
import clothModel from './clothModel.js'; // Ensure this path is correct

const router = express.Router();

// Route to update a cloth by ID
router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send("Invalid ID format");
    }

    try {
        const updatedCloth = await clothModel.findByIdAndUpdate(
            id,
            updateData,
            { new: true, runValidators: true }
        );

        if (!updatedCloth) {
            return res.status(404).send("Cloth not found");
        }

        res.status(200).json(updatedCloth);
    } catch (err) {
        console.error(err);
        res.status(500).send("Failed to update cloth data");
    }
});

export default router;
