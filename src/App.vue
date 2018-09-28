<template>
  <div id="app">

    Hello there
    <wallet />

  </div>
</template>

<script>
import Wallet from './components/Wallet.vue'

export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    Wallet
  }
}
</script>
