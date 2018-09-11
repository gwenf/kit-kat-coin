var EC = require('elliptic').ec
var ec = new EC('secp256k1')

function generateKeyPair() {
    var key = ec.genKeyPair()
    var privKey = key.priv.toString('hex')
    var pubKey = key.getPublic('hex')
    return {
        pubKey,
        privKey
    }
}

function verify() {

}

function sign() {

}

export default {
    generateKeyPair,
    verify,
    sign
}
