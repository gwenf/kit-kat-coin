import Vue from 'vue'
import axios from 'axios'
import utils from './utilities'

const API_URL = 'http://localhost:3000'

// importing Vue into this file and exporting this object only
// for testing purposed
export default new Vue({
  el: '#app',
  data: function() {
    return {
      fields: [ 'keys' ],
      addresses: [],
      accountAddress: '',
      addressTo: '',
      amountTo: 0,
      addressBalance: 0
    }
  },
  methods: {
    send: async function() {
      // TODO: add confirm for sends
      // TODO: move these api calls to vuex
      await axios.post(`${API_URL}/txs`, {
        type: 'SEND',
        amount: this.amountTo,
        receiver: this.addressTo,
        sender: this.accountAddress
      })

      this.amountTo = 0
      this.addressTo = ''
      window.alert('Transaction was successful!')

      this.getBalance()
    },
    getState: function() {
      return fetch('/state').then(res=>res.json())
    },
    createNewAddress: function() {
      const { privKey, pubKey } = utils.generateKeyPair()
      this.addresses.push({
        privKey,
        pubKey
      })

      axios.post(`${API_URL}/txs`, {
        type: 'INIT',
        sender: pubKey
      })
      .then(function (res) {
        console.log(res);
      })
      .catch(function (err) {
        console.log(err);
      });
    },
    getBalance: async function() {
      const state = await axios.get('/state')
      this.addressBalance = state.data.balances[this.accountAddress]
    }
  }
})
