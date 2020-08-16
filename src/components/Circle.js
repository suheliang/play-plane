//vue3
import {defineComponent,h} from '@vue/runtime-core';
//template -> render
export default defineComponent({
  render(){
    //创建虚拟节点：<div x="200" y="200"></div>
    return h("circle",{x:200,y:200});
  }
})