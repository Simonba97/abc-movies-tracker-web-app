import { useEffect, useState } from 'react';
import { MovieService } from '../services/MovieService.ts';
import { IMovieItem } from '../models/IMovieItem.ts';
import MovieCard from './common/MovieCard.tsx';
import Pagination from './common/Pagination.tsx';

const PopularMovies = () => {

    const movieService = new MovieService();
    const [movies, setMovies] = useState<IMovieItem[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(true); // Estado para indicar si la solicitud está en curso


    useEffect(() => {
        const fetchMovies = async () => {
            try {
                setLoading(true);
                await movieService.getPopularMovies(currentPage)
                    .then((dataResponse) => {
                        setMovies(dataResponse.results);
                    });
            } catch (error: any) {
                //TODO: Implementar card de mensaje de error
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, [currentPage]);

    return (
        <section id='contPopularMovies'>
            <h2 className='text-xl font-medium'>{`Películas más populares${currentPage != 1 ? ', página ' + currentPage + ':' : ':'}`}</h2>
            <div className='flex flex-wrap justify-center'>
                {!loading && movies.length > 0 &&
                    movies.map(movie => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
            </div>
            <div>
                <Pagination
                    currentPage={currentPage}
                    onPageChange={setCurrentPage}
                />
            </div>
        </section>
    )
}

export default PopularMovies