import { useState, useEffect } from 'react';
import { useArticlesContext } from '../common/hooks/useArticles';
import { useSearch } from '../common/hooks/useSearch';
import SearchBar from '../search-bar/searchBar';

function Popular() {
  const { articles, calculateAverageRating, updateRating, incrementViewCount } =
    useArticlesContext();

  const { searchTerm, searchMessages, handleSearchChange } = useSearch();

  const [filteredArticles, setFilteredArticles] = useState(articles);

  useEffect(() => {
    let filtered = articles;
    const trimmedSearchValue = searchTerm.trim();

    if (trimmedSearchValue.length >= 3)
      filtered = articles.filter(
        (article) =>
          article.Name.toLowerCase().includes(trimmedSearchValue.toLowerCase()) ||
          article.Category.toLowerCase().includes(trimmedSearchValue.toLowerCase())
      );

    const sorted = [...filtered].sort((a, b) => b.Views - a.Views);
    setFilteredArticles(sorted);
  }, [searchTerm, articles]);

  return (
    <main>
      <h1>Popular Articles</h1>

      <SearchBar
        name={searchTerm}
        onChange={handleSearchChange}
        messages={searchMessages}
      />

      <div>
        {filteredArticles.length === 0 ? (
          <p>No articles found for the search term "{searchTerm}"</p>
        ) : (
          filteredArticles.map((article) => (
            <div key={article.Name}>
              <h2 onClick={() => incrementViewCount(article.Name)}>
                {article.Name}
              </h2>
              <p>{article.Description}</p>
              <p>Category: {article.Category}</p>
              <p>Views: {article.Views}</p>
              <p>
                Rating: {calculateAverageRating(article.Ratings).toFixed(2)}
              </p>
              <div>
                <p>Rate:</p>
                <button onClick={() => updateRating(article.Name, 5)}>5</button>
                <button onClick={() => updateRating(article.Name, 4)}>4</button>
                <button onClick={() => updateRating(article.Name, 3)}>3</button>
                <button onClick={() => updateRating(article.Name, 2)}>2</button>
                <button onClick={() => updateRating(article.Name, 1)}>1</button>
                <button onClick={() => updateRating(article.Name, 0)}>0</button>
              </div>
              <div style={{ height: '100px' }}></div>
            </div>
          ))
        )}
      </div>
    </main>
  );
}

export default Popular;