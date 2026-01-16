import type { JSX } from "react";

type Article = {
    id: number;
    title: string;
    rating: number;
};

const testArticles: Article[] = [
    {id: 0, title: "Article 1", rating: 3}, 
    {id: 1, title: "Article 2", rating: 4}, 
    {id: 2, title: "Article 3", rating: 5}, 
    {id: 3, title: "Article 4", rating: 2}, 
    {id: 4, title: "Article 5", rating: 1}
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
    { title, rating }: { title: string; rating: number }
) {
    return (
        <li className="article-item">
            <a href="#">{title}</a>
            <span className="article-item-rating"> ⭐ {rating} </span>
        </li>
    );
}

export default Landing;