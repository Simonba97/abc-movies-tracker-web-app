import { Helmet } from "react-helmet"
import MainTitle from "../components/MainTitle"
import useFavorites from "../hooks/useFavorites";
import ListMovies from "../components/ListMovies";
import MessageCard from "../components/common/MessageCard";

const FavoritesHub = () => {

    /* Hook propio que nos ayuda para el manejo de la lógica de los favoritos */
    const { favorites } = useFavorites();

    return (
        <section id="contMyFavorites">
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
                title={`Mis favoritos`}
                description={`Este es el centro de los favoritos, en donde podrás encontrar todas las películas marcadas como favoritas`}
            />

            <div id='contListFavoritesMovies' className='pb-6'>
                {/* Lista de resultados */}
                {favorites.length > 0 ?
                    <ListMovies movies={favorites} />
                    :
                    <div className="w-full flex justify-center">
                        <MessageCard titleMsj="Sin favoritos" descMsj="No tienes favoritos para ver" isLoading={false} />
                    </div>
                }
            </div>

        </section>
    )
}

export default FavoritesHub