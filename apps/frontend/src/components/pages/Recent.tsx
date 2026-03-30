import { useState } from "react"
import { useArticlesContext } from '../../hooks/useArticles';
import type { Article } from "../../apis/prismaArticle";

/**
 * Recent Refactor to fit new Hook-Service-Repository Architecture
 * 
 * This component demonstrates the use of the hook-service-repository 
 * full layered architecture by:
 * - Utilizing the useArticlesContext hook to access global state and 
 *   actions.
 * - The hide and showArticle functions receives the article name, then
 *   is passed to the HiddenArticlesService which handles business logic.
 * - The service in turn calls the HiddenArticlesRepositoryto handle the 
 *   data which is stored in an Array of article objects that was 
 *   imported.
 * 
 * This helps to explain how the refactoring of the hide/show functions
 * uses the new architecture and helps to create a solid foundation for
 * the website to operate.
 */

function Recent() {
    const { articles, hiddenArticles, calculateAverageRating, incrementViewCount, addArticle, hideArticle, showArticle } = useArticlesContext();
    const [showHidden, setShowHidden] = useState(false);
    const visibleArticles = articles.filter(article => !hiddenArticles.includes(article.name));
    const hiddenArticlesList = articles.filter(article => hiddenArticles.includes(article.name));

    const [formData, setFormData] = useState({
        title: "",
        url: "",
        category: "",
        description: ""
    });

    const handleChange = (formValue: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = formValue.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        const newArticle: Article = {
            id: 0,
            name: formData.title,
            newsArticle: formData.url,
            publishDate: new Date(),
            description: formData.description,
            ratings: [],
            categories: [{ categoryName: formData.category }],
            views: 0
        };

        addArticle(newArticle);

        alert('Thank you! Your article has been submitted and added to the list.');
        
        setFormData({
            title: "",
            url: "",
            category: "",
            description: ""
        });
    };

    return (
        <>
            {/* Main Article Area */}
            <main>
                <h1 style={{ color: "black"}}>Recently Uploaded Articles</h1>
                <div className="article-list" style={{ color: "black" }}>
                    {visibleArticles.map((article) => (
                        <div key={article.name}>
                            <h2>
                                <a href={article.newsArticle} target="_blank" rel="noopener noreferrer" onClick={() => incrementViewCount(article.id)}>
                                    {article.name}
                                </a>
                            </h2>
                            <div className="article-meta">
                                <p><strong>Published:</strong> {new Date(article.publishDate).toLocaleDateString()}</p>
                                <p><strong>Category:</strong> {article.categories?.[0]?.categoryName || "Uncategorized"}</p>
                                <p><strong>Views:</strong> {article.views}</p>
                                <p><strong>Rating:</strong> {calculateAverageRating(article.ratings).toFixed(2)}</p>
                            </div>
                            
                            <p className="article-description">{article.description}</p>
                            <button onClick={() => hideArticle(article.name)}>
                                Hide Article
                            </button>
                        </div>
                    ))}
                </div>

                {/* Hidden Article Area */}
                {hiddenArticlesList.length > 0 && (
                    <div style={{ color: "black" }}>
                        <h2>
                            Hidden Articles ({hiddenArticlesList.length})
                        </h2>
                        <button onClick={() => setShowHidden(!showHidden)}>
                            {showHidden ? 'Hide' : 'Show'}
                        </button>
                        {showHidden && (
                            <div className="hidden-article-list" style={{ color: "black" }}>
                                {hiddenArticlesList.map((article) => (
                                    <div key={article.name}>
                                        <h2>
                                            <a href={article.newsArticle} target="_blank" rel="noopener noreferrer" onClick={() => incrementViewCount(article.id)}>
                                                {article.name}
                                            </a>
                                        </h2>
                                        <div className="hidden-article-meta">
                                            <p><strong>Published:</strong> {new Date(article.publishDate).toLocaleDateString()}</p>
                                            <p><strong>Category:</strong> {article.categories?.[0]?.categoryName || "Uncategorized"}</p>
                                            <p><strong>Views:</strong> {article.views}</p>
                                            <p><strong>Rating:</strong> {calculateAverageRating(article.ratings).toFixed(2)}</p>
                                        </div>
                                        <p className="hidden-article-description">{article.description}</p>
                                        <button onClick={() => showArticle(article.name)}>
                                            Show Article
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}

                {/* HTML Submit Form Area */}
                <h1 style={{ color: "black"}}>Submit Article</h1>
                <form onSubmit={handleSubmit}>
                    <div style={{ color: "black"}}>
                        <label><strong>Article Title </strong></label><br />
                        <input type="text" name="title" value={formData.title} onChange={handleChange} required />
                    </div>
                    
                    <div style={{ color: "black"}}>
                        <label><strong>Article URL </strong></label><br />
                        <input type="url" name="url" value={formData.url} onChange={handleChange} required />
                    </div>
                    
                    <div style={{ color: "black"}}>
                        <label><strong>Category </strong></label><br />
                        <input type="text" name="category" value={formData.category} onChange={handleChange} required />
                    </div>
                    
                    <div style={{ color: "black"}}>
                        <label><strong>Description </strong></label><br />
                        <textarea name="description" value={formData.description} onChange={handleChange} required rows={4}></textarea>
                    </div>
                    
                    <button type="submit">Submit Article</button>
                    <div style={{ height: '100px' }}></div>
                </form>
            </main>
        </>
    );
}

export default Recent;