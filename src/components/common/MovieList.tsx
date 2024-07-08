import { IMovieItem } from "../../models/IMovieItem";
import MovieMinCard from "./MovieMinCard";

const MovieList = ({ movies, loading }: { movies: IMovieItem[], loading: boolean }) => {
    return (
        <div id="contMovieList" className="absolute left-0 w-full mt-2 z-10">
            {!loading ?
                movies.map((movie) => <MovieMinCard key={movie.id} movie={movie} />)
                :
                <div className="flex w-96 border-b border-gray-400 bg-gray-700 m-auto">
                    <span className="p-2 text-gray-300">{'Cargando resultados...'}</span>
                </div>
            }
        </div>
    )
}

export default MovieList