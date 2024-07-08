import { IFullMovieDetailItem } from "../../models/IFullMovieDetailItem";
import { format } from "date-fns";


const HeadMovieInformation = ({ movie }: { movie: IFullMovieDetailItem }) => {
    return (
        <div id="headInformationMovie" className="flex flex-col sm:flex-row p-2 sm:p-4 bg-gray-100 rounded-t-lg">

            {/* Primera columna */}
            <div className="sm:w-1/2">
                <div className="flex flex-col -space-y-2">
                    <h1 className="text-4xl font-bold">{movie.title}</h1>
                    <span className="text-2xl font-light italic">{movie.original_title}</span>
                </div>
                <div>
                    <div>
                        <span className="text-xl font-light">{movie.release_date ? format(movie.release_date, 'yyyy') : 'Sin fecha'}</span>
                    </div>
                </div>
            </div>

            {/* Segunda columna */}
            <div className="sm:w-1/2 hidden sm:lg:flex space-x-4 sm:justify-end items-center text-center">
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
        </div>
    )
}

export default HeadMovieInformation