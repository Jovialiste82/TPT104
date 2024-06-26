// server/app.js
import "dotenv/config";
import express from "express";
import helmet from "helmet";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectDB } from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import userRoutes from "./routes/user.routes.js";

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors());
app.use(cookieParser());

// Routes
app.use("/api/v1/users", userRoutes);

// Health check
app.get("/", (_, res) => {
  return res.status(200).json({
    status: "healthy",
  });
});

app.use(notFound);
app.use(errorHandler);

export default app;
