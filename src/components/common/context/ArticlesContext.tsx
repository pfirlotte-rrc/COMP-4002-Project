import { createContext, useState} from 'react';
import type { ReactNode } from 'react';

export interface Article {
  Name: string;
  NewsArticle: string;
  PublishDate: Date;
  Description: string;
  Ratings: number[];
  Views: number;
  Category: string;
}

interface ArticlesContextType {
  articles: Article[];
  incrementViewCount: (index: number) => void;
  calculateAverageRating: (ratings: number[]) => number;
  updateRating: (index: number, rating: number) => void;
}

export const ArticlesContext = createContext<ArticlesContextType | undefined>(undefined);

export const ArticlesProvider = ({ children }: { children: ReactNode }) => {
  const initialArticles: Article[] = [
    { 
      Name: 'JavaScript ES2026', 
      NewsArticle: 'The new features coming to JavaScript in 2026', 
      PublishDate: new Date(2026, 1, 10), 
      Description: 'The latest updates and features to look forward to in JavaScript ES2026.',
      Ratings: [5, 4, 4, 5],
      Views: 120, 
      Category: 'JavaScript' 
    },
    { 
      Name: 'The Rise of AI in Coding', 
      NewsArticle: 'How Artificial Intelligence is changing the way we write code', 
      PublishDate: new Date(2026, 2, 15), 
      Description: 'AI-powered tools are revolutionizing software development, making code writing faster and smarter.',
      Ratings: [5, 5, 4, 3, 4],
      Views: 85, 
      Category: 'Artificial Intelligence' 
    },
  ];

  const [articles, setArticles] = useState<Article[]>(initialArticles);

  const incrementViewCount = (index: number) => {
    setArticles((prevArticles) => {
      const updatedArticles = [...prevArticles];
      updatedArticles[index].Views += 1;
      return updatedArticles;
    });
  };

  const calculateAverageRating = (ratings: number[]): number => {
    if (ratings.length === 0) return 0;
    const sum = ratings.reduce((acc, curr) => acc + curr, 0);
    return sum / ratings.length;
  };

  const updateRating = (index: number, rating: number) => {
    setArticles((prevArticles) => {
      const updatedArticles = [...prevArticles];
      updatedArticles[index].Ratings.push(rating);
      return updatedArticles;
    });
  };

  return (
    <ArticlesContext.Provider value={{ articles, incrementViewCount, calculateAverageRating, updateRating }}>
      {children}
    </ArticlesContext.Provider>
  );
};
