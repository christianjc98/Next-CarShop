import express from "express";
const app = express();

import dotenv from "dotenv";
dotenv.config();
import "express-async-errors";

//db and authenticate user
import connectDB from "./db/connect.js";

//routers
import authRouter from "./routes/authRoutes.js";
import customerRouter from "./routes/customerRoutes.js";
import carRouter from "./routes/carRoutes.js";

//middleware
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import authMiddleware from "./middleware/auth.js";

import cookieParser from "cookie-parser";

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/customer", authMiddleware, customerRouter);
app.use("/api/v1/car", authMiddleware, carRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5001;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
