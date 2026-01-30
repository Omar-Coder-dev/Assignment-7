import { Router } from "express";
import * as postService from "./post.service.js";

const router = Router();

router.post("/", async (req, res) => {
    const post = await postService.create(req.body);
    res.status(201).json({ post });
});

router.get("/", async (req, res) => {
    const posts = await postService.getAll();
    res.json({ posts });
});

router.delete("/soft/:id", async (req, res) => {
    await postService.softDelete(req.params.id);
    res.json({ message: "soft deleted" });
});

router.delete("/hard/:id", async (req, res) => {
    await postService.hardDelete(req.params.id);
    res.json({ message: "hard deleted" });
});

export default router;