import { Link } from "react-router-dom";
import { TMDB_BASE_URL_IMG } from "../../config/tmdb";
import { IMovieItem } from "../../models/IMovieItem";
import FavoriteMovie from "./FavoriteMovie";

const MovieCard = ({ movie }: { movie: IMovieItem }) => {
    return (
        <div className="flex-[0_0_48%] flex-col sm:flex-[0_0_30%] lg:flex-[0_0_20%] flex mb-8 ml-1 sm:ml-3 lg:ml-6 rounded overflow-hidden shadow-lg bg-gray-100 cursor-pointer" >
            <FavoriteMovie movieId={movie.id} />
            <Link className="" to={`/movie-detail?movieId=${movie.id}`}>
                <div>
                    <img className="h-52 sm:h-80 lg:h-96 object-cover" src={`${TMDB_BASE_URL_IMG}${movie.poster_path}`} alt={movie.title} />
                </div>
                <div className="p-2">
                    <div className="flex items-center">
                        <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <p className="text-xs font-extralight">{movie.vote_average.toFixed(1)}</p>
                    </div>
                    <div className="font-light text-xs sm:text-sm lg:text-lg">{movie.title}</div>
                </div>
            </Link>
        </div>

    )
}

export default MovieCard