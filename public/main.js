import axios from 'axios'
import utils from '../src/utilities'

const API_URL = 'http://localhost:3000'

var app = new Vue({
  el: '#app',
  data: function() {
    return {
      fields: [ 'show_keys' ],
      addresses: [],
      accountAddress: '',
      addressTo: '',
      amountTo: 0,
      addressBalance: 0
    }
  },
  methods: {
    send: function() {
      // should I have a confirmation box for sends?
      console.log(this.addressTo, this.amountTo)

      axios.post(`${API_URL}/txs`, {
        type: 'SEND',
        amount: this.amountTo,
        receiver: this.addressTo,
        sender: this.accountAddress
      })
      .then(function (res) {
        console.log(res);
      })
      .catch(function (err) {
        console.log(err);
      });
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
