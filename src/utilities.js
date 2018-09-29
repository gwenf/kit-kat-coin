const EC = require('elliptic').ec
const ec = new EC('secp256k1')

function generateKeyPair() {
    const key = ec.genKeyPair()
    const privKey = key.priv.toString('hex')
    const pubKey = key.getPublic('hex')
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
