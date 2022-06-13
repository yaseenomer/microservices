import express from "express";
import { json } from "body-parser";
import cors from "cors";
import { router as postRouter  } from "./routes";
import mongoose from "mongoose";

const app = express();
app.use(json());
app.use(cors());
const port = 8080;

app.get("/", (req, res) => {
  res.send("Hello from post");
});


app.use("/api/posts", postRouter);


const start = async () => {
  try {
    await mongoose.connect("mongodb://post-mongo-srv:27017");

    console.log("Connected to MongoDB");

    app.listen(port, () => {
      console.log(`post listening at http://localhost:${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};


start();










