import {initState} from "./state";

export function MixInit(Vue) {
  Vue.prototype._init=function (options) {
    //数据劫持
    const vm=this;// vue 中的this.$options指代用户传递的数据；
    vm.$options=options;
    //初始化状态
    initState(vm)
  }
}