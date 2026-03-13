import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useArticlesContext } from '../../hooks/useArticles';

function SearchResults() {
  const { articles, calculateAverageRating, incrementViewCount } = useArticlesContext();
  const [searchParams] = useSearchParams();
  const [filteredArticles, setFilteredArticles] = useState(articles);
  const query = searchParams.get('q') || '';

  useEffect(() => {
    let filtered = articles;
    const trimmedSearchValue = query.trim();
    if (trimmedSearchValue.length >= 3)
      filtered = articles.filter((article) =>
        article.Name.toLowerCase().includes(trimmedSearchValue.toLowerCase()) ||
        article.Category.toLowerCase().includes(trimmedSearchValue.toLowerCase())
      );
    
    const sorted = [...filtered].sort((a, b) => b.Views - a.Views);
    setFilteredArticles(sorted);
  }, [query, articles]);

  return (
    <main>
      <h1>Search Results for "{query}"</h1>
      <div>
        {filteredArticles.length === 0 ? (
          <p>No articles found for "{query}"</p>
        ) : (
          filteredArticles.map((article) => (
            <div key={article.Name}>
              <h3 onClick={() => incrementViewCount(article.Name)}>{article.Name}</h3>
              <p>{article.Description}</p>
              <p>Category: {article.Category}</p>
              <p>Views: {article.Views}</p>
              <p>Rating: {calculateAverageRating(article.Ratings).toFixed(2)}</p>
            </div>
          ))
        )}
      </div>
    </main>
  );
}

export default SearchResults;