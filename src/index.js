import { observable } from 'mobx'

const store = observableStorage()

export default {
  get size() {
    return store.size
  },

  has(key) {
    return store.has(key)
  },

  /**
   * @param {string} key
   * @param {string|number|object} defaultValue
   * @returns {*}
   */
  get(key, defaultValue) {
    const value = store.get(key)
    return value !== undefined ? value : defaultValue
  },

  /**
   * @param {string} key
   * @param {string|number|object} v
   * @returns {*}
   */
  set(key, v) {
    localStorage.setItem(key, JSON.stringify(v))
    store.set(key, v)
    return v
  },

  /**
   * @param {string} key
   * @returns {*}
   */
  remove(key) {
    localStorage.removeItem(key)
    store.delete(key)
  },

  clear() {
    localStorage.clear()
    store.clear()
  },

  keys() {
    return store.keys()
  },

  values() {
    return store.values()
  },

  entries() {
    return store.entries()
  },

  forEach(callback) {
    return store.forEach(callback)
  },

  map(callback) {
    return [...store.entries()].map(x => callback(x[1]))
  },
}

function observableStorage() {
  const state = {}
  if (global.localStorage) {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)
      state[key] = parseValue(localStorage.getItem(key))
    }
  }
  return observable.map(state)
}

function parseValue(value) {
  try {
    return JSON.parse(value)
  } catch(e) {
    return value
  }
}

function isNumber(str) {
  return !isNaN(parseInt(str, 10))
}
