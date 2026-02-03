import { useState } from "react"
import { useArticlesContext } from '../common/hooks/useArticles';
import type { Article } from "./ArticleData";


function Recent() {
    const { articles, hiddenArticles, calculateAverageRating, incrementViewCount, addArticle, hideArticle, showArticle } = useArticlesContext();
    const [showHidden, setShowHidden] = useState(false);
    const visibleArticles = articles.filter(article => !hiddenArticles.includes(article.Name));
    const hiddenArticlesList = articles.filter(article => hiddenArticles.includes(article.Name));

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
            Name: formData.title,
            NewsArticle: formData.url,
            PublishDate: new Date(),
            Description: formData.description,
            Ratings: [],
            Category: formData.category,
            Views: 0
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
                        <div key={article.Name}>
                            <h2>
                                <a href={article.NewsArticle} target="_blank" rel="noopener noreferrer" onClick={() => incrementViewCount(article.Name)}>
                                    {article.Name}
                                </a>
                            </h2>
                            <div className="article-meta">
                                <p><strong>Published:</strong> {article.PublishDate.toLocaleDateString()}</p>
                                <p><strong>Category:</strong> {article.Category}</p>
                                <p><strong>Views:</strong> {article.Views}</p>
                                <p><strong>Rating:</strong> {calculateAverageRating(article.Ratings).toFixed(2)}</p>
                            </div>
                            
                            <p className="article-description">{article.Description}</p>
                            <button onClick={() => hideArticle(article.Name)}>
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
                                    <div key={article.Name}>
                                        <h2>
                                            <a href={article.NewsArticle} target="_blank" rel="noopener noreferrer" onClick={() => incrementViewCount(article.Name)}>
                                                {article.Name}
                                            </a>
                                        </h2>
                                        <div className="hidden-article-meta">
                                            <p><strong>Published:</strong> {article.PublishDate.toLocaleDateString()}</p>
                                            <p><strong>Category:</strong> {article.Category}</p>
                                            <p><strong>Views:</strong> {article.Views}</p>
                                            <p><strong>Rating:</strong> {calculateAverageRating(article.Ratings).toFixed(2)}</p>
                                        </div>
                                        <p className="hidden-article-description">{article.Description}</p>
                                        <button onClick={() => showArticle(article.Name)}>
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