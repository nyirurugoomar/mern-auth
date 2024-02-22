import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import cardRoutes from "./routes/card.route.js";
import cookieParser from "cookie-parser";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log(error);
  });

const __dirname = path.resolve();

const port = 3000;
const app = express();

app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

app.use(express.json());
app.use(cookieParser());

app.listen(port, () => {
  console.log(`The server is running on ${port} `);
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/card", cardRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: true,
    message,
    statusCode,
  });
});
