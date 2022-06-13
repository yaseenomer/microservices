import { Router, Request, Response } from "express";
import { Post } from "./model";

const router: Router = Router();

router.get("/", async (req: Request, res: Response) => {
  const post = await Post.find();

  res.status(200).json(post);
});

router.post("/", async (req: Request, res: Response) => {
  const post = await Post.build(req.body).save();

  res.status(201).json(post);
});


export { router }