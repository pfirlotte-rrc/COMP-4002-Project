import { createContext, useContext, useState } from 'react';
import type {ReactNode} from 'react';

// Define the structure of the Article
export interface Article {
  Name: string;
  NewsArticle: string;
  PublishDate: Date;
  Description: string;
  Ratings: number[];
  Views: number;
  Category: string;
}

// Create a context for Articles
interface ArticlesContextType {
  articles: Article[];
  incrementViewCount: (index: number) => void;
  calculateAverageRating: (ratings: number[]) => number;
  updateRating: (index: number, rating: number) => void;
}

const ArticlesContext = createContext<ArticlesContextType | undefined>(undefined);

// Create a custom hook to use the Articles context
export const useArticlesContext = () => {
  const context = useContext(ArticlesContext);
  if (!context) {
    throw new Error('useArticlesContext must be used within an ArticlesProvider');
  }
  return context;
};

// Provider component to wrap the app and provide access to the articles
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
    // Add all your articles here
  ];

  const [articles, setArticles] = useState<Article[]>(initialArticles);

  // Increment the view count for an article
  const incrementViewCount = (index: number) => {
    setArticles((prevArticles) => {
      const updatedArticles = [...prevArticles];
      updatedArticles[index].Views += 1;
      return updatedArticles;
    });
  };

  // Calculate average rating
  const calculateAverageRating = (ratings: number[]): number => {
    if (ratings.length === 0) return 0;
    const sum = ratings.reduce((acc, curr) => acc + curr, 0);
    return sum / ratings.length;
  };

  // Update the rating of an article
  const updateRating = (index: number, rating: number) => {
    setArticles((prevArticles) => {
      const updatedArticles = [...prevArticles];
      updatedArticles[index].Ratings.push(rating); // Add the new rating to the list
      return updatedArticles;
    });
  };

  return (
    <ArticlesContext.Provider value={{ articles, incrementViewCount, calculateAverageRating, updateRating }}>
      {children}
    </ArticlesContext.Provider>
  );
};
