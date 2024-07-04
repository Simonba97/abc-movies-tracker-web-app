import axios from 'axios';

export abstract class TMDbService {

    private _API_KEY: string;
    private _baseAPIUrl: string;
    private _tmdbAp: any;

    /**
      * Crear una instancia de TMDbService
      * @param {(WebPartContext)} context
      * @memberof TMDbService
      */
    public constructor() {
        this._API_KEY = "72df454aa3e34fc89f10bb43729ca51c";
        /* this._API_KEY = import.meta.env.VITE_RAPIDAPI_API_KEY; */
        this._baseAPIUrl = 'https://api.themoviedb.org/3';

        this._tmdbAp = axios.create({
            baseURL: this._baseAPIUrl,
            params: {
                api_key: this._API_KEY,
            },
        });
    }

    /**
     * TODO: Descripción de la información
     * @param {number} itemId
     * @returns {Promise<string>}
     * @memberof TMDbService
     */
    public async makeRequest(endpoint: string): Promise<any> {
        try {
            const response = await this._tmdbAp.get(endpoint);
            return response.data.results;
        } catch (error) {
            console.error('Error fetching popular movies:', error);
            throw error;
        }
    } // end makeRequest

}
