import express from "express";
import * as ratingController from "../controllers/ratingController";
import { requireAuth } from "@clerk/express";

const router = express.Router();

router.get("/", ratingController.getArticles);

router.post("/:id/view", ratingController.incrementViews);

router.post("/:id/rate", requireAuth(), ratingController.rateArticle);

export default router;