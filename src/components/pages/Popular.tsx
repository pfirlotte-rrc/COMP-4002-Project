import { useState, useEffect } from 'react';
import { useArticlesContext } from '../common/hooks/useArticles';
import { useSearch } from '../common/hooks/useSearch';
import SearchBar from '../search-bar/searchBar';

function Popular() {
  const { articles, calculateAverageRating, updateRating, incrementViewCount, hasUserRated } =
    useArticlesContext();

  const currentUserId = "user-123";

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

      <SearchBar name={searchTerm} onChange={handleSearchChange} messages={searchMessages} />

      <div>
        {filteredArticles.length === 0 ? (
          <p>No articles found for "{searchTerm}"</p>
        ) : (
          filteredArticles.map(article => {
            const rated = hasUserRated(article.Name, currentUserId);

            return (
              <div key={article.Name} style={{ marginBottom: "40px" }}>
                <h2 onClick={() => incrementViewCount(article.Name)}>{article.Name}</h2>
                <p>{article.Description}</p>
                <p>Category: {article.Category}</p>
                <p>Views: {article.Views}</p>
                <p>Rating: {calculateAverageRating(article.Ratings).toFixed(2)}</p>

                <div>
                  <p>Rate:</p>
                  {[5, 4, 3, 2, 1, 0].map(v => (
                    <button
                      key={v}
                      disabled={rated}
                      onClick={() => updateRating(article.Name, currentUserId, v)}
                    >
                      {v}
                    </button>
                  ))}
                  {rated && <p style={{ color: "gray" }}>You already rated this article</p>}
                </div>
              </div>
            );
          })
        )}
      </div>
    </main>
  );
}

export default Popular;