export interface EverythingInt {
    status: string;
    totalResults: number;
    articles: Array<ArticlesType>;
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
