import { useState, useEffect, useRef } from "react";
import { FaRegTrashAlt, FaStar, FaRegStar } from "react-icons/fa";
import animeService from "../../services/animeService";
import "./Animelist.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

function AnimeList() {
    const [animes, setAnimes] = useState([]);
    const [ratings, setRatings] = useState({});  // Para manejar las puntuaciones
    const refForm = useRef();

    const getAllAnimes = () => {
        animeService.getAllAnimes()
            .then((snapshot) => {
                let allAnimes = [];
                snapshot.forEach((item) => {
                    const key = item.key;
                    const data = item.val();
                    allAnimes.push({
                        key: key,
                        title: data.title,
                        genre: data.genre,
                        rating: data.rating || 0,  // Agregar la puntuación que viene de Firebase
                    });
                });
                setAnimes(allAnimes);
            })
            .catch((err) => {
                console.error("Error getting animes:", err);
            });
    };

    const removeAnime = (key) => {
        animeService.removeAnime(key).then(() => {
            getAllAnimes();
        });
    };

    const addAnime = (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const genre = e.target.genre.value;
        animeService.addAnime(title, genre).then((res) => {
            refForm.current.reset();
            setAnimes((prev) => [...prev, { key: res.key, title, genre, rating: 0 }]);  // Inicializamos la puntuación en 0
        });
    };

    // Actualizar la puntuación del anime
    const handleRating = (animeKey, rating) => {
        setRatings(prevRatings => ({
            ...prevRatings,
            [animeKey]: rating
        }));
        animeService.updateRating(animeKey, rating);
    };

    // Renderizar las estrellas
    const renderStars = (animeKey, currentRating) => {
        const totalStars = 5;
        const stars = [];
        for (let i = 1; i <= totalStars; i++) {
            stars.push(
                i <= currentRating
                    ? <FaStar key={i} onClick={() => handleRating(animeKey, i)} />
                    : <FaRegStar key={i} onClick={() => handleRating(animeKey, i)} />
            );
        }
        return stars;
    };

    useEffect(() => {
        getAllAnimes();
    }, []);

    return (
        <>
            <Header />
            <section className="anime-list-section">
                <div className="anime-list-main-container">
                    <div className="anime-form-container">
                        <form id="anime-form" onSubmit={addAnime} ref={refForm}>
                            <input className="rounded-input" type="text" name="title" placeholder="Title" required />
                            <input className="rounded-input" type="text" name="genre" placeholder="Genre" required />
                            <input className="rounded-input" type="submit" value="Add Anime" />
                        </form>
                    </div>

                    <div className="anime-list">
                        {animes.map((a) => (
                            <div className="anime-item" key={a.key}>
                                <p>{a.title} - {a.genre}</p>

                                {/* Mostrar las estrellas */}
                                <div className="stars">
                                    {renderStars(a.key, ratings[a.key] || a.rating)}  {/* Si hay puntuación en estado, se usa esa */}
                                </div>

                                <FaRegTrashAlt className="delete-anime" onClick={() => removeAnime(a.key)} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default AnimeList;
