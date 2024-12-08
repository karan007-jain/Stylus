import { GoogleGenerativeAI } from "@google/generative-ai";
import express from "express";
import axios from "axios";
import { encode } from "gpt-3-encoder"; // Install this package using `npm install gpt-3-encoder`

const router = express.Router();

// Initialize Google Generative AI
const genAI = new GoogleGenerativeAI('AIzaSyBQl-n3I_JAzU_v9fXfts9B6ZXakKzRB3A');
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Define token limit
const TOKEN_LIMIT = 2048; // Adjust based on API's maximum token limit

// Function to enforce token length limit
const enforceTokenLimit = (text, tokenLimit) => {
    const tokens = encode(text); // Tokenize the text
    if (tokens.length > tokenLimit) {
        // Join the truncated tokens back into text
        const truncatedText = tokens.slice(0, tokenLimit).join("");
        return truncatedText;
    }
    return text; // Return original text if within limit
};

// Function to generate content using Google Generative AI
const generateContent = async (prompt) => {
    try {
        const result = await model.generateContent(prompt);
        console.log("Generated Content:", result.response.text());
        return result.response.text();
    } catch (error) {
        console.error("Error generating content:", error);
        throw new Error("Failed to generate content");
    }
};

// Route: Fetch cloth data from /getCloth API and generate content
router.get('/content', async (req, res) => {
    try {
        // Fetch data from /getCloth API
        const clothResponse = await axios.get('http://localhost:4000/getCloth');
        const clothData = clothResponse.data;
        const weater_details = "cold";
        const occasion_details = "cold";

        if (!clothData || clothData.length === 0) {
            throw new Error('No cloth data available');
        }

        const promtMainLines = "Suggest me the best tshirt I could wear for occasion of a" + occasion_details + ", from this dataset of tshirts in "+ weater_details +" . Give me output from my data only, suggest me the id of the tshirt only one output is required";
        const prompt = JSON.stringify(clothData);
        const combinedPrompt = promtMainLines + prompt;
        // Promting error checks : 
        // console.log("................"+combinedPrompt+"................");

        const trimmedPrompt = enforceTokenLimit(combinedPrompt, TOKEN_LIMIT);

        const result = await generateContent(trimmedPrompt);

        res.json({
            result,
        });
    } catch (error) {
        console.error("Error in /api/content:", error.message);
        res.status(500).json({
            error: error.message,
        });
    }
});

export default router;
