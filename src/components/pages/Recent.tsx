import { useState } from "react"
import { listOfArticles } from "./ArticleData"

function Recent() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert('Thank you! Your article has been submitted for review.');
    event.currentTarget.reset();
    };
    return (
        <>
            <section>
                <h1 style={{ color: "black"}}>Recently Uploaded Articles</h1>
                <div className="article-list" style={{ color: "black"}}>
                    {listOfArticles.map((article, index) => (
                        <div key={index} className="article-card">
                            <h2>
                                <a href={article.NewsArticle} target="_blank" rel="noopener noreferrer">
                                    {article.Name}
                                </a>
                            </h2>
                            <div className="article-meta">
                                <p><strong>Published:</strong> {article.PublishDate.toLocaleDateString()}</p>
                                <p><strong>Category:</strong> {article.Category}</p>
                                <p><strong>Rating:</strong> {article.Rating}/5</p>
                            </div>
                            
                            <p className="article-description">{article.Description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <h1 style={{ color: "black"}}>Submit Article</h1>
                <form onSubmit={handleSubmit}>
                    <div style={{ color: "black"}}>
                        <label><strong>Article Title </strong></label><br />
                        <input type="text" name="title" required />
                    </div>
                    
                    <div style={{ color: "black"}}>
                        <label><strong>Article URL </strong></label><br />
                        <input type="url" name="url" required />
                    </div>
                    
                    <div style={{ color: "black"}}>
                        <label><strong>Category </strong></label><br />
                        <input type="text" name="category" required />
                    </div>
                    
                    <div style={{ color: "black"}}>
                        <label><strong>Description </strong></label><br />
                        <textarea name="description" required rows={4}></textarea>
                    </div>
                    
                    <button type="submit">Submit Article</button>
                    <div style={{ height: '100px' }}></div>
                </form>
            </section>
        </>
    );
}

export default Recent;