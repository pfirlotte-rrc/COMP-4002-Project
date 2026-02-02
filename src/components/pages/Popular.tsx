import { useState, useEffect } from 'react';
import { useArticlesContext } from '../common/hooks/useArticles';
import SearchBar from '../search-bar/searchBar';

function Popular() {
  const { articles, calculateAverageRating, updateRating, incrementViewCount } = useArticlesContext();
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
          filteredArticles.map((article) => (
            <div key={article.Name}>
              <h3 onClick={() => incrementViewCount(article.Name)}> {article.Name} </h3>
              <p>{article.Description}</p>
              <p>Category: {article.Category}</p>
              <p>Views: {article.Views}</p>
              <p>Rating: {calculateAverageRating(article.Ratings).toFixed(2)}</p>
              <div>
                <p>Rate:</p>
                <button onClick={() => updateRating(article.Name, 5)}>5</button>
                <button onClick={() => updateRating(article.Name, 4)}>4</button>
                <button onClick={() => updateRating(article.Name, 3)}>3</button>
                <button onClick={() => updateRating(article.Name, 2)}>2</button>
                <button onClick={() => updateRating(article.Name, 1)}>1</button>
                <button onClick={() => updateRating(article.Name, 0)}>0</button>
              </div>
            </div>
          ))
        )}
      </div>
    </main>
  );
}

export default Popular;
