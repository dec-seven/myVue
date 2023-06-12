import { isObject } from "@vue/shared";
import { ReactiveFlag, mutableHandlers } from "./baseHandlers";


// 用于缓存，形式为：{原始对象:代理对象} 
const reactiveMap = new WeakMap()


export function reactive (target) {
  // 1.如果不是对象，直接返回，不做处理
  if(!isObject(target)) return
  
  // 如果缓存中有，直接返回缓存中的内容
  const  existyingProxy = reactiveMap.get(target) 
  if(existyingProxy){
    return existyingProxy
  }

  // 如果target已经是代理对象了，原封不动返回
  if(target[ReactiveFlag.IS_REACTIVE]){
    return target
  }

  // 2.为目标对象生成一个代理对象
  const proxy = new Proxy(target,mutableHandlers)

  // proxy['__v_isReactive'] = true

  // 把原始对象和代理对象成对缓存
  reactiveMap.set(target,proxy)

  // 3.返回代理对象
  return proxy
}