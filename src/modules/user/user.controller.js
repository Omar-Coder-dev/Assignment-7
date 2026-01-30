import { Router } from "express";
import * as userService from "./user.service.js";

const router = Router();

router.post("/signup", async (req, res) => {
    try {
        const user = await userService.signup(req.body);
        res.status(201).json({ message: "success", user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.post("/login", async (req, res) => {
    const user = await userService.login(req.body.email, req.body.password);
    if (!user) return res.status(401).json({ message: "invalid credentials" });
    res.json({ message: "login success", user });
});

router.put("/update/:id", async (req, res) => {
    await userService.update(req.params.id, req.body);
    res.json({ message: "updated" });
});

router.delete("/delete/:id", async (req, res) => {
    await userService.remove(req.params.id);
    res.json({ message: "deleted" });
});

router.get("/search", async (req, res) => {
    const users = await userService.search(req.query.name);
    res.json({ users });
});

export default router;