import express from 'express';
import mongoose from 'mongoose';
import clothModel from './clothModel.js';

const router = express.Router();

// Route to delete a cloth by ID
router.delete("/:id", async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send("Invalid ID format");
    }

    try {
        const deletedCloth = await clothModel.findByIdAndDelete(id);

        if (!deletedCloth) {
            return res.status(404).send("Cloth not found");
        }

        res.status(200).send("Cloth successfully deleted");
    } catch (err) {
        console.error(err);
        res.status(500).send("Failed to delete cloth");
    }
});

export default router;
