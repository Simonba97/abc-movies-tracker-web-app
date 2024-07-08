import { TMDB_BASE_URL_IMG } from "../../config/tmdb"
import { IFullMovieDetailItem } from "../../models/IFullMovieDetailItem"
import Badge from "./Badge";

const BodyMovieInformation = ({ movie, trailerMovieId }: { movie: IFullMovieDetailItem, trailerMovieId: string }) => {

    const imgMovie: string = movie.poster_path ? `${TMDB_BASE_URL_IMG}${movie.poster_path}` : 'https://via.placeholder.com/500x750?text=No+Image+Available';
    return (
        <div id="bodyInformationMovie" >
            <div className="flex flex-row">
                <div className="w-full lg:w-1/4">
                    <img className="w-full" src={imgMovie} alt={movie.title} />
                </div>
                <div className="w-full bg-gray-100">
                    {trailerMovieId ?
                        <iframe
                            width={'100%'}
                            height={'100%'}
                            src={`https://www.youtube.com/embed/${trailerMovieId}`}
                            title={`Official trailer: ${movie.title}`}
                        ></iframe>
                        :
                        <div className="flex h-full justify-center items-center">
                            <span className="font-light text-gray-400">{'Sin trailer disponible'}</span>
                        </div>
                    }
                </div>
            </div>

            {/* Descripción de la película */}
            <div className="bg-gray-100 rounded-b-lg p-2 sm:p-4">
                <span className="font-light text-lg">{movie.overview}</span>
            </div>

            {/* Estadísticas de la película */}
            <div className="lg:w-1/2 flex lg:hidden justify-evenly items-center text-center py-4 lg:py-6">
                <div className="flex flex-col">
                    <span className="uppercase font-bold text-xl">Calificación</span>
                    <div className="flex items-center justify-center">
                        <div>
                            <svg className="w-7 h-7 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                        </div>
                        <div>

                            <span className="font-semibold text-xl">{movie.vote_average.toFixed(1)}</span>
                            <span className="font-light">/10</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <span className="uppercase font-bold text-xl">Popularidad</span>
                    <div className="flex items-center justify-center">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 me-1" viewBox="0 0 24 24"><g fill="none" stroke="#65a30d" strokeLinecap="round" strokeWidth="2"><path strokeLinejoin="round" d="m21 6l-5.293 5.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 0-1.414 0L7 14" /><path d="M3 3v14.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C4.52 21 5.08 21 6.2 21H21" /></g></svg>
                        </div>
                        <div>
                            <span className="font-semibold text-xl">{movie.popularity.toFixed(0)}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Géneros de la película */}
            <div id="contGenrs" className="flex justify-evenly md:lg:xl:justify-normal py-4 lg:py-6">
                {movie.genres.map((genre) =>
                    <Badge
                        text={genre.name}
                    />
                )}
            </div>
        </div>
    )
}

export default BodyMovieInformation