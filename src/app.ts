import express from "express";
import cors from "cors";
import helmet from "helmet";
import connectDB from "./config/database.js";


const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());

// Routes


// Connect to DB
connectDB();

export default app;