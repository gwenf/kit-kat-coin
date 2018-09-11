let lotion = require('lotion')
let shea = require('shea')

let init = require('./src/init')
init()

let app = lotion({
  initialState: {
    symbol: 'KKC',
    name: 'KitKatCoin',
    totalSupply: 10000000,
    balances: {}
  },
  devMode: process.env.PRODUCTION !== 'true'
})

app.use(function (state, tx, chainInfo) {
  console.log(state, tx)

  if (tx.type === 'SEND') {
    if (!state.balances[tx.sender] || !state.balances[tx.receiver]) {
      // TODO: send error back that address must be created/initialized first
      return
    }

    let senderBalance = state.balances[tx.sender]
    let receiverBalance = state.balances[tx.receiver]

    if (!verifyTx(tx) || tx.sender === tx.receiver) {
      return
    }
    if (!Number.isInteger(tx.amount) || tx.amount > senderBalance) {
        return
    }

    state.balances[tx.sender] = senderBalance - tx.amount
    state.balances[tx.receiver] = receiverBalance + tx.amount
  } else if (tx.type === 'init') {
    state.totalSupply -= 1000
    state.balances[tx.sender] = 1000
  }
})

app.useBlock(function (state, chainInfo) {
  // do something once per block here
})

app.use(shea('public/'))

let port = process.env.PORT || 3000
console.log('app listening on port: ', port)

app.listen(port).then(appInfo => {})
