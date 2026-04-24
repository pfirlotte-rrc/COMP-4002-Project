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

    // Clerk injects this via middleware
    const clerkUserId = req.auth?.userId;

    if (!clerkUserId) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const rating = Number(req.body.rating);

    if (!rating || rating < 1 || rating > 5) {
      return res.status(400).json({ error: "Invalid rating value" });
    }

    const result = await articleService.rateArticle(
      articleId,
      clerkUserId,
      rating
    );

    return res.status(201).json(result);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};


export const incrementViews = async (req: Request, res: Response) => {
  try {
    const articleId = parseInt(parseSingleParam(req.params.id), 10);

    if (isNaN(articleId)) {
      return res.status(400).json({ error: "Invalid article ID" });
    }

    const article = await articleService.incrementViewCount(articleId);

    return res.json(article);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};