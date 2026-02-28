import { createContext, useState} from 'react';
import type { ReactNode } from 'react';
import {  listOfArticles } from '../../../apis/ArticleData';
import type { Article } from '../../../apis/ArticleData';

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

  const calculateAverageRating = (
    ratings: { userId: string; value: number }[]
  ): number => {
    if (!ratings.length) return 0;
    const total = ratings.reduce((acc, r) => acc + r.value, 0);
    return total / ratings.length;
  };

  const hasUserRated = (articleId: string, userId: string): boolean => {
    const article = articles.find((a) => a.Name === articleId);
    if (!article) return false;

    return article.Ratings.some((r) => r.userId === userId);
  };

 const updateRating = (articleId: string, userId: string, value: number) => {
    setArticles(prev =>
      prev.map(a => {
        if (a.Name !== articleId) return a;
        // Ignore if already rated
        if (a.Ratings.some(r => r.userId === userId)) return a;

        return { ...a, Ratings: [...a.Ratings, { userId, value }] };
      })
    );
  };

  const addArticle = (newArticle: Article) => {
    setArticles((prevArticles) => [newArticle, ...prevArticles]);
  };

  const hideArticle = (name: string) => {
    setHiddenArticles(prev => [...prev, name]);
  };

  const showArticle = (name: string) => {
    setHiddenArticles(prev => prev.filter(articleName => articleName !== name));
  };

  return (
    <ArticlesContext.Provider
      value={{ articles, hiddenArticles, incrementViewCount, calculateAverageRating, hasUserRated, updateRating, addArticle, hideArticle, showArticle}}
    >
      {children}
    </ArticlesContext.Provider>
  );
};
