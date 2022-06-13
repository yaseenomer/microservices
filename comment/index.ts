import express from "express";
import cors from "cors";
import { json } from "body-parser";
import { router } from "./routes";
import mongoose from "mongoose";

const app = express();
app.use(cors());
app.use(json());

app.get("/", (req, res) => {
  res.send("Hello from comment");
});

app.use("/api/comments", router);

const start = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/comments");

    app.listen(8081, () => {
      console.log(`comment listening at http://localhost:8081`);
    });
  } catch (err) {
    console.error(err);
  }
};

start();
