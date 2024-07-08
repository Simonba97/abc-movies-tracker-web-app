import React, { useState } from 'react'
import useMovieSearch from '../../hooks/useMovieSearch';
import MovieList from './MovieList';

const MovieSearch = () => {

    const [query, setQuery] = useState<string>('');
    const { movies, loading } = useMovieSearch(query, 5);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    }

    return (
        <div id='contMovieSearch' className='mb-4'>
            <form className="flex items-center max-w-sm mx-auto">
                <div className="relative w-full">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-5 h-5 fill-slate-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M11 20H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h1l2 4h3L8 4h2l2 4h3l-2-4h2l2 4h3l-2-4h4v9c-.5-.8-1.2-1.5-2-2v-1H5.8L4 6.5V18h6.2c.2.7.4 1.4.8 2m9.3-1.1c.4-.7.7-1.5.7-2.4c0-2.5-2-4.5-4.5-4.5S12 14 12 16.5s2 4.5 4.5 4.5c.9 0 1.7-.2 2.4-.7l3.1 3.1l1.4-1.4zm-3.8.1c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5" />
                        </svg>
                    </div>
                    <input
                        type="text"
                        value={query}
                        onChange={handleInputChange}
                        className="bg-gray-700 border border-gray-600 placeholder-gray-400 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                        placeholder="Buscar película por nombre..."
                    />
                </div>
            </form>
            <MovieList movies={movies} loading={loading}/>
        </div>
    );
}

export default MovieSearch