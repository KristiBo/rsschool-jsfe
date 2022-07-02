import News from './news/news';
import Sources from './sources/sources';
import { EverythingInt, SourcesInt } from '../../types/types';

export class AppView {
    private news: InstanceType<typeof News>;
    private sources: InstanceType<typeof Sources>;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    public drawNews(data: EverythingInt | SourcesInt): void {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    public drawSources(data: EverythingInt | SourcesInt): void {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
