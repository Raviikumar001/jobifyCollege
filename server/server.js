import express from "express"; 

import dotenv from "dotenv";

import connectDB from "./db/connect.js";
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from './middleware/error-handler.js'

const app = express();
dotenv.config();




app.get("/", (req, res) => {
    res.json({ msg: "Welcome!" });
  }); 


  app.use(notFoundMiddleware);
  app.use(errorHandlerMiddleware);

  const port = process.env.PORT || 5000;
  console.log(process.env.MONGO_URL)

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