let lotion = require('lotion')
let shea = require('shea')
let coins = require('coins')

let app = lotion({
  initialState: {
    count: 0
  },
  devMode: process.env.PRODUCTION !== 'true'
})

app.use(coins({
  name: 'kitkatcoin',
  initialBalances: {
    'EwgdQPd6SDubZzRajbJcMTK6pb8RenLMz': 1000000
  }
}))

app.use(function (state, tx, chainInfo) {
  // handle transactions here
  state.count++
})

app.useBlock(function (state, chainInfo) {
  // do something once per block here
})

app.use(shea('public/'))

let port = process.env.PORT || 3000
console.log('app listening on port: ', port)
app.listen(port).then(appInfo => {
  console.log(appInfo.GCI)
  // 'f6d671670ce307f71164c7e9b7c1d89c0cf5a6456ddf0a538d59bdbd33216ec5'
})
