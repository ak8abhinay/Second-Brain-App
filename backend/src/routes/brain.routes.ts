import { Router } from "express";
import { shareBrain, getSharedBrain } from "../controllers/brain.controller";
import { userMiddleware } from "../middleware/auth.middleware";

const router = Router();
router.post("/share", userMiddleware, shareBrain);
router.get("/:shareLink", getSharedBrain);

export default router;