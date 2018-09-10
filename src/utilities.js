const secp = require('secp256k1')

function generatePrivateKey() {
    let privKey
    do {
        privKey = randomBytes(32)
    } while (!secp256k1.privateKeyVerify(privKey))

    return privKey.toString('hex')
}

function getPubKey(privKey) {
    return secp.publicKeyCreate(privKey).toString('hex')
}

function sendCoins() {

}

module.exports = {
    generatePrivateKey,
    getPubKey,
    sendCoins
}
