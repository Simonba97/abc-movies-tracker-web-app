import { Link } from 'react-router-dom';
import { TMDB_BASE_URL_IMG } from '../../config/tmdb';
import { IMovieItem } from '../../models/IMovieItem';
import { format } from "date-fns";

const MovieMinCard = ({ movie }: { movie: IMovieItem }) => {

    const imgMovie: string = `${TMDB_BASE_URL_IMG}${movie.poster_path}`;
    let dateMovie: string = "Sin registro de fecha";
    let descriptionMovie: string = "";

    try {
        dateMovie = format(new Date(movie.release_date.toString()), "yyyy/MM/dd");
        descriptionMovie = movie.overview.length > 150 ? movie.overview.slice(0, 150) + '...' : movie.overview;
    } catch (error) { }

    return (
        <Link key={movie.id} className="flex w-96 min-h-36 border-b border-gray-400 bg-gray-700 m-auto" to={`/movie-detail?movieId=${movie.id}`}>
            <div className="w-1/3">
                <img
                    className="w-36 object-cover"
                    src={imgMovie}
                    alt={movie.title}
                />
            </div>
            <div className="w-2/3 px-5 flex flex-col justify-center">
                <h2 className="font-semibold text-sm text-gray-200">{movie.title}</h2>
                <span className="text-xs text-gray-300">{dateMovie}</span>
                <span className="text-xs text-gray-300 italic text-justify">{descriptionMovie}</span>
            </div>
        </Link>
    )

}

export default MovieMinCard