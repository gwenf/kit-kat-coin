import { mount } from '@vue/test-utils'
import Wallet from '@/components/Wallet.vue'

import EC from 'elliptic'
const ec = new EC.ec('secp256k1')

const key = ec.genKeyPair()

// create addresses
// check balance
// send coins & check balance is correct
// make sure a user cannot send money if wallet will be negative

describe('Wallet.vue', () => {
  test('create addresses functionality works', () => {
    const wrapper = mount(Wallet)
    wrapper.find('.new-address-button').trigger('click')
    console.log('wrapper', wrapper.props(), key)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
