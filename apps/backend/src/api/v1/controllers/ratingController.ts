import * as articleService from "../services/ratingService";
import { Request, Response } from "express";

function parseSingleParam(param: string | string[]): string {
  return Array.isArray(param) ? param[0] : param;
}

export const getArticles = async (_req: Request, res: Response) => {
  try {
    const articles = await articleService.getArticles();
    res.json(articles);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const rateArticle = async (req: Request, res: Response) => {
  try {
    const articleId = parseInt(parseSingleParam(req.params.id), 10);
    const userId = parseInt(req.body.userId, 10);
    const rating = req.body.rating;

    const result = await articleService.rateArticle(articleId, userId, rating);
    res.status(201).json(result);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const incrementViews = async (req: Request, res: Response) => {
  try {
    const articleId = parseInt(parseSingleParam(req.params.id), 10);
    const article = await articleService.incrementViewCount(articleId);
    res.json(article);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};