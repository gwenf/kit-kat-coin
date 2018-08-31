// front-end
var app = new Vue({
  el: '#app',
  data: {
    greeting: 'Welcome to your Vue.js app!'
  },
  methods: {
    send: function(to, amount) {
      console.log(to, amount)
      // sendTx(tx)
    },
    getState: function() {
      return getState()
    },
    getBalance: function(address) {
      console.log(address)
    }
  }
})

async function main() {
  let state = await getState()
  console.log('current blockchain state:')
  console.log(state)

  let result = await sendTx({ foo: 'bar' })
  console.log('result of submitting a transaction:')
  console.log(result)
}

main()

// helper functions
function getState() {
  return fetch('/state').then(res=>res.json())
}

function sendTx(tx) {
  return fetch('/txs', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'post',
    body: JSON.stringify(tx)
  }).then(res => res.json())
}
