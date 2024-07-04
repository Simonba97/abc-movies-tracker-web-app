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
    public async getPopularMovies(): Promise</* ITeamsInformationResponse | undefined */any> {
        try {
            const endpoint = `/movie/popular?language=es-ES`;
            return await this.makeRequest(endpoint);
        } catch (error) {
            /* console.error(``); */
            return undefined;
        }
    } // end getPopularMovies

} // end MovieService