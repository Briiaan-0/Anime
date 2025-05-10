import db from "./Firebase"; // Asegúrate de que esta importación sea correcta
import { ref, get, remove, push, update } from "firebase/database";

// Referencia a la base de datos de Firebase en el nodo 'animes'
const dbRef = ref(db, "/animes");

// Obtener todos los animes
const getAllAnimes = () => {
  return get(dbRef);
};

// Agregar un nuevo anime
const addAnime = (title, genre) => {
  return push(dbRef, {
    title: title,
    genre: genre,
    rating: 0,  // Inicializamos la puntuación en 0
  });
};

// Eliminar un anime por su clave (ID)
const removeAnime = (key) => {
  const dbRefAnime = ref(db, `/animes/${key}`);
  return remove(dbRefAnime);
};

// Actualizar un anime
const updateAnime = (key, updatedData) => {
  const dbRefAnime = ref(db, `/animes/${key}`);
  return update(dbRefAnime, updatedData);
};

// Actualizar la puntuación de un anime
const updateRating = (key, rating) => {
  const dbRefAnime = ref(db, `/animes/${key}`);
  return update(dbRefAnime, { rating });
};

export default {
  getAllAnimes,
  addAnime,
  removeAnime,
  updateAnime,
  updateRating,  // Exportar la función de actualización de puntuación
};
