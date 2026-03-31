import { Request, Response } from "express";
import { HiddenArticleService } from "../services/hiddenArticleService";

export const HiddenArticleController = {
  hideArticle: async (req: Request, res: Response) => {
    try {
      const { articleName } = req.body;
      
      await HiddenArticleService.hideArticle(articleName);
      
      res.status(200).json({
        success: true,
        message: `Article "${articleName}" has been hidden`,
        data: { articleName }
      });
    } catch (error: any) {
      console.error("Error in hideArticle:", error);
      res.status(500).json({ 
        success: false,
        error: error.message 
      });
    }
  },

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
      console.error("Error in showArticle:", error);
      res.status(500).json({ 
        success: false,
        error: error.message 
      });
    }
  },

  getHiddenArticles: async (_req: Request, res: Response) => {
    try {
      const hiddenArticles = await HiddenArticleService.getHiddenArticles();
      
      res.status(200).json({
        success: true,
        data: hiddenArticles
      });
    } catch (error: any) {
      console.error("Error in getHiddenArticles:", error);
      res.status(500).json({ 
        success: false,
        error: error.message 
      });
    }
  },

  checkHiddenStatus: async (req: Request, res: Response) => {
    try {
      const articleName = req.params.articleName as string;
      const isHidden = await HiddenArticleService.isArticleHidden(articleName);
      
      res.status(200).json({
        success: true,
        data: { isHidden }
      });
    } catch (error: any) {
      console.error("Error in checkHiddenStatus:", error);
      res.status(500).json({ 
        success: false,
        error: error.message 
      });
    }
  }
};