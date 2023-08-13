//J52o6wzSLhjdOjyH
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from 'body-parser';
const app = express();

import userRouter from "./routes/user-routes.js";
import adminRouter from "./routes/admin-routes.js";
import movieRouter from "./routes/movie-routes.js";
import bookingsRouter from "./routes/booking-routes.js";
import cors from "cors";
dotenv.config();


 //middlewares
mongoose.connect("mongodb://adityaasa10:Aditya10@ac-jetkpkk-shard-00-00.u8runev.mongodb.net:27017,ac-jetkpkk-shard-00-01.u8runev.mongodb.net:27017,ac-jetkpkk-shard-00-02.u8runev.mongodb.net:27017/?ssl=true&replicaSet=atlas-hbwz3i-shard-0&authSource=admin&retryWrites=true&w=majority",{useNewUrlParser: true,useUnifiedTopology: true})
  .then(() =>
    app.listen(9000, () =>
      console.log("Connected To Database And Server is running")
    )
  )
  .catch((e) => console.log(e));
  app.use(cors());
  app.use(express.json());
  app.use("/user", userRouter);
  app.use("/admin", adminRouter);
  app.use("/movie", movieRouter);
  app.use("/booking", bookingsRouter);
  app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
 