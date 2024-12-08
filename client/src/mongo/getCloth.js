import express from 'express';
import clothModel from './clothModel.js';


const router = express.Router();

// Route to get all comments
router.get("/", async (req, res) => {
    console.log('Fetching all cloths...');  
    try {
        const comments = await clothModel.find();
        res.status(200).json(comments);
    } catch (err) {
        console.error(err);
        res.status(500).send("Failed to fetch all cloths");
    }
});


export default router;
