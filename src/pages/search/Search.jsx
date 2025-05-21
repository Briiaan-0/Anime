import { useState } from "react";
import "./Search.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const animeData = [
    { id: 1, title: "Naruto", genre: "Acción", year: 2002 },
    { id: 2, title: "Your Name", genre: "Romance", year: 2016 },
    { id: 3, title: "Attack on Titan", genre: "Acción", year: 2013 },
    { id: 4, title: "Violet Evergarden", genre: "Drama", year: 2018 },
    { id: 5, title: "One Piece", genre: "Aventura", year: 1999 },
    { id: 6, title: "Jojo's Bizarre Adventure", genre: "Aventura", year: 2012 },
    { id: 7, title: "Cyberpunk Edge Runners", genre: "Ciberpunk", year: 2022 },
];

function Search() {
    const [searchTerm, setSearchTerm] = useState("");
    const [category, setCategory] = useState("title");

    const filteredData = animeData.filter((anime) => {
        return anime[category]
            .toString()
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
    });

    return (
        <>
            <Header />
            <div className="search-container">
                <h2>Search Anime</h2>
                <div className="search-controls">
                    <input
                        type="text"
                        placeholder="Buscar..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <select value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="title">Título</option>
                        <option value="genre">Género</option>
                        <option value="year">Año</option>
                    </select>
                </div>

                <div className="results">
                    {filteredData.length > 0 ? (
                        filteredData.map((anime) => (
                            <div key={anime.id} className="anime-card">
                                <h3>{anime.title}</h3>
                                <p><strong>Género:</strong> {anime.genre}</p>
                                <p><strong>Año:</strong> {anime.year}</p>
                            </div>
                        ))
                    ) : (
                        <p>No se encontraron resultados.</p>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Search;
