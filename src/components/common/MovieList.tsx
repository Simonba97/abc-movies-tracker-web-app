import { IMovieItem } from "../../models/IMovieItem";
import MovieMinCard from "./MovieMinCard";

const MovieList = ({ movies }: { movies: IMovieItem[] }) => {
    return (
        <div id="contMovieList" className="absolute left-0 w-full mt-2 shadow-lg z-10 ">
            {movies.map((movie) => <MovieMinCard key={movie.id} movie={movie} />)}
        </div>
    )
}

export default MovieList