import useFavorites from "../../hooks/useFavorites";

const FavoriteMovie = ({ movieId }: { movieId: number }) => {

    /* Hook propio que nos ayuda para el manejo de la lógica de los favoritos */
    const { addFavorite, removeFavorite, isFavorite } = useFavorites();

    /* Evento para controlar si se agrega o remueve un favorito */
    const handleFavoriteClick = (movieId: number) => {
        if (isFavorite(movieId)) {
            removeFavorite(movieId);
        } else {
            addFavorite(movieId);
        }
    };

    if (isFavorite(movieId)) {
        /* Componente de Marcado como Favorito */
        return (
            <button className='w-10 sm:w-12 lg:w-14 bg-gray-100 fill-yellow-500 rounded-br-lg absolute shadow-xl' onClick={() => handleFavoriteClick(movieId)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M17.114 9L15 6.887l.689-.714l1.424 1.425l3.525-3.55l.714.714zM6 19.5V5.616q0-.691.463-1.153T7.616 4h6.153q-.384.596-.577 1.197T13 6.5q0 1.742 1.157 3.012T17 10.958q.287.036.5.036t.5-.036V19.5l-6-2.577z" />
                </svg>
            </button>
        )
    } else {
        /* Componente de no Marcado como Favorito */
        return (
            <button className='w-10 sm:w-12 lg:w-14 bg-gray-100 fill-gray-700 rounded-br-lg absolute shadow-xl' onClick={() => handleFavoriteClick(movieId)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M6 19.5V5.616q0-.691.463-1.153T7.616 4h6.153q-.384.596-.577 1.197T13 6.5q0 1.742 1.157 3.012T17 10.958q.287.036.5.036t.5-.036V19.5l-6-2.577zM17 9V7h-2V6h2V4h1v2h2v1h-2v2z" />
                </svg>
            </button>
        )
    }
}

export default FavoriteMovie