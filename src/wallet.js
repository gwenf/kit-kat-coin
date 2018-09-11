function createWallet() {
    let priv = utils.generatePrivateKey()
    let pub = utils.generatePublicKey(priv)
    return {priv: priv, pub: pub}
}

module.exports = {
    createWallet
}
