export interface IVideosItems {
    id: number;
    results: Result[];
}

export interface Result {
    name: string;
    key: string;
    site: 'YouTube';
    size: number;
    type: string;
    official: boolean;
    published_at: Date;
    id: string;
}