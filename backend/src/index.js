//Main server file
//Express for middleware
import express from "express";
//dotenv for setting up environment variable
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";

//config dotenv
dotenv.config();
const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

//authorization routes -> signup, login, logout
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes)

//listening on port 
app.listen(PORT, () => {
    console.log("Server is running on PORT : " + PORT);
    connectDB();
});

