import { listOfArticles } from "../apis/ArticleData";
import type { Article } from "../apis/ArticleData";

let articles: Article[] = [...listOfArticles]; 

export const ArticleRepository = {
  getArticles: (): Article[] => [...articles],

  getArticleById: (articleId: string): Article | undefined =>
    articles.find(a => a.Name === articleId),

  updateArticle: (updatedArticle: Article) => {
    articles = articles.map(a =>
      a.Name === updatedArticle.Name ? updatedArticle : a
    );
  },
};