import axios from 'axios'
import utils from '../src/utilities'

const API_URL = 'http://localhost:3000'

var app = new Vue({
  el: '#app',
  data: function() {
    return {
      addresses: [],
      addressTo: '',
      amountTo: 0,
      addressBalance: 0
    }
  },
  methods: {
    send: function() {
      console.log(this.addressTo, this.amountTo)
      // sendTx(tx)
      axios.post(`${API_URL}/txs`, {
        firstName: 'Gwen'
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
      const privKey = utils.generatePrivKey()
      const pubKey = utils.getPubKey(privKey)
      this.addresses.push({
        privKey,
        pubKey
      })
    },
    getBalance: function(address) {
      console.log(address)
    }
  }
})

// helper functions
// function sendTx(tx) {
//   return fetch('/txs', {
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     method: 'post',
//     body: JSON.stringify(tx)
//   }).then(res => res.json())
// }
