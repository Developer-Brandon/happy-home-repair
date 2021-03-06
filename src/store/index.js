import Vue from 'vue'
import Vuex from 'vuex'
import 'vue-progress-path/dist/vue-progress-path.css'
import VueProgress from 'vue-progress-path'

import app from './App'
import home from './modules/Home'
import about from './modules/About'
import notice from './modules/Notice'
import products from './modules/Products'

Vue.use(Vuex)

Vue.use(VueProgress, {
  // defaultShape: 'circle',
})

const entryPointOfStore = () => new Vuex.Store({
  namespaced: true,
  modules: {
    app,
    home,
    about,
    notice,
    products,
  },
})

export default entryPointOfStore()
