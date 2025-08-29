import { ExampleController } from './controllers/ExampleController.js';
import { JotController } from './controllers/JotController.js';

class App {

    jotController = new JotController()

}

window['app'] = new App()


