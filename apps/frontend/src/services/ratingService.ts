import type { Article } from "../apis/ArticleData";
import { ArticleRepository } from "../repositories/articleRateRepository";

export const ArticleRatingService = {
  rateArticle: (articleId: string, userId: string, rating: number) => {
    const article = ArticleRepository.getArticleById(articleId);
    if (!article) throw new Error("Article not found");

    if (article.Ratings.some(r => r.userId === userId)) {
      throw new Error("User has already rated this article");
    }

    const updatedArticle: Article = {
      ...article,
      Ratings: [...article.Ratings, { userId, value: rating }],
    };

    ArticleRepository.updateArticle(updatedArticle);

    return updatedArticle;
  },

  calculateAverageRating: (ratings: { userId: string; value: number }[]) => {
    if (!ratings.length) return 0;
    return ratings.reduce((sum, r) => sum + r.value, 0) / ratings.length;
  },

  hasUserRated: (articleId: string, userId: string) => {
    const article = ArticleRepository.getArticleById(articleId);
    return article ? article.Ratings.some(r => r.userId === userId) : false;
  }
}