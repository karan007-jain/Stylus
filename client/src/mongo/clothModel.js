import mongoose from 'mongoose';

// Define the Cloth schema
const clothSchema = new mongoose.Schema({
    intro: {
        type: Boolean,
        default: false,
        required: true
    },
    sartorial : {
        type: Boolean,
        default: false,
        required: true
    },
    color: {
        type: String,
        default: '#EEEEEE',
        required: true
    },
    isLogoTexture: {
        type: Boolean,
        default: true,
        required: true
    },
    isFullTexture: {
        type: Boolean,
        default: false,
        required: true
    },
    logoDecal: {
        type: String,
        default: './threejs.png',
        required: true
    },
    fullDecal: {
        type: String,
        default: './threejs.png',
        required: true
    }
});

// Create and export the model
const Cloth = mongoose.model('Cloth', clothSchema);

export default Cloth;
