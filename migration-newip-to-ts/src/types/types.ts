export interface EverythingInt {
    status: string;
    totalResults: number;
    articles: Array<ArticlesType>;
    sources?: Array<SourcesType>;
}

export type ArticlesType = {
    source: { id: string; name: string };
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
};

export interface SourcesInt {
    status: string;
    sources: Array<SourcesType>;
    articles?: Array<ArticlesType>;
}

export type SourcesType = {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
};

export enum ErrStatus {
    Unauthorized = 401,
    NotFound = 404,
}
