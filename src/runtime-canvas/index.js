import {Graphics, Text} from 'pixi.js';
import {createRenderer} from '@vue/runtime-core';

//解构
const renderer = createRenderer({
  //
  createElement(type){
    console.log(type);
    //基于type，创建基于canvas的元素
    let element;
    if(type === "rect"){
      //创建矩形
      element = new Graphics();
      element.beginFill(0xff0000);
      element.drawRect(0,0,500,500);
      element.endFill();
    }else if(type === "circle"){
      //创建矩形
      element = new Graphics();
      element.beginFill(0xffff00);
      element.drawCircle(0,0,50);
      element.endFill();
    }
    return element;
  },
  patchProp(el,key,prevValue,nextValue){
    if(key === "x"){
      el.x = nextValue;
    }
    if(key === "y"){
      el.y = nextValue;
    }
  },
  setElementText(node,text){
    //创建文本
    const cText = new Text(text);
    node.addChild(cText);
  },
  createText(text){
    return new Text(text);
  },
  insert(el,parent){
    console.log(el,parent);
    parent.addChild(el);
  }
})
//暴露出去
export  function createApp(rootComponent) {
  return renderer.createApp(rootComponent);
};
