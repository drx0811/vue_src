
export function initState(vm) {
  // vue 的数据来源，props
  const opts=vm.$options;
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
    initWatch (vm)
  }

  function initProps() {}
  function initMethod() {}
  function initData(vm) {
    console.log(vm.$options.data);
  }
  function initComputed() {}
  function initWatch() {}


}