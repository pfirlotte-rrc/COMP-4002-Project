import type { JSX } from "react";

interface Article{
    id: number;
    title: string;
    rating: number;
    articleLink: string;
};

const testArticles: Article[] = [
    {id: 0, title: "Article 1", rating: 3, articleLink: "Test.ca"}, 
    {id: 1, title: "Article 2", rating: 4, articleLink: "Test.ca"}, 
    {id: 2, title: "Article 3", rating: 5, articleLink: "Test.ca"}, 
    {id: 3, title: "Article 4", rating: 2, articleLink: "Test.ca"}, 
    {id: 4, title: "Article 5", rating: 1, articleLink: "Test.ca"}
];

function Landing() {
    return (
        <>
            <section>
                <ArticleListDisplay articles={testArticles}/>
            </section>
        </>
    );
}

function ArticleListDisplay({ articles }: { articles: Article[] }) {
    const articleListItems: JSX.Element[] = [];

    articles.forEach((article) => {
        articleListItems.push(
            <ArticleListItem
                key={article.id}
                title={article.title}
                rating={article.rating}
                articleLink={article.articleLink}
            />
        );
    });

    return (
        <section className="top-articles">
            <h2>Top Rated Articles</h2>
            <ol className="top-articles-list">
                {articleListItems}
            </ol>
        </section>
    );
}

function ArticleListItem(
    { title, rating, articleLink }: { title: string; rating: number; articleLink: string }
) {
    return (
        <li className="article-item">
            <a href="#">{title}</a>
            <a href="#">{articleLink}</a>
            <span className="article-item-rating"> ⭐ {rating} </span>
        </li>
    );
}

export default Landing;