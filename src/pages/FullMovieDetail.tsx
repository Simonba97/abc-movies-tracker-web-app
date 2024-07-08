import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { MovieService } from "../services/MovieService";
import { IFullMovieDetailItem } from "../models/IFullMovieDetailItem";
import { format } from "date-fns";
import { ICreditsItem } from "../models/ICreditsItem";
import { TMDB_BASE_URL_IMG } from "../config/tmdb";
import CastMovie from "../components/CastMovie";
import { Helmet } from 'react-helmet';
import MessageCard from "../components/common/MessageCard";
import HeadMovieInformation from "../components/common/HeadMovieInformation";
import BodyMovieInformation from "../components/common/BodyMovieInformation";

const FullMovieDetail = () => {

    /* Instancia de servicio para consultar información relevante */
    const movieService = new MovieService();

    /* Definición de estados */
    const [fullMovieDetail, setFullMovieDetail] = useState<IFullMovieDetailItem>();
    const [creditsMovie, setCreditsMovie] = useState<ICreditsItem>();
    const [trailerMovieId, setTrailerMovieId] = useState<string>('');
    const [loading, setLoading] = useState(true); // Estado para indicar si la solicitud está en curso
    const [error, setError] = useState<string | null>(null); // Estado para manejar errores

    /* Obtenemos los parametros de la URL para consultar la información */
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const idMovie: number = Number(queryParams.get('movieId'));

    useEffect(() => {

        const fetchMovies = async () => {
            try {
                setLoading(true);

                /* Consultamos simultaneamente la información completa de la película, créditos de la película y el trailer de la película */
                const [fullMovieDetailRespose, creditsMovieResponse, trailerMovieResponse] = await Promise.all([
                    movieService.getMovieById(idMovie),
                    movieService.getCreditsByMovieId(idMovie),
                    movieService.getVideosByMovieId(idMovie)
                ]);

                setFullMovieDetail(fullMovieDetailRespose);
                setCreditsMovie(creditsMovieResponse);


                // Filtramos para obtener solo el tráiler
                if (trailerMovieResponse) {
                    const trailer = trailerMovieResponse.results.find(video => video.type === 'Trailer' && video.site === 'YouTube');
                    if (trailer) {
                        setTrailerMovieId(trailer.key);
                    }
                }

            } catch (error: any) {
                setError(error.message || 'Error desconocido');
            } finally {
                setLoading(false);
            }
        };

        // Call Async
        fetchMovies();
    }, []); // Sin dependencias

    if (error) {
        return (
            <div className='flex justify-center'>
                <MessageCard titleMsj='Estamos presentando problemas' descMsj='Por favor vuelva más tarde' isLoading={false} />
            </div>
        );
    } else if (loading) {
        return (
            <div className='flex justify-center'>
                <MessageCard titleMsj='Su contenido está cargando' descMsj='Por favor espere...' isLoading={loading} />
            </div>
        )
    }

    return (
        <div id="contFullMovieDetail">

            {/* Page SEO */}
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

            {/* Contenido de la película */}
            {fullMovieDetail &&
                <>
                    {/* Información principal de la película */}
                    <HeadMovieInformation movie={fullMovieDetail} />
                    {/*  Información complementaria, trailer, poster, descripción*/}
                    <BodyMovieInformation movie={fullMovieDetail} trailerMovieId={trailerMovieId} />
                </>
            }

            {/* Créditos de la película */}
            {creditsMovie && creditsMovie.cast &&
                <CastMovie cast={creditsMovie.cast} />
            }
        </div>
    )
}

export default FullMovieDetail