import { useState, useEffect } from "react";
import { useArticlesContext } from "../../hooks/useArticles";
import { useSearch } from "../../hooks/useSearch";
import SearchBar from "../search-bar/searchBar";

function Popular() {
  const {
    articles,
    calculateAverageRating,
    updateRating,
    incrementViewCount,
    loading,
  } = useArticlesContext();

  const currentUserId = 1;

  const { searchTerm, searchMessages, handleSearchChange } = useSearch();

  const [filteredArticles, setFilteredArticles] = useState<any[]>([]);

  useEffect(() => {
    let filtered = articles;
    const trimmed = searchTerm.trim().toLowerCase();

    if (trimmed.length >= 3) {
      filtered = articles.filter(
        (article: any) =>
          article.name.toLowerCase().includes(trimmed) ||
          article.categories?.some((c: any) =>
            c.categoryName.toLowerCase().includes(trimmed)
          )
      );
    }

    const sorted = [...filtered].sort(
      (a: any, b: any) => (b.views || 0) - (a.views || 0)
    );

    setFilteredArticles(sorted);
  }, [searchTerm, articles]);

  const hasUserRated = (article: any) =>
    article.ratings?.some((r: any) => r.userId === currentUserId);

  if (loading) return <p>Loading articles...</p>;

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
          <p>No articles found for "{searchTerm}"</p>
        ) : (
          filteredArticles.map((article: any) => {
            const rated = hasUserRated(article);

            return (
              <div key={article.id} style={{ marginBottom: "40px" }}>
                <h2 onClick={() => incrementViewCount(article.id)}>
                  {article.name}
                </h2>

                <p>{article.description}</p>

                <p>
                  Categories:{" "}
                  {article.categories
                    ?.map((c: any) => c.categoryName)
                    .join(", ")}
                </p>

                <p>Views: {article.views}</p>

                <p>
                  Rating:{" "}
                  {calculateAverageRating(article.ratings || []).toFixed(2)}
                </p>

                <div>
                  <p>Rate:</p>
                  {[5, 4, 3, 2, 1].map((v) => (
                    <button
                      key={v}
                      disabled={rated}
                      onClick={() =>
                        updateRating(article.id, currentUserId, v)
                      }
                    >
                      {v}
                    </button>
                  ))}

                  {rated && (
                    <p style={{ color: "red" }}>
                      You already rated this article
                    </p>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>
      <div style={{ height: '100px' }}></div>
    </main>
  );
}

export default Popular;