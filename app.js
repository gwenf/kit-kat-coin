let lotion = require('lotion')
let shea = require('shea')

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
  if (tx.type === 'SEND') {
    if (!state.balances[tx.sender] || !state.balances[tx.receiver]) {
      // TODO: send error back that address must be created/initialized first
      return
    }

    let senderBalance = state.balances[tx.sender]
    let receiverBalance = state.balances[tx.receiver]
    const amount = parseInt(tx.amount, 10)

    // TODO: transaction needs to be properly verified
    // if (!verifyTx(tx) || tx.sender === tx.receiver) {
    //   return
    // }
    if (!Number.isInteger(amount) || tx.amount > senderBalance) {
      return
    }

    state.balances[tx.sender] = senderBalance - amount
    state.balances[tx.receiver] = receiverBalance + amount
  } else if (tx.type === 'INIT') {
    state.totalSupply -= 1000
    state.balances[tx.sender] = 1000
  }
})

app.useBlock(function (state, chainInfo) {
  // do something once per block here
})

app.use(shea('public/'))

let port = process.env.PORT || 3000
app.listen(port).then(appInfo => {
  console.log('app listening on port: ', port)
})
