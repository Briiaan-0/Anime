import { useState, useEffect } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import newsService from "../../services/newsService.js";
import "./News.css";

function News() {
    const [newsArticles, setNewsArticles] = useState([]);

    const fetchNews = () => {
        newsService.getAllNews()
            .then((data) => {
                setNewsArticles(data);
            })
            .catch((error) => {
                console.error("Error obteniendo las noticias:", error);
            });
    };

    useEffect(() => {
        fetchNews();
    }, []);

    return (
        <>
            <Header />
            <div className="news-container">
                <section className="latest-news">
                    <h1>Latest Anime News</h1>
                    <div className="news-list">
                        {newsArticles.length > 0 ? (
                            newsArticles.map((article, index) => (
                                <div className="news-item" key={index}>
                                    <h3>{article.title}</h3>
                                    <p>{article.snippet}</p>
                                    <a href={article.link}>Read More</a>
                                </div>
                            ))
                        ) : (
                            <p>Loading the latest news...</p>
                        )}
                    </div>
                </section>

                {/* Agregado para simular más contenido */}
                <div style={{ minHeight: "300px" }}></div>

            </div>
            <Footer />
        </>
    );
}

export default News;
