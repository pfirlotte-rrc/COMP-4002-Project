import express from "express";
import * as ratingController from "../controllers/ratingController";

const router = express.Router();

router.get("/", ratingController.getArticles);
router.post("/:id/rate", ratingController.rateArticle);
router.post("/:id/view", ratingController.incrementViews);

export default router;