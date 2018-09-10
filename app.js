let lotion = require('lotion')
let shea = require('shea')
// let coins = require('coins')
let init = require('./src/init')
init()

let app = lotion({
  initialState: {
    count: 0
  },
  devMode: process.env.PRODUCTION !== 'true'
})

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
})
