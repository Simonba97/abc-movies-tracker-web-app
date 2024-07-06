import { useCallback, useEffect, useState } from "react";
import { IMovieItem } from "../models/IMovieItem";
import { SearchService } from "../services/SearchService";

const useMovieSearch = (query: string, limitResults: number) => {
    const searchService = new SearchService();

    const [movies, setMovies] = useState<IMovieItem[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const searchMovies = useCallback(async (searchQuery: string) => {
        try {

            setLoading(true);
            await searchService.getMoviesByQuery(searchQuery)
                .then((dataResponse) => {
                    // Restringimos los resultamos para que nos muestre solo el límite establecido y no todas las movies resultantes
                    setMovies(dataResponse.results.slice(0, limitResults));
                });

        } catch (error) {
            console.error('Error searching movies:', error);
            setMovies([]);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        if (query.trim() === '') {
            setMovies([]);
            return;
        }

        /* Para esperar una pausa de 500 mili segundos para evitar consultar tantas veces */
        const debounceTimeout = setTimeout(() => {
            searchMovies(query);
        }, 500);

        return () => {
            clearTimeout(debounceTimeout);
        };
    }, [query, searchMovies]); // Dependencias de llamados

    return { movies, loading };
}

export default useMovieSearch;