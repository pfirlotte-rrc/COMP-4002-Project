import { Request, Response} from "express";
import { HiddenArticleService } from "../services/hiddenArticleService";

export const HiddenArticleController = {
  /**
   * Hides the article.
   */
  hideArticle: async (req: Request, res: Response) => {
    try {
      const { articleName } = req.body;
      
      await HiddenArticleService.hideArticle(articleName);
      
      res.status(201).json({
        success: true,
        message: `Article "${articleName}" has been hidden`,
        data: { articleName }
      });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
  },

  /**
   * Show an article (remove from hidden).
   */
  showArticle: async (req: Request, res: Response) => {
    try {
      const { articleName } = req.body;
      
      await HiddenArticleService.showArticle(articleName);
      
      res.status(200).json({
        success: true,
        message: `Article "${articleName}" has been shown`,
        data: { articleName }
      });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  /**
   * Get all hidden articles.
   */
  getHiddenArticles: async (res: Response) => {
    try {
      const hiddenArticles = await HiddenArticleService.getHiddenArticles();
      
      res.status(200).json({
        success: true,
        data: hiddenArticles
      });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  /**
   * Checks to see if the article is hidden.
   */
  checkHiddenStatus: async (req: Request, res: Response) => {
    try {
      const { articleName } = req.body;
      const isHidden = await HiddenArticleService.isArticleHidden(articleName);
      
      res.status(200).json({
        success: true,
        data: { isHidden }
      });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
};