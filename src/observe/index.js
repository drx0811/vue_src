/**
 *
 * @param data
   * 把data中的数据都使用object.defineProperty()来劫持
   * 但是不能兼容ie8
 *
 */
import {arrayMethods} from "./arrayMethods.js"
import {def, isObject} from "../util";
class Observer {
  constructor(value) {
    def(value,"__ob__",this);
    if (Array.isArray(value)) {
      // 数组的方法重写
      value.__proto__=arrayMethods();
      this.observerArray(value)
    }else {
      this.walk(value);
    }
  }
  observerArray(value){
    for (let i = 0; i < value.length; i++) {
      observe(value[i])
    }
  }
  walk(data){
    let keys=Object.keys(data);
    keys.forEach((value,key)=>{
      defineReacive(data,key,value)
    })
  }
}

function defineReacive(data,key,value) {
  observe(value);
  Object.defineProperty(data,key,{
    get() {
      return value
    },
    set(v) {
      if (v===value) {
        return
      }
      observe(v);
      value=v
    }
  })
}

export function observe(data) {
  if (!isObject(data)) {
    return
  }
  return new Observer(data)
  console.log(data);
}
