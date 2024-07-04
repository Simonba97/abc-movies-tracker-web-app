/* import { useEffect } from 'react';
import { MovieService } from '../services/MovieService.ts'; */

const Home = () => {

    /* const movieService = new MovieService();

    useEffect(() => {
        const callAsync = async () => {
            try {
                const dataResponse: any = await movieService.getPopularMovies();
                console.log(dataResponse);
                debugger;
            } catch (error: any) {

            } finally {
            }
        };

        callAsync();
    }, []); */

    return (
        <section id="home" className="h-screen">
            Home
        </section>
    )
}

export default Home