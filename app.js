let lotion = require('lotion')
let shea = require('shea')
// let coins = require('coins')
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
  // either initialize an address with funds or transfer funds here :)

})

app.useBlock(function (state, chainInfo) {
  // do something once per block here
})

app.use(shea('public/'))

let port = process.env.PORT || 3000
console.log('app listening on port: ', port)

app.listen(port).then(appInfo => {})
