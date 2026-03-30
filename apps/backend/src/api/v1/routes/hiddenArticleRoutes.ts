import express from "express";
import { HiddenArticleController } from "../controllers/hiddenArticleController";
import { validateRequest } from "../middleware/validate";
import { hideArticleSchema, showArticleSchema } from "../validations/hiddenArticlesValidation";

const router = express.Router();

// GET /api/hidden - Get all hidden articles.
router.get(
    "/hidden", 
    HiddenArticleController.getHiddenArticles
);

// POST /api/hidden/hide - Hide an article.
router.post(
  "/hidden/hide",
  validateRequest(hideArticleSchema),
  HiddenArticleController.hideArticle
);

// POST /api/hidden/show - Show an article (remove from hidden).
router.post(
  "/hidden/show",
  validateRequest(showArticleSchema),
  HiddenArticleController.showArticle
);

// GET /api/hidden/check/:articleName - Check if article is hidden.
router.get(
    "/hidden/check/:articleName", 
    HiddenArticleController.checkHiddenStatus
);

export default router;