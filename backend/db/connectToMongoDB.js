import mongoose from 'mongoose';

const uri = "mongodb+srv://prakharchaturvedi2003:GKZBA0SyqZOE2qzx@prakharapi.wvnsi.mongodb.net/PrakharAPI?retryWrites=true&w=majority&appName=PrakharAPI";

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Failed to connect to the database:', error);
        throw error;
    }
};

export default connectToMongoDB;

