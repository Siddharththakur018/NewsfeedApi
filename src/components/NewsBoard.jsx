import { useEffect, useState } from "react";
import NewsItems from "./NewsItems";

function NewsBoard({ category, searchQuery, author, sortOrder }) {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        let url;

        if (author) {
            url = `https://newsapi.org/v2/everything?q=${author}&sortBy=publishedAt&apiKey=${import.meta.env.VITE_API_KEY}`;
        } else if (searchQuery) {
            url = `https://newsapi.org/v2/everything?q=${searchQuery}&sortBy=publishedAt&apiKey=${import.meta.env.VITE_API_KEY}`;
        } else {
            url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&sortBy=publishedAt&apiKey=${import.meta.env.VITE_API_KEY}`;
        }

        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                let sortedArticles = data.articles;
                if (sortOrder === 'asc') {
                    sortedArticles = sortedArticles.sort((a, b) => new Date(a.publishedAt) - new Date(b.publishedAt));
                } else if (sortOrder === 'desc') {
                    sortedArticles = sortedArticles.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
                }
                setArticles(sortedArticles);
            })
            .catch((error) => console.error('Error fetching news:', error));
    }, [category, searchQuery, author, sortOrder]);

    return (
        <>
            <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
            {articles.map((news, index) => (
                <NewsItems key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
            ))}
        </>
    );
}

export default NewsBoard;
