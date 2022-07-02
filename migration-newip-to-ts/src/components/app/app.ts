import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { EverythingInt, SourcesInt } from '../../types/types';

class App {
    private controller: InstanceType<typeof AppController>;
    private view: InstanceType<typeof AppView>;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    public start(): void {
        (document.querySelector('.sources') as HTMLElement).addEventListener('click', (e) =>
            this.controller.getNews(e, (data: EverythingInt | SourcesInt) => this.view.drawNews(data))
        );
        this.controller.getSources((data: EverythingInt | SourcesInt) => this.view.drawSources(data));
    }
}

export default App;
