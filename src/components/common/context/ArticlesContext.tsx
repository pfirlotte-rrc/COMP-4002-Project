import { createContext, useState} from 'react';
import type { ReactNode } from 'react';
import {  listOfArticles } from '../../pages/ArticleData';
import type { Article } from '../../pages/ArticleData';

interface ArticlesContextType {
  articles: Article[];
  hiddenArticles: string[];
  incrementViewCount: (name: string) => void;
  calculateAverageRating: (ratings: number[]) => number;
  updateRating: (name: string, rating: number) => void;
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

  const calculateAverageRating = (ratings: number[]): number => {
    if (ratings.length === 0) return 0;
    return ratings.reduce((acc, curr) => acc + curr, 0) / ratings.length;
  };

  const updateRating = (name: string, rating: number) => {
    setArticles((prevArticles) =>
      prevArticles.map((article) =>
        article.Name === name
          ? { ...article, Ratings: [...article.Ratings, rating] }
          : article
      )
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
      value={{ articles, hiddenArticles, incrementViewCount, calculateAverageRating, updateRating, addArticle, hideArticle, showArticle}}
    >
      {children}
    </ArticlesContext.Provider>
  );
};
