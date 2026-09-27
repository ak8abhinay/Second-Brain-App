import { Router } from "express";
import userRoutes from "./user.routes";
import contentRoutes from "./content.routes";
import brainRoutes from "./brain.routes";

const router = Router();
router.use("/", userRoutes);   // handled inside user.routes as /signup, /signin — see note below
router.use("/content", contentRoutes);
router.use("/brain", brainRoutes);

export default router;