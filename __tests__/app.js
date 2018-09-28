import { shallowMount } from '@vue/test-utils'
import Wallet from '@/components/Wallet.vue'

// create addresses
// check balance
// send coins & check balance is correct
// make sure a user cannot send money if wallet will be negative

test('create addresses functionality works', () => {
  // console.log(compiler.compile(vueApp))
  const wrapper = shallowMount(Wallet)
  console.log(wrapper)
  expect(3).toBe(3)
})
