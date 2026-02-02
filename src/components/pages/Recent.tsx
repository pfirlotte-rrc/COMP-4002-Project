import { useState } from "react"
import { useArticlesContext } from '../common/hooks/useArticles';
import type { Article } from "./ArticleData";


function Recent() {
    const { articles, calculateAverageRating, incrementViewCount, addArticle } = useArticlesContext();
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
            <main>
                <h1 style={{ color: "black"}}>Recently Uploaded Articles</h1>
                <div className="article-list" style={{ color: "black"}}>
                    {articles.map((article) => (
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
                        </div>
                    ))}
                </div>
                
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