//vue3
import {defineComponent,h} from '@vue/runtime-core';
import Circle from './components/Circle.js';

//创建组件
//template -> render
//在render()函数中要返回虚拟节点，
//怎么创建虚拟节点,通过h来创建
export default defineComponent({
  render(){
    //创建虚拟节点：<div x="100" y="100">苏贺亮飞机游戏</div>
    const vnode = h("rect",{x:100,y:100},[
      "苏贺亮飞机游戏",
      h(Circle)
    ]);
    return vnode;
  }
})
