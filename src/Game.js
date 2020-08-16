import {Application} from 'pixi.js';
//App.vue
//1,创建根组件
//2,创建根容器，canvas
//createApp(rootComponent).mount(rootContainer);
//初始化game,通过export暴露出去
export const game = new Application({
  width:700,
  height:860
});
//game.view对应一个canvas实例
//把生成的canvas，添加到body中
document.body.append(game.view);