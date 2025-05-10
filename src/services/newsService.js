import db from "./firebase.js"; // Importa la configuración de Firebase
import { ref, get } from "firebase/database";

// Referencia al nodo "news" en Firebase Realtime Database
const newsRef = ref(db, "/news");

// Obtener todas las noticias
const getAllNews = () => {
    return get(newsRef)
        .then((snapshot) => {
            const newsData = [];
            snapshot.forEach((item) => {
                const data = item.val();
                if (data && data.title && data.snippet && data.link) {
                    newsData.push({
                        title: data.title,
                        snippet: data.snippet,
                        link: data.link,
                    });
                }
            });
            return newsData;
        })
        .catch((error) => {
            console.error("Error al obtener las noticias:", error);
            throw new Error("No se pudieron cargar las noticias");
        });
};

export default {
    getAllNews,
};
