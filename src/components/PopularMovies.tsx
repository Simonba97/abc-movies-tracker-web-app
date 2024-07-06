import { useEffect, useState } from 'react';
import { MovieService } from '../services/MovieService.ts';
import { IMovieItem } from '../models/IMovieItem.ts';
import Pagination from './common/Pagination.tsx';
import ListMovies from './ListMovies.tsx';
import MessageCard from './common/MessageCard.tsx';

const PopularMovies = () => {

    // Definición de estados
    const [movies, setMovies] = useState<IMovieItem[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(true); // Indica si la solicitud está en curso o no
    const [error, setError] = useState<string | null>(null); // Estado para manejar errores

    // Instancia del servicio de MovieService para realizar las consultas
    const movieService = new MovieService();

    useEffect(() => {

        // Consulta de películas 
        const fetchMovies = async () => {
            try {
                setLoading(true);
                await movieService.getPopularMovies(currentPage)
                    .then((dataResponse) => {
                        setMovies(dataResponse.results);
                    });
            } catch (error: any) {
                setError(error.message || 'Error desconocido');
            } finally {
                setLoading(false);
            }
        };

        // Llamado consulta async
        fetchMovies();

    }, [currentPage]); // Dependencia del estado para volver a consultar la información

    if (error) {
        return (
            <div className='flex justify-center'>
                <MessageCard titleMsj='Estamos presentando problemas' descMsj='Por favor vuelva más tarde' isLoading={false} />
            </div>
        );
    } else if (loading) {
        return (
            <div className='flex justify-center'>
                <MessageCard titleMsj='Su contenido está cargando' descMsj='Por favor espere...' isLoading={loading} />
            </div>
        )
    } else {
        return (
            <div id='contPopularMovies' className='pb-6'>
                {/* Título */}
                <h2 className='text-xl md:text-3xl font-semibold mb-3'>{`Películas más populares${currentPage != 1 ? ', página ' + currentPage + ':' : ':'}`}</h2>

                {/* Lista de resultados */}
                <ListMovies movies={movies} />

                {/* Páginación */}
                <Pagination
                    currentPage={currentPage}
                    onPageChange={setCurrentPage}
                />
            </div>
        )
    }


}

export default PopularMovies