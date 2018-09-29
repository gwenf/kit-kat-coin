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
      throw new Error('Invalid account address in transaction.')
    }
    if (tx.sender === tx.receiver) {
      throw new Error('Invalid account address in transaction.')
    }

    let senderBalance = state.balances[tx.sender]
    let receiverBalance = state.balances[tx.receiver]
    const amount = parseInt(tx.amount, 10)

    // TODO: transaction needs to be properly verified
    // if (!verifyTx(tx) || tx.sender === tx.receiver) {
    //   return
    // }
    if (!Number.isInteger(amount) || tx.amount > senderBalance || tx.amount > state.totalSupply) {
      throw new Error('Invalid amount.')
    }

    state.balances[tx.sender] = senderBalance - amount
    state.balances[tx.receiver] = receiverBalance + amount
  } else if (tx.type === 'INIT') {
    // TODO: check if valid key
    if (state.totalSupply >= 1000) {
      state.totalSupply -= 100000
      state.balances[tx.sender] = 1000
    } else {
      throw new Error('Not enough coins left in bank to initialize a new acount with funds.')
    }
  }
})

app.useBlock(function (state, chainInfo) {
  // do something once per block here
})

app.use(shea('public/'))

let port = process.env.PORT || 3000
console.log('app listening on port: ', port)

app.listen(port).then(appInfo => {})
