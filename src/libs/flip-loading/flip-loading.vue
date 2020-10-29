<template>
  <div class="flip-loading-content">
    <div class="flip-loading"></div>
  </div>
</template>
<script>
export default {
  name: 'flipLoading'
}
</script>
<style lang="scss" scoped>
.flip-loading-content{
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: hsla(0,0%,100%,.9);
  transition: opacity .3s;
  .flip-loading{
    width: 40px;
    height: 40px;
    background-color: #00adb5;
    margin: 50px auto;
    -webkit-animation: rotateplane 1.2s infinite ease-in-out;
    animation: rotateplane 1.2s infinite ease-in-out;
  }
  @-webkit-keyframes rotateplane {
    0% { -webkit-transform: perspective(120px) }
    50% { -webkit-transform: perspective(120px) rotateY(180deg) }
    100% { -webkit-transform: perspective(120px) rotateY(180deg)  rotateX(180deg) }
  }
  @keyframes rotateplane {
    0% {
      transform: perspective(120px) rotateX(0deg) rotateY(0deg);
      -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg)
    } 50% {
      transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
      -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg)
    } 100% {
      transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
      -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
    }
  }
}
</style>
