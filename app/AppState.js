import { EventEmitter } from "./Utils/EventEmitter.js"

class AppState extends EventEmitter {

  /**@type {import('./Models/Pokemon').Pokemon[]} */
  pokemons = []
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
