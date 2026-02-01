import { useState, useEffect } from 'react';
import { useArticlesContext } from '../common/hooks/useArticles';
import SearchBar from '../search-bar/searchBar';

function Popular() {
  const { articles, calculateAverageRating, updateRating } = useArticlesContext();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredArticles, setFilteredArticles] = useState(articles);

  useEffect(() => {
    const filtered = articles.filter((article) =>
      article.Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.Category.toLowerCase().includes(searchTerm.toLowerCase())
    ).sort((a, b) => b.Views - a.Views);

    setFilteredArticles(filtered);
  }, [searchTerm, articles]);

  return (
    <main>
      <h1>Popular Articles</h1>

      <SearchBar name={searchTerm} setName={setSearchTerm} />

      <div>
        {filteredArticles.length === 0 ? (
          <p>No articles found for the search term "{searchTerm}"</p>
        ) : (
          filteredArticles.map((article, index) => (
            <div key={article.Name}>
              <h3>{article.Name} </h3>
              <p>{article.Description}</p>
              <p>Category: {article.Category}</p>
              <p>Views: {article.Views}</p>
              <p>Rating: {calculateAverageRating(article.Ratings).toFixed(2)}</p>
              <div>
                <p>Rate:</p>
                <button onClick={() => updateRating(index, 5)}>5</button>
                <button onClick={() => updateRating(index, 4)}>4</button>
                <button onClick={() => updateRating(index, 3)}>3</button>
                <button onClick={() => updateRating(index, 2)}>2</button>
                <button onClick={() => updateRating(index, 1)}>1</button>
                <button onClick={() => updateRating(index, 0)}>0</button>
              </div>
            </div>
          ))
        )}
      </div>
    </main>
  );
}

export default Popular;
