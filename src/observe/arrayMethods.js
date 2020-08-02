let oldArrayMethods=Array.prototype;
let methods=['unshift','push','shift','pop','revserse','sort','splice']
export const arrayMethods=Object.create(oldArrayMethods)
methods.forEach(item=>{
  arrayMethods[item]=function (...args) {
    const result=oldArrayMethods.apply(this,args)
    // 如果方法是push 或者 unshift splice 添加新的数据也是数组的话
    let inserted;
    switch (methods) {
      case 'push':
        inserted=args;
        break;
      case 'unshift':
        inserted=args;
        break;
      case 'splice':
        inserted=args.slice(2);
    }
    if (inserted) {
      
    }
    return result;
  }
})