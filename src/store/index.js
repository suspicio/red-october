import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {}
  },
  mutations: {
    setUser (state, newUser) {
      state.user = newUser
    },
    getUser (state) {
      return state.user
    }
  },
  actions: {
    async register (_, data) {
      return new Promise((resolve) => {
        axios.post('/signup', data).then(res => {
          if (res.data.success) {
            axios.post(`/send-password?sid=${res.data.sid}`, { phone: data.phone }).then(res => {
              resolve()
            })
          } else {
            console.error(res.data.error)
          }
        }).catch((e) => {
          console.error(e)
          resolve()
        })
      })
    },

    async signin ({ commit }, data) {
      console.log(data)
      return new Promise((resolve) => {
        axios.post('/signin', data).then(res => {
          console.log(res.data)
          if (res.data.success) {
            console.log(res.data.sid)
            axios.post(`/is-auth?sid=${res.data.sid}`).then(res => {
              commit('setUser', res.data.user)
              resolve()
            })
          } else {
            console.error('here' + res.data.error)
          }
        }).catch((e) => {
          console.error(e)
          resolve()
        })
      })
    }
  },
  modules: {}
})
