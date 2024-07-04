import MainTitle from "../components/MainTitle";
import PopularMovies from "../components/PopularMovies";

const Home = () => {
    return (
        <section id="home" className="h-screen">
            <MainTitle
                title={`ABC Movies Tracker`}
                description={`¡Bienvenido a ABC Movie Tracker! Aquí podrás descubrir y ver las películas más populares, buscar títulos específicos, guardar tus favoritas para verlas más tarde y obtener información detallada sobre cada película, incluyendo sinopsis, trailers y críticas. Con ABC Movie Tracker, mantente al día con los últimos éxitos de taquilla y disfruta del cine como nunca antes. ¡Empieza hoy mismo y convierte cada noche en una noche de película!`} />
            <PopularMovies />
        </section>
    )
}

export default Home