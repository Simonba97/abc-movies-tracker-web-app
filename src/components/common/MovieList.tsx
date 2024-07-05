import { TMDB_BASE_URL_IMG } from "../../config/tmdb";
import { IMovieItem } from "../../models/IMovieItem";

import { format } from "date-fns";


const MovieList = ({ movies }: { movies: IMovieItem[] }) => {
    return (
        <div id="contMovieList" className="absolute z-10 left-[18rem]">
            {movies.map((movie) => {
                const imgMovie: string = `${TMDB_BASE_URL_IMG}${movie.poster_path}`;
                let dateMovie: string = "Sin registro de fecha";

                try {
                    dateMovie = format(new Date(movie.release_date.toString()), "yyyy/MM/dd");
                } catch (error) { }

                return (
                    <div key={movie.id} className="flex w-96 h-36 border-b border-gray-400 bg-blue-300 m-auto">
                        <div className="w-1/3">
                            <img
                                className="w-36 object-cover"
                                src={imgMovie}
                                alt={movie.title}
                            />
                        </div>
                        <div className="w-2/3 p-2 flex flex-col justify-center">
                            <h2 className="font-semibold text-sm">{movie.title}</h2>
                            <span className="text-xs">{dateMovie}</span>
                        </div>
                    </div>
                )
            }
            )}
        </div>
    )
}

export default MovieList