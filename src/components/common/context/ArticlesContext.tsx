import { createContext, useState} from 'react';
import type { ReactNode } from 'react';
import {  listOfArticles } from '../../../apis/ArticleData';
import type { Article } from '../../../apis/ArticleData';
import { ArticleRepository } from "../../../repositories/articleRateRepository";
import { ArticleRatingService } from "../../../services/ratingService";
import { HiddenArticlesService } from "../../../services/hiddenArticlesService";

interface ArticlesContextType {
  articles: Article[];
  hiddenArticles: string[];
  incrementViewCount: (name: string) => void;
  calculateAverageRating: (ratings: { userId: string; value: number }[]) => number;
  updateRating: (articleId: string, userId: string, value: number) => void;
  hasUserRated: (articleId: string, userId: string) => boolean;
  addArticle: (article: Article) => void;
  hideArticle: (name: string) => void;
  showArticle: (name: string) => void;
}

export const ArticlesContext = createContext<ArticlesContextType | undefined>(undefined);

export const ArticlesProvider = ({ children }: { children: ReactNode }) => {
  const [articles, setArticles] = useState<Article[]>(listOfArticles);
  const [hiddenArticles, setHiddenArticles] = useState<string[]>([]);

  const incrementViewCount = (name: string) => {
    setArticles((prevArticles) =>
      prevArticles.map((article) =>
        article.Name === name
          ? { ...article, Views: article.Views + 1 }
          : article
      )
    );
  };

  const updateRating = (articleId: string, userId: string, value: number) => {
    try {
      ArticleRatingService.rateArticle(articleId, userId, value);
      setArticles(ArticleRepository.getArticles());
    } catch (error) {
      alert((error as Error).message);
    }
  };

  const hasUserRated = (articleId: string, userId: string) =>
    ArticleRatingService.hasUserRated(articleId, userId);

  const calculateAverageRating = (ratings: { userId: string; value: number }[]) =>
    ArticleRatingService.calculateAverageRating(ratings);

  const addArticle = (newArticle: Article) => {
    setArticles((prevArticles) => [newArticle, ...prevArticles]);
  };
  
  const hideArticle = (name: string) => {
    try {
      HiddenArticlesService.hideArticle(name);
      setHiddenArticles(HiddenArticlesService.getHidden());
    } catch (error) {
      alert((error as Error).message);
    }
  };

  const showArticle = (name: string) => {
    try {
      HiddenArticlesService.showArticle(name);
      setHiddenArticles(HiddenArticlesService.getHidden());
    } catch (error) {
      alert((error as Error).message);
    }
  };

  return (
    <ArticlesContext.Provider
      value={{ articles, hiddenArticles, incrementViewCount, calculateAverageRating, hasUserRated, updateRating, addArticle, hideArticle, showArticle}}
    >
      {children}
    </ArticlesContext.Provider>
  );
};