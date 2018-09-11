const secp = require('secp256k1')
const { randomBytes } = require('crypto')

function generatePrivKey() {
    let privKey
    do {
        privKey = randomBytes(32)
    } while (!secp256k1.privateKeyVerify(privKey))

    return privKey.toString('hex')
}

// function getPrivKey() {
//     return Buffer.from(fs.readFileSync(path, 'utf8'), 'hex')
// }

function getPubKey(privKey) {
    return secp.publicKeyCreate(privKey).toString('hex')
}

function sendCoins() {

}

export default {
    generatePrivKey,
    getPubKey,
    sendCoins
}
