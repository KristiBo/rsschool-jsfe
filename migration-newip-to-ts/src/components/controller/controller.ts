import AppLoader from './appLoader';
import { EverythingInt, SourcesInt, CallB } from '../types/types';

class AppController extends AppLoader {
    public getSources(callback: CallB<EverythingInt | SourcesInt>): void {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    public getNews(e: Event, callback: CallB<EverythingInt | SourcesInt>): void {
        let target = e.target as HTMLTemplateElement;
        const newsContainer = e.currentTarget as HTMLTemplateElement;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id') as string;
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target.parentNode as HTMLTemplateElement;
        }
    }
}

export default AppController;
