<template>
  <div class="app" v-boxLoading="true">
    <number-input></number-input>
    <img src="./utils/pinlun.jpg" v-decode-img/>
  </div>
</template>
<script>
export default {
  data () {
    return {
      show: true
    }
  },
  mounted () {
    let timer = setTimeout(() => {
      this.show = false
      clearTimeout(timer)
    }, 3000)
  }
}
</script>
<style lang="scss" scoped>
.app{
  height: 500px;
}
</style>
