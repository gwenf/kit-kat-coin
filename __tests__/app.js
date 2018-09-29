import axios from 'axios'
import { mount } from '@vue/test-utils'
import Wallet from '@/components/Wallet.vue'

const API_URL = 'http://localhost:3000'

describe('Wallet.vue', () => {
  test('create addresses functionality works', () => {
    // const wrapper = mount(Wallet)
    // wrapper.find({ ref: 'testNewAddressButton' }).trigger('click')
    // expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('check address balance', async () => {
    const pubKey = '0485ab664893a54793169e07475a2da6b466895a6e8b89856defcfa6d00deefc0d95437ea49f762dffc180aaf674918a9b92110f202a4089f398a34024ba21f6af'
    const wrapper = mount(Wallet, {
      propsData: {
        accountAddress: pubKey
      }
    })

    await axios.post(`${API_URL}/txs`, {
      type: 'INIT',
      sender: pubKey
    })
    .then(function (res) {
      console.log(res);
    })
    .catch(function (err) {
      console.log(err);
    })

    const balance = await wrapper.vm.getBalance()
    // console.log(wrapper.vm.getBalance())

    expect(balance).toBe(1000)

    // wrapper.find({ ref: 'testNewAddressButton' }).trigger('click')
    // expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('send kitkatcoin from one address to another', () => {

  })

  test('user cannot overdraw balance', () => {

  })
})

// TEST ADDRESSES:

// Public Key:
// 0485ab664893a54793169e07475a2da6b466895a6e8b89856defcfa6d00deefc0d95437ea49f762dffc180aaf674918a9b92110f202a4089f398a34024ba21f6af
// Private Key:
// f4b52560813c5f69db99e965e67ac223e3c34fd4143cd19287f7147dbacd3323

// Public Key:
// 0400e521f55b7fa7caa99e9bba340e9df99b4ecd8c692b669c1a8a49f1bcdbed526787dd8d63ad9c320ac63eaaab88549e873e189516d525296bb67b19702aff24
// Private Key:
// d9aa11062022e68f40a288f391a68767377f59c0844350b9d8629aaf59afb242
