import express from "express";

import dotenv from "dotenv";

dotenv.config();
//db and authenticate user
import "express-async-errors";

import connectDB from "./db/connect.js";

//router
import authRouter from "./routes/authRoutes.js";
import jobsRouter from './routes/jobRoutes.js'

import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";

const app = express();

app.use(express.json());
app.get("/", (req, res) => {
  res.json({ msg: "Welcome!" });
});

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', jobsRouter)

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;
console.log(process.env.MONGO_URL);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`server is listening on port :${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
