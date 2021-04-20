import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions.js'
import mutations from './mutations.js'
import getters from './getters.js'

Vue.use(Vuex)

const Store =  new Vuex.Store({
  state: {
    islogin: false,
    message: null,
    singinMsg: null,
    allPosts: [],
    allComments: [],
    theUser: {}
  },
  mutations: mutations,
  actions: actions,
  getters: getters
})

export default Store
