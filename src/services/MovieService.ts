import { ICreditsItem } from "../models/ICreditsItem";
import { IFullMovieDetailItem } from "../models/IFullMovieDetailItem";
import { IData, ITMDBResponse } from "../models/ITMDBResponse";
import { IVideosItems } from "../models/IVideosItem";
import { TMDbService } from "./core/TMDbService";

/**
 * Servicio que contiene los metodos necesarios para oobtener información del modelo Movie
 * @class MovieService
 */
export class MovieService extends TMDbService {

    /**
     * Obtiene todas las películas populares actualemente
     * @param {number} page - Página actual para consultar específicamente sobre esa página
     * @returns {Promise<IData>}
     */
    public async getPopularMovies(page: number): Promise<IData> {
        try {
            const endpoint = `/movie/popular`;
            const tmdbResponse: ITMDBResponse = await this.makeRequest(endpoint, {
                params: {
                    page: page
                }
            });

            return tmdbResponse.data;
        } catch (error) {
            console.error('Error fetching popular movies:', error);
            throw error;
        }
    } // end getPopularMovies

    /**
    * Consulta de información de una película por ID.
    * @param {number} movieId
    * @returns {Promise<IFullMovieDetailItem>} 
    */
    public async getMovieById(movieId: number): Promise<IFullMovieDetailItem> {
        try {
            const endpoint = `/movie/${movieId}`;
            const tmdbResponse: any = await this.makeRequest(endpoint);
            return tmdbResponse.data;
        } catch (error) {
            console.error('Error fetching movie by ID:', error);
            throw error;
        }
    } // end getMovieById

    /**
    * Consulta de los créditos de una película por ID.
    * @param {number} movieId
    * @returns {Promise<ICreditsItem>} 
    */
    public async getCreditsByMovieId(movieId: number): Promise<ICreditsItem> {
        try {
            const endpoint = `/movie/${movieId}/credits`;
            const tmdbResponse: any = await this.makeRequest(endpoint);
            return tmdbResponse.data;
        } catch (error) {
            console.error('Error fetching credits by movie:', error);
            throw error;
        }
    } // end getCreditsByMovieId

    /**
    * Consulta de videos relacionados a la película
    * @param {number} movieId
    * @returns {Promise<IVideosItems | null>} 
    */
    public async getVideosByMovieId(movieId: number): Promise<IVideosItems | null> {
        try {
            const endpoint = `/movie/${movieId}/videos`;
            const tmdbResponse: any = await this.makeRequest(endpoint);
            return tmdbResponse.data;
        } catch (error) {
            console.error('Error fetching videos by movie:', error);
            return null;
        }
    } // end getVideosByMovieId

} // end MovieService