import { Link } from "react-router-dom";
import { TMDB_BASE_URL_IMG } from "../../config/tmdb";
import { IMovieItem } from "../../models/IMovieItem";
import FavoriteMovie from "./FavoriteMovie";

const MovieCard = ({ movie }: { movie: IMovieItem }) => {
    return (
        <div id="contMovieCard" className="flex-[0_0_48%] flex-col sm:flex-[0_0_31%] lg:flex-[0_0_23%] flex mb-4 rounded shadow-lg bg-gray-100 cursor-pointer" >

            {/* Acción de guardar en favoritos */}
            <FavoriteMovie movieDetail={movie} />

            {/* Card de la película */}
            <Link to={`/movie-detail?movieId=${movie.id}`}>

                {/* Poster movie */}
                <img className="object-cover min-h-64" src={`${TMDB_BASE_URL_IMG}${movie.poster_path}`} alt={movie.title} />

                {/* Información de la película */}
                <div className="p-2">

                    {/* Puntuación de la película  */}
                    <div className="flex items-center">
                        <svg className="w-5 h-5 text-yellow-500 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <span className="text-sm font-normal">{movie.vote_average.toFixed(1)}</span>
                        <span className="text-xs font-light">/10</span>
                    </div>

                    {/*  Detalle específico de la película */}
                    <div className="font-normal text-normal lg:text-lg">
                        <span>{movie.title}</span>
                    </div>

                </div>

            </Link>
        </div>

    )
}

export default MovieCard;