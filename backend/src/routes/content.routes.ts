import { Router } from "express";
import { createContent, getContent, getContentFile, deleteContent } from "../controllers/content.controller";
import { userMiddleware } from "../middleware/auth.middleware";
import { uploadSingleFile } from "../middleware/upload.middleware";

const router = Router();
router.post("/", userMiddleware, uploadSingleFile, createContent);
router.get("/", userMiddleware, getContent);
router.get("/:id/file", userMiddleware, getContentFile);
router.delete("/:id", userMiddleware, deleteContent);

export default router;