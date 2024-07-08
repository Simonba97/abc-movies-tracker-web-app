import { IMovieItem } from "../models/IMovieItem"
import MovieCard from "./common/MovieCard"

const ListMovies = ({ movies }: { movies: IMovieItem[] }) => {
    return (
        <div className='flex flex-wrap justify-evenly'>
            {movies.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    )
}

export default ListMovies;