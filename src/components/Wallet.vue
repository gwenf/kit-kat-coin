<template>
  <div>
    <div class="columns">
      <div class="column is-6 is-offset-one-quarter">
        <header>
          <h2>KitKatCoin Wallet</h2>
          <p><i>Each address created is initialized with 1,000 KKC :)</i></p>
        </header>
        <div class="field">
          <p class="control">
            <button class="button is-success new-address-button" @click="createNewAddress">
              Create New Address
            </button>
          </p>
        </div>
        <div class="table-header">
            All Addresses:
        </div>
        <b-table striped bordered hover :items="addresses" :fields="fields">
          <template slot="keys" slot-scope="row">
            Account #{{ row.index + 1 }}
            <b-button size="sm" @click.stop="row.toggleDetails" class="mr-2">
              {{ row.detailsShowing ? 'Hide' : 'Show'}} Details
            </b-button>
          </template>
          <template slot="row-details" slot-scope="row">
            <b-card>
              <b-row class="mb-2">
                <b-col sm="3" class="text-sm-right"><b>Public Key:</b></b-col>
                <b-col>{{ row.item.pubKey }}</b-col>
              </b-row>
              <b-row class="mb-2">
                <b-col sm="3" class="text-sm-right"><b>Private Key:</b></b-col>
                <b-col>{{ row.item.privKey }}</b-col>
              </b-row>
              <b-button size="sm" @click="row.toggleDetails">Hide Details</b-button>
            </b-card>
          </template>
        </b-table>
      </div>
    </div>
    <div class="columns">
      <div class="column is-6 is-offset-one-quarter">
        Check Balance (paste in public key and press enter):
        <div class="field has-addons">
          <p class="control">
            <input @keyup.enter="getBalance" v-model="accountAddress" class="input" type="text" placeholder="Account Address (public key)">
          </p>
          <p class="control">
            <a class="button is-static">
              {{ addressBalance }} KKC
            </a>
          </p>
        </div>

        Send to:
        <div class="field">
          <p class="control has-icons-left has-icons-right">
            <input v-model="addressTo" class="input" type="text" placeholder="Contract Address">
            <span class="icon is-small is-left">
              <i class="fa fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fa fa-check"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control has-icons-left">
            <input v-model="amountTo" class="input" type="text" placeholder="Amount">
            <span class="icon is-small is-left">
              <i class="fa fa-dollar sign"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control">
            <button class="button is-success" @click="send">
              Send
            </button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import utils from '../utilities'

const API_URL = 'http://localhost:3000'

export default {
  name: 'wallet',
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
      console.log(privKey, pubKey)

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
}
</script>
