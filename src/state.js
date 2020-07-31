import { observe } from "./observe";

export function initState(vm) {
  // vue 的数据来源，props
  const opts = vm.$options;
  if (opts.props) {
    initProps(vm)
  }
  if (opts.methods) {
    initMethod(vm)
  }
  if (opts.data) {
    initData(vm)
  }
  if (opts.computed) {
    initComputed(vm)
  }
  if (opts.watch) {
    initWatch(vm)
  }

  function initProps() {
  }

  function initMethod() {
  }

  function initData(vm) {
    let data = vm.$options.data;
    data = vm._data = typeof data === "function" ? data.call(vm) : data;// 如果不适用call的话，则调用者指向window，不符合要求
    // 数据劫持，数据改变驱动视图变化 object.defineProperty();
    observe(data);
  }

  function initComputed() {
  }
  function initWatch() {
  }


}