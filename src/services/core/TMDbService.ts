import axios, { AxiosInstance } from 'axios';
import { TMDB_BASE_URL } from '../../config/tmdb';
import { IParams, ITMDBResponse } from '../../models/ITMDBResponse';

export abstract class TMDbService {

    // Variable global del Axios intance para cuando vayamos hacer una consulta
    private _tmdbAp: AxiosInstance;

    /**
     * Crear una instancia de TMDbService
     * @memberof TMDbService
     */
    public constructor() {
        /* 
        * Configuración de la creación de la instancia de axios
        */
        this._tmdbAp = axios.create({
            baseURL: TMDB_BASE_URL,
            params: {
                api_key: import.meta.env.VITE_TMDB_API_KEY, // Api key almacenada en las variables de entorno
                language: 'es-ES', // Lenguaje para que todas las respuestas sean en español

            },
        });
    }

    /**
     * TODO: Descripción de la información
     * @param {number} itemId
     * @returns {Promise<string>}
     * @memberof TMDbService
     */
    public async makeRequest(endpoint: string, params?: { params: IParams }): Promise<ITMDBResponse> {
        try {
            const response: ITMDBResponse = await this._tmdbAp.get(endpoint, params);
            return response;
        } catch (error) {
            console.error('Error fetching popular movies:', error);
            throw error;
        }
    } // end makeRequest

}
