import express from 'express';
// import connectDB from '../../../backend/db/connectDB.js';
import connectDB from '../../db/connectDB.js';
import getCloth from './getCloth.js';  
import getClothById from './getClothById.js';
import postCloth from './postCloth.js'; 
import deleteClothById from './deleteClothById.js'
import updateClothById from './updateClothById.js'
import genAIRoutes from './genAI.js'
import cors from 'cors';

const app = express({});
const PORT = 4000;
app.use(cors())
app.use(express.json());

// Root route
app.get('/', (req, res) => {
    res.send('Server is running and database is connected!');
});

// Use routes for /comments
app.use('/getCloth', getCloth);
app.use('/getClothById', getClothById);
app.use('/postCloth', postCloth);
app.use('/deleteClothById', deleteClothById);
app.use('/updateClothById', updateClothById);
app.use('/api/genAI', genAIRoutes);


const startServer = async () => {
    try {
        // Connect to the database
        console.log('Connecting to the database...');
        await connectDB(); // This will log the connection message

        // Start the server
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Failed to start the server:', error);
    }
};

startServer();
