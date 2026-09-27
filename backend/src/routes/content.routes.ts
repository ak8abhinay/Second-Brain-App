import { Router } from "express";
import { createContent, getContent, deleteContent } from "../controllers/content.controller";
import { userMiddleware } from "../middleware/auth.middleware";

const router = Router();
router.post("/", userMiddleware, createContent);
router.get("/", userMiddleware, getContent);   // now protected — was a bug before, fixed here
router.delete("/", userMiddleware, deleteContent);

export default router;