import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'aa5740287c054b01a48328dd1864848e',
        });
    }
}

export default AppLoader;
