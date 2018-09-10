// This file was modified from: https://github.com/mappum/coins

let fs = require('fs')
let os = require('os')
let { randomBytes } = require('crypto')
// let wallet = require('./wallet.js')
const utils = require('./utilities')

function main() {
  // generates or loads wallet from default path (~/.coins)
  let path = os.homedir() + '/.coins'
  let privKey
  if (!fs.existsSync(path)) {
    privKey = utils.generatePrivateKey()
    fs.writeFileSync(path, privKey.toString('hex'))
  } else {
    privKey = Buffer.from(fs.readFileSync(path, 'utf8'), 'hex')
  }

  let address = utils.getPubKey(privKey)

  console.error('Your Address:')
  console.log(address)
  console.error(`
  Your wallet seed is stored at "~/.coins",
  make sure to keep it secret!`)
}

module.exports = main;
