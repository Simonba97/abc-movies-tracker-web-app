import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { MovieService } from "../services/MovieService";
import { IFullMovieDetailItem } from "../models/IFullMovieDetailItem";
import { format } from "date-fns";
import { ICreditsItem } from "../models/ICreditsItem";
import { TMDB_BASE_URL_IMG } from "../config/tmdb";
import Badge from "../components/common/Badge";
import CastMovie from "../components/CastMovie";
import { Helmet } from 'react-helmet';

const FullMovieDetail = () => {

    const [fullMovieDetail, setFullMovieDetail] = useState<IFullMovieDetailItem>();
    const [creditsMovie, setCreditsMovie] = useState<ICreditsItem>();
    const [trailerMovieId, setTrailerMovieId] = useState<string>();
    const [loading, setLoading] = useState(true); // Estado para indicar si la solicitud está en curso

    const movieService = new MovieService();

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const idMovie: number = Number(queryParams.get('movieId'));

    let yearMovie: string = 'Sin fecha';

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                setLoading(true);

                const [fullMovieDetailRespose, creditsMovieResponse, trailerMovieResponse] = await Promise.all([
                    movieService.getMovieById(idMovie),
                    movieService.getCreditsByMovieId(idMovie),
                    movieService.getVideosByMovieId(idMovie)
                ]);

                setFullMovieDetail(fullMovieDetailRespose);
                setCreditsMovie(creditsMovieResponse);

                if (trailerMovieResponse) {
                    // Filtramos para obtener solo el tráiler
                    const trailer = trailerMovieResponse.results.find(video => video.type === 'Trailer' && video.site === 'YouTube');
                    if (trailer) {
                        setTrailerMovieId(trailer.key);
                    }
                }

            } catch (error: any) {
                //TODO: Implementar card de mensaje de error
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, []);

    if (!loading) {
        yearMovie = fullMovieDetail?.release_date ? format(fullMovieDetail.release_date, 'yyyy') : 'Sin fecha';
    } else {
        return (
            <div>
                Por favor espere
            </div>
        )
    }

    return (
        <div id="contFullMovieDetail">
            <Helmet>
                <title>{`${fullMovieDetail?.title} - ABC Movie Tracker`}</title>
                <meta name="description" content={`${fullMovieDetail?.overview}`} />

                {/* <!-- Open Graph meta tags --> */}
                <meta property="og:title" content={`${fullMovieDetail?.title} - ABC Movie Tracker`} />
                <meta property="og:description" content={`${fullMovieDetail?.overview}`} />
                <meta property="og:image" content={`${TMDB_BASE_URL_IMG}${fullMovieDetail?.poster_path}`} />
                <meta property="og:type" content="website" />

                {/* <!-- Twitter Card meta tags  --> */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`${fullMovieDetail?.title} - ABC Movie Tracker`} />
                <meta property="og:description" content={`${fullMovieDetail?.overview}`} />
                <meta name="twitter:image" content={`${TMDB_BASE_URL_IMG}${fullMovieDetail?.poster_path}`} />
            </Helmet>
            <div id="headInformationMovie" className="flex flex-col sm:flex-row p-2 sm:p-4 bg-white rounded-t-lg">
                <div className="sm:w-1/2">
                    <div className="flex flex-col -space-y-2">
                        <h1 className="text-4xl font-bold">{fullMovieDetail?.title}</h1>
                        <span className="text-2xl font-light italic">{fullMovieDetail?.original_title}</span>
                    </div>
                    <div>
                        <div>
                            <span className="text-xl font-light">{yearMovie}</span>
                        </div>
                    </div>
                </div>
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

                                <span className="font-semibold text-xl">{fullMovieDetail?.vote_average.toFixed(1)}</span>
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
                                <span className="font-semibold text-xl">{fullMovieDetail?.popularity.toFixed(0)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="bodyInformationMovie" >
                <div className="flex flex-row">
                    <div className="w-full lg:w-1/4">
                        <img className="w-full" src={`${TMDB_BASE_URL_IMG}${fullMovieDetail?.poster_path}`} alt={fullMovieDetail?.title} />
                    </div>
                    <div className="w-full">
                        <iframe
                            width={'100%'}
                            height={'100%'}
                            src={`https://www.youtube.com/embed/${trailerMovieId}`}
                            title={`Official trailer: ${fullMovieDetail?.title}`}
                        ></iframe>
                    </div>
                </div>

                {/* Descripción de la película */}
                <div className="bg-white rounded-b-lg p-2 sm:p-4">
                    <span className="font-light text-lg">{fullMovieDetail?.overview}</span>
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

                                <span className="font-semibold text-xl">{fullMovieDetail?.vote_average.toFixed(1)}</span>
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
                                <span className="font-semibold text-xl">{fullMovieDetail?.popularity.toFixed(0)}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Géneros de la película */}
                <div id="contGenrs" className="flex justify-evenly md:lg:xl:justify-normal py-4 lg:py-6">
                    {fullMovieDetail?.genres.map((genre) =>
                        <Badge
                            text={genre.name}
                        />
                    )}
                </div>
            </div>

            {/* Créditos de la película */}
            {creditsMovie?.cast &&
                <CastMovie cast={creditsMovie.cast} />
            }
        </div>
    )
}

export default FullMovieDetail