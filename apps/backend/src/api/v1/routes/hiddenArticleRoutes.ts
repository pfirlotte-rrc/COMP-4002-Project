import express from "express";
import { HiddenArticleController } from "../controllers/hiddenArticleController";
import { validateRequest } from "../middleware/validate";
import { hideArticleSchema, showArticleSchema } from "../validations/hiddenArticlesValidation";
import { findOrCreateUser } from "../middleware/findOrCreateUser";

const router = express.Router();

// GET / - Get all hidden articles.
router.get("/", findOrCreateUser, HiddenArticleController.getHiddenArticles);

// POST /hide - Hide an article.
router.post("/hide", findOrCreateUser,
  validateRequest(hideArticleSchema),
  HiddenArticleController.hideArticle
);

// POST /show - Show an article (remove from hidden).
router.post("/show", findOrCreateUser,
  validateRequest(showArticleSchema),
  HiddenArticleController.showArticle
);

// GET /check/:articleName - Check if article is hidden.
router.get("/check/:articleName", findOrCreateUser, HiddenArticleController.checkHiddenStatus);

export default router;