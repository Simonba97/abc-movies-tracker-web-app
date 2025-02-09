import axios, { AxiosInstance } from 'axios';
import { TMDB_BASE_URL } from '../../config/tmdb';
import { IParams, ITMDBResponse } from '../../models/ITMDBResponse';

export abstract class TMDbService {

    // Variable global del Axios intance para cuando vayamos hacer una consulta
    private _axiosInstance: AxiosInstance;

    /**
     * Crear una instancia de TMDbService
     * @memberof TMDbService
     */
    public constructor() {
        /* 
        * Configuración de la creación de la instancia de axios
        */
        this._axiosInstance = axios.create({
            baseURL: TMDB_BASE_URL,
            params: {
                api_key: import.meta.env.VITE_TMDB_API_KEY, // Api key almacenada en las variables de entorno
                language: 'es-ES', // Lenguaje para que todas las respuestas sean en español

            },
        });
    }

    /**
     * Estructura base para poder realizar una consulta al API de TMBd
     * @param {string} endpoint - Ruta para obtener la información
     * @param {IParams} params - Opcional para enviar más configuraciones al API
     * @returns {Promise<ITMDBResponse>}
     * @memberof TMDbService
     */
    public async makeRequest(endpoint: string, params?: { params: IParams }): Promise<ITMDBResponse> {
        try {
            const response: ITMDBResponse = await this._axiosInstance.get(endpoint, params);
            return response;
        } catch (error) {
            console.error('Error fetching to API:', error);
            throw error;
        }
    } // end makeRequest

}
