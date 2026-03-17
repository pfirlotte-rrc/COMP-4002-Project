import { useContext } from 'react';
import { ArticlesContext } from '../components/common/context/ArticlesContext';  

export const useArticlesContext = () => {
  const context = useContext(ArticlesContext);
  if (!context) {
    throw new Error('useArticlesContext must be used within an ArticlesProvider');
  }
  return context;
};
