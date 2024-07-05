import { ICreditsItem } from "../models/ICreditsItem";
import { IFullMovieDetailItem } from "../models/IFullMovieDetailItem";
import { IData, ITMDBResponse } from "../models/ITMDBResponse";
import { IVideosItems } from "../models/IVideosItem";
import { TMDbService } from "./core/TMDbService";

/**
 * Servicio que contiene los metodos necesarios para gestionar un Team específico
 * @copyright 2023 - El uso de esta libreria esta reservador para este sitio y cualquier cambio o reutilización debe ser autorizado por el autor.
 * @author Simón Bustamante Alzate <simonba97@hotmail.com> / Fecha: 26.10.2023 - Creado
 *
 * @export
 * @class MovieService
 */
export class MovieService extends TMDbService {

    /**
     * Obtiene la información de un partido desde un archivo.
     * @returns {Promise<IData>} - Una promesa que se resuelve con la información del partido.
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
    * @returns {Promise<IData>} - Una promesa que se resuelve con la información del partido.
    */
    public async getMovieById(movieId: number): Promise<IFullMovieDetailItem> {
        try {
            const endpoint = `/movie/${movieId}`;
            const tmdbResponse: any = await this.makeRequest(endpoint);
            return tmdbResponse.data;
        } catch (error) {
            console.error('Error fetching popular movies:', error);
            throw error;
        }
    } // end getMovieById

    /**
    * Consulta de información de una película por ID.
    * @returns {Promise<IData>} - Una promesa que se resuelve con la información del partido.
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
    * Consulta de información de una película por ID.
    * @returns {Promise<IData>} - Una promesa que se resuelve con la información del partido.
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