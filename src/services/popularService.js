import db from "./firebase.js"; // Asegúrate de que esta importación sea correcta
import { ref, get } from "firebase/database";

// Referencia a la base de datos de Firebase en el nodo 'animes'
const dbRef = ref(db, "/popus");

// Obtener todos los animes
const getAllAnimes = () => {
    return get(dbRef);
};

export default {
    getAllAnimes,
};
