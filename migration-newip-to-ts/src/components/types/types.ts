export interface ArticlesResp {
    status: string;
    totalResults: number;
    articles: ArticlesInfo[];
    sources?: SourcesInfo[];
}

export type ArticlesInfo = {
    source: { id: string; name: string };
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
};

export interface SourcesResp {
    status: string;
    sources: SourcesInfo[];
    articles?: ArticlesInfo[];
}

export type SourcesInfo = {
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

export type CallB<Type> = (data: Type) => void;
