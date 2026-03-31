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
        article.name.toLowerCase().includes(trimmedSearchValue.toLowerCase()) ||
        article.categories?.some((c: any) => 
          c.categoryName.toLowerCase().includes(trimmedSearchValue.toLowerCase())
        )
      );
    
    const sorted = [...filtered].sort((a, b) => b.views - a.views);
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
            <div key={article.name}>
              <h3 onClick={() => incrementViewCount(article.id)}>{article.name}</h3>
              <p>{article.description}</p>
              <p>Category: {article.categories?.map((c: any) => c.categoryName).join(", ")}</p>
              <p>Views: {article.views}</p>
              <p>Rating: {calculateAverageRating(article.ratings).toFixed(2)}</p>
            </div>
          ))
        )}
      </div>
    </main>
  );
}

export default SearchResults;