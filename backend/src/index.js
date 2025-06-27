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

import { app, server } from "./lib/socket.js";

//config dotenv
dotenv.config();

const PORT = process.env.PORT;

app.use(express.json({limit: '10mb'}));
app.use(express.urlencoded({extended: true, limit: '10mb'}))
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

//authorization routes -> signup, login, logout
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes)

//listening on port 
server.listen(PORT, () => {
    console.log("Server is running on PORT : " + PORT);
    connectDB();
});

