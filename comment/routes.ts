import { Router, Request, Response } from "express";
import { Comment } from "./model";

const router: Router = Router();

router.post("/", async (req: Request, res: Response) => {

    const { postId, body } = req.body;
    const comment = Comment.build({
        body,
        postId
    });

    await comment.save();
    
    res.status(201).send(comment);
});

router.get("/", async (req: Request, res: Response) => {
    const comments = await Comment.find();
    res.status(200).send(comments);
});


export { router }