
import App from './src/App.js';
import {createApp} from './src/runtime-canvas';
import {game} from './src/Game.js';

//创建根容器，game.stage是canvas内部的根容器
createApp(App).mount(game.stage);