import { useEffect, useState } from "react";
import { IMovieItem } from "../models/IMovieItem";

const useFavorites = () => {
    const [favorites, setFavorites] = useState<IMovieItem[]>([]);

    useEffect(() => {
        const storedFavorites = localStorage.getItem('favoriteMovies');

        if (storedFavorites) {
            setFavorites(JSON.parse(storedFavorites));
        }
    }, []);

    /* Función para agregar un nuevo favorito */
    const addFavorite = (movie: IMovieItem) => {
        const newFavorites = [...favorites, movie];
        setFavorites(newFavorites);
        localStorage.setItem('favoriteMovies', JSON.stringify(newFavorites));
    };

    /* Función para eliminar un nuevo favorito */
    const removeFavorite = (movieId: number) => {
        const newFavorites = favorites.filter(movie => movie.id !== movieId);
        setFavorites(newFavorites);
        localStorage.setItem('favoriteMovies', JSON.stringify(newFavorites));
    };

    /* Retornar los favoritos guardados */
    const isFavorite = (movieId: number) => favorites.some(movie => movie.id === movieId);

    return { favorites, addFavorite, removeFavorite, isFavorite };
};

export default useFavorites;