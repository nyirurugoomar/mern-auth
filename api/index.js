import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";

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

const port = 3000;
const app = express();

app.use(express.json());

app.listen(port, () => {
  console.log(`The server is running on ${port} `);
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
