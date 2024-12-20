export * from './counter'

import { createPinia } from "pinia"
import { createPersistedState } from "pinia-plugin-persistedstate"
	
const pinia = createPinia()

pinia.use(createPersistedState({
  storage: {
    setItem: uni.setStorageSync,
    getItem: uni.getStorageSync
  },
}))


export { pinia }