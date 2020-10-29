<template>
  <div class="lyc-circle-loading" ref="content">
    <div class="circle-loading"></div>
  </div>
</template>
<script>
export default {
  name: 'circleLoading',
  mounted () {
    this.$nextTick(() => {
      let dom = this.$refs['content']
    })
  }
}
</script>
<style lang="scss" scoped>
.lyc-circle-loading{
  position: absolute;
  background-color: hsla(0,0%,100%,.9);
  transition: opacity .3s;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.circle-loading{
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 50%;
  height: 50%;
  max-width: 40px;
  max-height: 40px;
  margin: auto;
  border-radius: 50%;
  overflow: hidden;
  background-color: rgba(0, 169, 178,.2);
  &::before {
    content: "";
    width: 70px; // 50 * √2
    height: 70px; // 50 * √2
    background-color: #00adb5;
    position: absolute;
    left: 50%;
    bottom: 50%;
    z-index: 1;
    transform-origin: left bottom;
    animation: rotate 1s infinite linear;
  }
  &::after {
    content: "";
    width: 30px;
    height: 30px;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    background-color: #fff;
    z-index: 2;
    border-radius: 50%;
  }
  @keyframes rotate {
    0% {
      transform: rotate(0);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
