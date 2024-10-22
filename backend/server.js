import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import { notFound, errorHandler } from "./middlewares/errorMiddleware.js";
dotenv.config();
const port = process.env.PORT || 5000;
const app = express();

// database connect
connectDB();

// middlewares
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running");
});

// routes
app.use("/api/products", productRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, (req, res) => {
  console.log(`Server running successfully on port ${port}`);
});
