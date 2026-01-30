import { useState } from "react"

// Interface that enforces data integrity for any Articles being listed on the site.
interface Article {
Name: string,
NewsArticle: string,
PublishDate: Date,
Description: string,
Rating: number,
Category: string
}

// Example data that will be used for demonstrating the Recent page functionality.
const listOfArticles: Article[] = [
  {Name: "TypeScript Date Tutorials", 
    NewsArticle: "https://pythonguides.com/typescript-date/", 
    PublishDate: new Date(2026, 0, 27), 
    Description: "This article is a comprehensive tutorial explaining how to create, format, and manipulate dates using TypeScript's native Date object. It covers practical topics like time zones, custom formatting, and performing common operations, and also suggests libraries like date-fns for complex tasks.", 
    Rating: 4, 
    Category: "Programming"},
  {Name: "I Switched From Windows 11 to Linux Mint. Here Are 7 Things It Does Way Better", 
    NewsArticle: "https://www.pcmag.com/opinions/i-switched-from-windows-11-to-linux-mint-7-things-it-does-way-better?test_uuid=04IpBmWGZleS0I0J3epvMrC&test_variant=B", 
    PublishDate: new Date(2026, 0, 28), 
    Description: "This article details a user's experience switching from Windows 11 to Linux Mint, highlighting seven key areas where Mint excels. It also frankly addresses the trade-offs, including a lack of mainstream software like Adobe Creative Cloud and Microsoft Office.", 
    Rating: 3, 
    Category: "Operating System"},
  {Name: "Nationwide is deepening its use of cloud services with AWS", 
    NewsArticle: "https://www.cloudcomputing-news.net/news/nationwide-is-deepening-its-use-of-cloud-services-with-aws/", 
    PublishDate: new Date(2026, 0, 24), 
    Description: "Nationwide Building Society, a large UK financial institution, is expanding its existing cloud partnership with AWS. This move is part of a gradual, long-term strategy to consolidate more of its operational workloads on AWS to achieve greater flexibility, resilience, and improved customer and employee experiences.", 
    Rating: 4.5, 
    Category: "Cloud Computing"}
];

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
                <div className="article-list">
                    {listOfArticles.map((article, index) => (
                        <div key={index} className="article-card" style={{ color: "black"}}>
                            <h2>
                                <a href={article.NewsArticle} target="_blank" rel="noopener noreferrer">
                                    {article.Name}
                                </a>
                            </h2>
                            <div className="article-meta" style={{color: "black"}} >
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
                    <div>
                        <label style={{color: "black"}}><strong>Article Title </strong></label><br />
                        <input type="text" name="title" required />
                    </div>
                    
                    <div>
                        <label style={{color: "black"}}><strong>Article URL </strong></label><br />
                        <input type="url" name="url" required />
                    </div>
                    
                    <div>
                        <label style={{color: "black"}}><strong>Category </strong></label><br />
                        <input type="text" name="category" required />
                    </div>
                    
                    <div>
                        <label style={{color: "black"}}><strong>Description </strong></label><br />
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