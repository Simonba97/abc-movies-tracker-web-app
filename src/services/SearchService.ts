import { IData, ITMDBResponse } from "../models/ITMDBResponse";
import { TMDbService } from "./core/TMDbService";

/**
 * Servicio que contiene los metodos necesarios para oobtener información del modelo search
 * @class SearchService
 */
export class SearchService extends TMDbService {

    /**
     * Obtiene información de las películas basado en un query
     * @param {string} query - Query con información para realizar búsquedas y encontrar coincidencias
     * @returns {Promise<IData>} 
     */
    public async getMoviesByQuery(query: string): Promise<IData> {
        try {
            const endpoint = `/search/movie`;
            const tmdbResponse: ITMDBResponse = await this.makeRequest(endpoint, {
                params: {
                    query: query,
                    page: 1 // Se limita a buscar unicamente en la página #1
                }
            });

            return tmdbResponse.data;
        } catch (error) {
            console.error('Error searching movies:', error);
            throw error;
        }
    } // end getMoviesByQuery

} // end SearchService