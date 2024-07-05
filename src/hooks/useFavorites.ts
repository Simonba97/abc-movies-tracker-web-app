import { useEffect, useState } from "react"

const useFavorites = () => {

    const [favorites, setFavorites] = useState<number[]>([])

    useEffect(() => {
        const storedFavorites = localStorage.getItem('favoriteMoviesIds');

        if (storedFavorites) {
            setFavorites(JSON.parse(storedFavorites));
        }

    }, []);

    const addFavorite = (movieId: number) => {
        const newFavorites = [...favorites, movieId];
        setFavorites(newFavorites);
        localStorage.setItem('favoriteMoviesIds', JSON.stringify(newFavorites));
    };

    const removeFavorite = (movieId: number) => {
        const newFavorites = favorites.filter(id => id !== movieId);
        setFavorites(newFavorites);
        localStorage.setItem('favoriteMoviesIds', JSON.stringify(newFavorites));
    };

    const isFavorite = (movieId: number) => favorites.includes(movieId);

    return { favorites, addFavorite, removeFavorite, isFavorite };
}

export default useFavorites;