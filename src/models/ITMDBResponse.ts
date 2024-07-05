import { IMovieItem } from "./IMovieItem";

export interface ITMDBResponse {
    data: IData;
    status: number;
    statusText: string;
}

export interface IParams {
    api_key?: string;
    language?: string;
    page?: number;
    query?: string;
}

export interface IData {
    page: number;
    results: IMovieItem[];
    total_pages: number;
    total_results: number;
}
