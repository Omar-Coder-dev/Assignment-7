import { Router } from "express";
import * as commentService from "./comment.service.js";

const router = Router();

router.post("/", async (req, res) => {
    const comment = await commentService.create(req.body);
    res.status(201).json({ comment });
});

router.get("/", async (req, res) => {
    const comments = await commentService.getAll();
    res.json({ comments });
});

export default router;