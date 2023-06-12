import { isObject } from "@vue/shared"
import { reactive } from "./reactive"

export const enum ReactiveFlag {
  IS_REACTIVE = '__v_isReactive'
}

export const mutableHandlers = {
  get(target,key,reciver){
    // return target[key] 

    // 避免原始对象里的this问题,收集不到依赖
    // return Reflect.get(target,key,reciver)

    if(key === ReactiveFlag.IS_REACTIVE){
      return true
    }

    // 获取对象的属性的值，如果还是对象，就进一步作响应式处理
    let result = Reflect.get(target,key,reciver)
    if(isObject(result)){
      return reactive(result)
    }else{
      return result
    }
  },
  set(target,key,newValue,reciver){
    // target[key] = newValue
    return Reflect.set(target,key,newValue,reciver)
    // return true
  }
}