import { IData, ITMDBResponse } from "../models/ITMDBResponse";
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
     * @returns {Promise<IInfoMatchItem>} - Una promesa que se resuelve con la información del partido.
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

} // end MovieService