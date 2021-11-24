import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null
  },

  mutations: {
    setUser (state, newUser) {
      state.user = newUser
    }
  },

  actions: {
    async register ({ dispatch }, data) {
      return new Promise((resolve) => {
        axios.post('/signup', data).then(res => {
          if (res.data.success) {
            resolve(dispatch('askForSMSCode', { phone: data.phone }))
          } else {
            console.error(res.data.error)
            Vue.prototype.$toasted.error(res.data.error)
          }
        }).catch((e) => {
          console.error(e)
          resolve()
        })
      })
    },

    async signin ({ dispatch }, data) {
      return new Promise((resolve) => {
        axios.post('/signin', data)
          .then(res => {
            if (res.data.success) {
              localStorage.setItem('sid', res.data.sid)
              resolve(dispatch('isAuth'))
            } else {
              console.error(res.data.error)
              Vue.prototype.$toasted.error(res.data.error)
            }
          })
          .catch((e) => {
            console.error(e)
            resolve()
          })
      })
    },

    async isAuth ({ commit }) {
      let isAuth = false
      const sid = localStorage.getItem('sid')
      if (sid) {
        await axios.post(`/is-auth?sid=${sid}`)
          .then(res => {
            if (res.data.success) {
              commit('setUser', res.data.user)
              isAuth = true
            } else {
              console.error(res.data.error)
              Vue.prototype.$toasted.error(res.data.error)
            }
          })
          .catch(e => {
            console.error(e)
          })
      }
      return isAuth
    },

    async askForSMSCode (_, phone) {
      return new Promise(resolve => {
        axios.post('/send-password', { phone })
          .then(res => {
            if (!res.data.success) {
              console.error(res.data.error)
              Vue.prototype.$toasted.error(res.data.error)
            }
            resolve(res.data.success)
          })
          .catch(e => {
            console.log(JSON.stringify(e))
            console.error(e)
            resolve(false)
          })
      })
    },

    async uploadReceiptFile (_, file) {
      const formData = new FormData()

      formData.append('receipt', file)

      const sid = localStorage.getItem('sid')

      return new Promise(resolve => {
        axios.post(`/user/upload-receipt?sid=${sid}`, formData)
          .then(res => {
            if (res.data.success) {
              Vue.prototype.$toasted.success('Чек успешно загружен')
            } else {
              Vue.prototype.$toasted.error(res.data.error)
            }
            resolve(res.data.success)
          })
          .catch(e => {
            console.error(e)
            resolve(false)
          })
      })
    },

    async uploadReceiptManual (_, data) {
      const sid = localStorage.getItem('sid')

      return new Promise(resolve => {
        axios.post(`/user/add-receipt?sid=${sid}`, data)
          .then(res => {
            if (res.data.success) {
              Vue.prototype.$toasted.success('Чек успешно загружен')
            } else {
              Vue.prototype.$toasted.error(res.data.error)
            }
            resolve(res.data.success)
          })
          .catch(e => {
            console.error(e)
            resolve(false)
          })
      })
    }
  }
})
