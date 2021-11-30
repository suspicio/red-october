import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    winners: null
  },

  mutations: {
    setUser (state, newUser) {
      state.user = newUser
    },

    updateUser (state, newData) {
      state.user.lastName = newData.lastName
      state.user.email = newData.email
      state.user.firstName = newData.firstName
    },

    setWinners (state, newWinners) {
      state.winners = newWinners
    }
  },

  actions: {
    async register ({ dispatch }, data) {
      return new Promise((resolve) => {
        axios.post('/signup', data).then(res => {
          if (res.data.success) {
            Vue.prototype.$toasted.success('Вы успешно зарегистрированы!')
            resolve(dispatch('askForSMSCode', data.phone))
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

    async editProfile ({ commit }, data) {
      return new Promise((resolve) => {
        let isAuth = false
        const sid = localStorage.getItem('sid')
        if (sid) {
          axios.post(`/user/update-user?sid=${sid}`, data)
            .then(res => {
              if (res.data.success) {
                isAuth = true
                commit('updateUser', data)
                Vue.prototype.$toasted.success('Изменения сохранены')
                resolve()
              } else {
                console.error(res.data.error)
                Vue.prototype.$toasted.error(res.data.error)
              }
            })
        }
        resolve(isAuth)
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

    async getWinner ({ commit }) {
      axios.post('/get-winners')
        .then(res => {
          if (res.data.success) {
            commit('setWinners', res.data.winners)
          } else {
            console.error(res.data.error)
          }
        })
        .catch(e => {
          console.error(e)
        })
    },

    async logOut ({ commit }) {
      let isAuth = false
      const sid = localStorage.getItem('sid')

      if (sid) {
        localStorage.removeItem('sid')
        await axios.post(`/signout?sid=${sid}`)
          .then(res => {
            if (res.data.success) {
              commit('setUser', null)
              isAuth = false
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
              resolve(res.data.error)
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
              resolve(res.data)
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

    async uploadUserInfo (_, data) {
      const sid = localStorage.getItem('sid')

      return new Promise(resolve => {
        axios.post(`/user/add-personals?sid=${sid}`, data)
          .then(res => {
            if (res.data.success) {
              Vue.prototype.$toasted.success('Данные успешно загружены')
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

    async getUserChecks () {
      const sid = localStorage.getItem('sid')

      return new Promise(resolve => {
        axios.post(`/user/get-receipts?sid=${sid}`)
          .then(res => {
            if (res.data.success) {
              resolve(res.data.receipts)
            }
            resolve(null)
          })
          .catch(e => {
            console.error(e)
            resolve(null)
          })
      })
    }
  }
})
