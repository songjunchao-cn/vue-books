<template>
  <div id="app">
    <div class="text">aaaa</div>
    <router-view/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  mounted () {
    this.$store.dispatch('setTest', 10).then(() => {
      console.log(this.test, 'state值')
    })
  },
  computed: {
    ...mapGetters(['test'])
  }
}
document.addEventListener('DOMContentLoaded', () => {
  const html = document.querySelector('html')
  let fontSize = window.innerWidth / 10
  fontSize = fontSize > 50 ? 50 : fontSize
  html.style.fontSize = fontSize + 'px'
})
</script>

<style lang="scss" scoped>
@import "./assets/styles/global.scss";
.text {
  font-family: "Days One";
  font-size: px2rem(50);
  color: orangered;
}
</style>
