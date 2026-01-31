import { useState, useEffect } from 'react';
import SearchBar  from '../search-bar/searchBar'; 

interface Article {
  Name: string;
  NewsArticle: string;
  PublishDate: Date;
  Description: string;
  Rating: number;
  Views: number;
  Category: string;
}

function Popular() {
  const allArticles: Article[] = [
    { 
        Name: 'JavaScript ES2026', 
        NewsArticle: 'The new features coming to JavaScript in 2026', 
        PublishDate: new Date(2026, 1, 10), 
        Description: 'The latest updates and features to look forward to in JavaScript ES2026.', 
        Rating: 4.9,
        Views: 10, 
        Category: 'JavaScript' 
    },
    { 
        Name: 'The Rise of AI in Coding', 
        NewsArticle: 'How Artificial Intelligence is changing the way we write code', 
        PublishDate: new Date(2026, 2, 15), 
        Description: 'AI-powered tools are revolutionizing software development, making code writing faster and smarter.', 
        Rating: 4.7,
        Views: 4, 
        Category: 'Artificial Intelligence' 
    },
    { 
        Name: 'Next-Gen Web Frameworks', 
        NewsArticle: 'Exploring the most popular frameworks for web development in 2026', 
        PublishDate: new Date(2026, 1, 30), 
        Description: 'Which web frameworks will dominate the industry in the next few years? React, Vue, and more.', 
        Rating: 4.5,
        Views: 12, 
        Category: 'Web Development' 
    },
    { 
        Name: 'Serverless Computing', 
        NewsArticle: 'How Serverless is changing the cloud computing landscape', 
        PublishDate: new Date(2026, 1, 12), 
        Description: 'Understanding serverless architecture and how it’s becoming a game-changer for scalable applications.', 
        Rating: 5.0,
        Views: 100, 
        Category: 'Cloud Computing' 
    },
    { 
        Name: 'Rust: The Future of Systems Programming', 
        NewsArticle: 'Why Rust is becoming the preferred language for high-performance systems development', 
        PublishDate: new Date(2026, 2, 1), 
        Description: 'Rust is taking over C and C++ for systems programming, offering memory safety without sacrificing performance.', 
        Rating: 4.8,
        Views: 101, 
        Category: 'Programming Languages' 
    },
    { 
        Name: 'Quantum Computing: The Next Frontier', 
        NewsArticle: 'What developers need to know about Quantum Computing in 2026', 
        PublishDate: new Date(2026, 1, 20), 
        Description: 'An introduction to quantum computing and how it’s poised to revolutionize the world of software development.', 
        Rating: 4.3,
        Views: 50, 
        Category: 'Quantum Computing' 
    }
    ];

    const [searchTerm, setSearchTerm] = useState<string>('');
    const [filteredArticles, setFilteredArticles] = useState<Article[]>(allArticles);

    useEffect(() => {
    const filtered = allArticles.filter((article) =>
      article.Category.toLowerCase().includes(searchTerm.toLowerCase())
    ).sort((a, b) => b.Views - a.Views); 
    
    setFilteredArticles(filtered); 
  }, [searchTerm]);

    return (
        <main>
        <h1>Popular Articles</h1>
        
        <SearchBar
        name={searchTerm} 
        setName={setSearchTerm} 
        />

            <div>
                {filteredArticles.length === 0 ? (
                <p>No articles found for the category "{searchTerm}"</p>
                ) : (
                filteredArticles.map((article) => (
                    <div key={article.Name}>
                        <h3>{article.Name}</h3>
                        <p>{article.Description}</p>
                        <p>Category: {article.Category}</p>
                        <p>Rating: {article.Rating}</p>
                        <p>Views: {article.Views}</p>
                    </div>
                ))
                )}
            </div>
        </main>
    );
    }

export default Popular;