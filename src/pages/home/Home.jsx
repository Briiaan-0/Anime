import { useState, useEffect } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import popularService from "../../services/popularService";
import "./Home.css";

function Home() {
    const [popularAnimes, setPopularAnimes] = useState([]);
    const [expanded, setExpanded] = useState({});

    // Función para obtener los animes populares
    const fetchPopularAnimes = () => {
        popularService.getAllAnimes()
            .then((snapshot) => {
                let allAnimes = [];
                // Verificamos si hay datos
                if (snapshot.exists()) {
                    console.log("Datos obtenidos:", snapshot.val()); // Verifica los datos
                    snapshot.forEach((item) => {
                        const key = item.key;
                        const data = item.val();
                        if (data && data.title && data.synopsis) {
                            allAnimes.push({
                                key: key,
                                title: data.title,
                                genre: data.genre || "Unknown genre",
                                image_url: data.image_url || "",
                                synopsis: data.synopsis
                            });
                        }
                    });
                    setPopularAnimes(allAnimes);
                } else {
                    console.log("No se encontraron datos.");
                }
            })
            .catch((error) => {
                console.error("Error obteniendo los animes:", error);
            });
    };

    // Usamos useEffect para llamar la función al cargar el componente
    useEffect(() => {
        fetchPopularAnimes();
    }, []);

    // Función para alternar la visualización del resumen del anime
    const toggleSynopsis = (key) => {
        setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <>
            <Header />
            <div className="home-container">
                <section className="welcome-section">
                    <h1>Welcome to the Anime World</h1>
                    <p>Discover your favorite anime series and movies.</p>
                    <p>Find new recommendations, stay updated with the latest news, and join the anime community.</p>
                </section>

                <section className="explore-animes">
                    <h2>Popular Animes</h2>
                    <div className="anime-list">
                        {popularAnimes.length > 0 ? (
                            popularAnimes.map((anime) => (
                                <div className="anime-item" key={anime.key}>
                                    {anime.image_url && (
                                        <img src={anime.image_url} alt={anime.title} />
                                    )}
                                    <div className="anime-info">
                                        <h3>{anime.title}</h3>
                                        <p className="genre">{anime.genre}</p>
                                        <p className="synopsis">
                                            {expanded[anime.key]
                                                ? anime.synopsis
                                                : anime.synopsis.slice(0, 200) + (anime.synopsis.length > 200 ? "..." : "")
                                            }
                                        </p>
                                        {anime.synopsis.length > 200 && (
                                            <button
                                                className="read-more-btn"
                                                onClick={() => toggleSynopsis(anime.key)}
                                            >
                                                {expanded[anime.key] ? "Leer menos" : "Leer más"}
                                            </button>
                                        )}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>Loading popular animes...</p>
                        )}
                    </div>
                </section>

                <section className="latest-news">
                    <h2>Latest Anime News</h2>
                    <div className="news-item">
                        <h3>New Anime Release: [Anime Name]</h3>
                        <p>Short snippet about the latest anime release...</p>
                        <a href="/news">Read More</a>
                    </div>
                </section>

                <section className="explore-more">
                    <h2>Explore More</h2>
                    <p>Explore more animes and stay updated with the latest news.</p>
                    <button onClick={() => window.location.href = "/animelist"}>Explore Animes</button>
                    <button onClick={() => window.location.href = "/news"}>Latest News</button>
                </section>
            </div>
            <Footer />
        </>
    );
}

export default Home;
