import MovieSearch from "../components/common/MovieSearch";
import MainTitle from "../components/MainTitle";
import PopularMovies from "../components/PopularMovies";
import { Helmet } from 'react-helmet'; // 

const Home = () => {
    return (
        <section id="home" className="h-screen">
            {/* Page SEO */}
            <Helmet>
                <title>ABC Movie Tracker: descubre, guarda y explora tus películas favoritas</title>
                <meta name="description" content={'Descubre y disfruta de las películas más populares, busca títulos específicos, guarda tus favoritas para verlas más tarde y explora información detallada sobre cada película, incluyendo sinopsis, trailers y críticas. Con ABC Movie Tracker, mantente al día con los últimos éxitos de taquilla y convierte cada noche en una noche de película. ¡Empieza hoy mismo y haz del cine una experiencia inolvidable'} />
                <meta name="keywords" content="movies, movie tracker, popular movies, películas, actores, cine, series, stream" />

                {/* <!-- Open Graph meta tags --> */}
                <meta property="og:title" content="ABC Movie Tracker: descubre, guarda y explora tus películas favoritas" />
                <meta property="og:description" content="Descubre y disfruta de las películas más populares, busca títulos específicos, guarda tus favoritas para verlas más tarde y explora información detallada sobre cada película, incluyendo sinopsis, trailers y críticas. Con ABC Movie Tracker, mantente al día con los últimos éxitos de taquilla y convierte cada noche en una noche de película. ¡Empieza hoy mismo y haz del cine una experiencia inolvidable" />
                <meta property="og:image" content="metaTags.jpeg" />
                <meta property="og:type" content="website" />

                {/* <!-- Twitter Card meta tags  --> */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="ABC Movie Tracker: descubre, guarda y explora tus películas favoritas" />
                <meta property="og:description"
                    content="Descubre y disfruta de las películas más populares, busca títulos específicos, guarda tus favoritas para verlas más tarde y explora información detallada sobre cada película, incluyendo sinopsis, trailers y críticas. Con ABC Movie Tracker, mantente al día con los últimos éxitos de taquilla y convierte cada noche en una noche de película. ¡Empieza hoy mismo y haz del cine una experiencia inolvidable." />
                <meta name="twitter:image" content="metaTags.jpeg" />
            </Helmet>

            {/* Información principal de la página */}
            <MainTitle
                title={`ABC Movies Tracker`}
                description={`Tu brújula en la búsqueda del entretenimiento`}
            />

            {/* Barra de búsqueda */}
            <MovieSearch />

            {/* Lista de películas más populares */}
            <PopularMovies />
        </section>
    );
}

export default Home