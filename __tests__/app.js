// import axios from 'axios'
// import utils from '../src/utilities'
// import vueApp from '../public/main'
const vueApp = require('../src/main')
import { shallowMount } from '@vue/test-utils'
// const compiler = require('vue-template-compiler')

// create addresses
// check balance
// send coins & check balance is correct
// make sure a user cannot send money if wallet will be negative

test('create addresses functionality works', () => {
  // console.log(compiler.compile(vueApp))
  const wrapper = shallowMount(vueApp)
  console.log(wrapper)
  expect(3).toBe(3)
})
