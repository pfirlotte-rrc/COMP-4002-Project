import { createContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import type { Article } from "../../../apis/prismaArticle";
import { HiddenArticlesService } from "../../../services/hiddenArticlesService";

interface Rating {
  userId: number;
  value: number;
}

interface ArticlesContextType {
  articles: Article[];
  hiddenArticles: string[];
  loading: boolean;

  incrementViewCount: (articleId: number) => void;
  updateRating: (articleId: number, userId: number, value: number) => void;

  calculateAverageRating: (ratings: Rating[]) => number;
  hasUserRated: (articleId: number, userId: number) => boolean;

  addArticle: (article: Article) => void;
  hideArticle: (name: string) => void;
  showArticle: (name: string) => void;
}

export const ArticlesContext = createContext<ArticlesContextType | undefined>(undefined);

export const ArticlesProvider = ({ children }: { children: ReactNode }) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [hiddenArticles, setHiddenArticles] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch("http://localhost:3000/articles");
        const data = await res.json();
        setArticles(data);
      } catch (error) {
        console.error("Failed to fetch articles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const incrementViewCount = async (articleId: number) => {
    try {
      await fetch(`http://localhost:3000/articles/${articleId}/view`, {
        method: "POST",
      });

      setArticles(prev =>
        prev.map(a =>
          a.id === articleId
            ? { ...a, views: (a.views || 0) + 1 }
            : a
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  const updateRating = async (
    articleId: number,
    userId: number,
    value: number
  ) => {
    try {
      await fetch(`http://localhost:3000/articles/${articleId}/rate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, rating: value }),
      });

      setArticles(prev =>
        prev.map(a =>
          a.id === articleId
            ? {
                ...a,
                ratings: [...(a.ratings || []), { userId, value }],
              }
            : a
        )
      );
    } catch (error: any) {
      alert(error.message);
    }
  };

  const hasUserRated = (articleId: number, userId: number) => {
    const article = articles.find(a => a.id === articleId);
    return article
      ? article.ratings?.some(r => r.userId === userId)
      : false;
  };

  const calculateAverageRating = (ratings: Rating[]) => {
    if (!ratings || ratings.length === 0) return 0;
    return ratings.reduce((sum, r) => sum + r.value, 0) / ratings.length;
  };


  const addArticle = (newArticle: Article) => {
    setArticles(prev => [newArticle, ...prev]);
  };


  const hideArticle = (name: string) => {
    try {
      HiddenArticlesService.hideArticle(name);
      setHiddenArticles(HiddenArticlesService.getHidden());
    } catch (error: any) {
      alert(error.message);
    }
  };

  const showArticle = (name: string) => {
    try {
      HiddenArticlesService.showArticle(name);
      setHiddenArticles(HiddenArticlesService.getHidden());
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <ArticlesContext.Provider
      value={{
        articles,
        hiddenArticles,
        loading,
        incrementViewCount,
        updateRating,
        calculateAverageRating,
        hasUserRated,
        addArticle,
        hideArticle,
        showArticle,
      }}
    >
      {children}
    </ArticlesContext.Provider>
  );
};