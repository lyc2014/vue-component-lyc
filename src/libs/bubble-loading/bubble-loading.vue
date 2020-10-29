<template>
  <div class="bubble-loading">
    <div class="load load1"></div>
    <div class="load load2"></div>
    <div class="load"></div>
  </div>
</template>
<script>
export default {
  name: 'bubbleLoading'
}
</script>
<style lang="scss" scoped>
.bubble-loading{
  position: absolute;
  justify-content: center;
  display: inline-flex;
  align-items: center;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  background-color: hsla(0,0%,100%,.9);
  .load {
    width: 20px;
    height: 20px;
    background-color: #00adb5;
    border-radius: 100%;
    display: inline-block;
    -webkit-animation: bouncedelay 1.4s infinite ease-in-out;
    animation: bouncedelay 1.4s infinite ease-in-out;
    /* Prevent first frame from flickering when animation starts */
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
  .load1 {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }
  .load2 {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }
  @-webkit-keyframes bouncedelay {
    0%, 80%, 100% { -webkit-transform: scale(0.0) }
    40% { -webkit-transform: scale(1.0) }
  }
  @keyframes bouncedelay {
    0%, 80%, 100% {
      transform: scale(0.0);
      -webkit-transform: scale(0.0);
    } 40% {
      transform: scale(1.0);
      -webkit-transform: scale(1.0);
    }
  }
}
</style>
