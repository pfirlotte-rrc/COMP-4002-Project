import express from "express";
import { HiddenArticleController } from "../controllers/hiddenArticleController";
import { validateRequest } from "../middleware/validate";
import { hideArticleSchema, showArticleSchema } from "../validations/hiddenArticlesValidation";

const router = express.Router();

// GET / - Get all hidden articles.
router.get("/", HiddenArticleController.getHiddenArticles);

// POST /hide - Hide an article.
router.post("/hide",
  validateRequest(hideArticleSchema),
  HiddenArticleController.hideArticle
);

// POST /show - Show an article (remove from hidden).
router.post("/show",
  validateRequest(showArticleSchema),
  HiddenArticleController.showArticle
);

// GET /check/:articleName - Check if article is hidden.
router.get("/check/:articleName", HiddenArticleController.checkHiddenStatus);

export default router;