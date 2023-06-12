var VueReactivity = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // packages/reactivity/src/index.ts
  var src_exports = {};
  __export(src_exports, {
    effect: () => effect,
    reactive: () => reactive
  });

  // packages/shared/src/index.ts
  function isObject(value) {
    return typeof value === "object" && value !== null;
  }

  // packages/reactivity/src/baseHandlers.ts
  var mutableHandlers = {
    get(target, key, reciver) {
      if (key === "__v_isReactive" /* IS_REACTIVE */) {
        return true;
      }
      let result = Reflect.get(target, key, reciver);
      if (isObject(result)) {
        return reactive(result);
      } else {
        return result;
      }
    },
    set(target, key, newValue, reciver) {
      return Reflect.set(target, key, newValue, reciver);
    }
  };

  // packages/reactivity/src/reactive.ts
  var reactiveMap = /* @__PURE__ */ new WeakMap();
  function reactive(target) {
    if (!isObject(target))
      return;
    const existyingProxy = reactiveMap.get(target);
    if (existyingProxy) {
      return existyingProxy;
    }
    if (target["__v_isReactive" /* IS_REACTIVE */]) {
      return target;
    }
    const proxy = new Proxy(target, mutableHandlers);
    reactiveMap.set(target, proxy);
    return proxy;
  }

  // packages/reactivity/src/effect.ts
  function effect() {
  }
  return __toCommonJS(src_exports);
})();
//# sourceMappingURL=reactivity.global.js.map
