<template>
  <div id="app">

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
