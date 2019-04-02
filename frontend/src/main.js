// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(Vuetify)
Vue.config.productionTip = false

// state management
var store = {
  debug: true,
  state: {
      // metamask state variable
      metamask: {
          web3DefaultAccount: '',
          metamaskInstalled: false,
          networkId: '',
      },

      // local web3 instance(not metamask)
      web3 : null,

  },
  networkReady() {
      return this.getNetworkId() != '' && this.getMetamaskInstalled() && this.getWeb3DefaultAccount() != ''
  },
  setNetworkId(networkId) {
      this.state.metamask.networkId = networkId
  },
  getNetworkId() {
      return this.state.metamask.networkId
  },

  setWeb3DefaultAccount(account) {
      this.state.metamask.web3DefaultAccount = account
  },
  getWeb3DefaultAccount() {
      return this.state.metamask.web3DefaultAccount
  },

  setMetamaskInstalled(){
      this.state.metamask.metamaskInstalled = true
  },
  getMetamaskInstalled(){
      return this.state.metamask.metamaskInstalled
  },

  getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min
  }
}


/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    globalState: store,
},
  router,
  components: { App },
  template: '<App/>'
})
