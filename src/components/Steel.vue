<script setup lang="ts">
</script>

<template>
  <div class="container">
    <div class="rect"></div>
    <div class="mini-rect"></div>
    <div class="mini-circle"></div>
    <div class="back-rect"></div>
    <div class="shadow-rect"></div>
    <div class="shadow-top-bar"></div>
    <div class="shadow-topright-bar"></div>
    <div class="shadow-right-bar "></div>
  </div>
</template>

<style scoped>
@import '@/assets/font/fonts.css';

.container {
  position: relative; /* 子要素の絶対位置を基準にするために必要 */
  z-index: 100; /* armの下に来るように調整 */
}

.rect {
  width: 95px;
  height: 120px;
  position: absolute;
  top: 15px;
  left: 15px;
  background-color: #1e281c;
  z-index: 100;
  background-image: url('@/assets/light-mesh.png');
  box-shadow: 3px 3px 3px 1px rgba(0, 0, 0, 0.4), 5px -5px 6px 0px rgba(0, 0, 0, 0.7);
}

.mini-rect {
  width: 50px;
  height: 75px;
  position: absolute;
  border-radius:5px;
  top: 60px;
  left: 125px;
  background-color: #32382e;
   background-image: url('@/assets/bo-play.png');
  z-index: 100;
  box-shadow: 3px 3px 3px 1px rgba(0, 0, 0, 0.4), 5px -5px 6px 0px rgba(0, 0, 0, 0.7);
}

.back-rect {
  width: 190px;
  height: 150px;
  border-radius: 5px;
  position: absolute;
  background-color: #484848;
  background-image: url('@/assets/light-mesh.png');
  z-index: 70;
  box-shadow: 5px -5px 6px -6px rgba(255, 255, 255, 0.7), 5px -5px 6px 0px rgba(0, 0, 0, 0.9);
  clip-path: polygon(1rem 0px, calc(100% - 1rem) 0px, 100% 1rem, 100% calc(100% - 1rem), calc(100% - 1rem) 100%, 1rem 100%, 0px calc(100% - 1rem), 0px 1rem);
}

.shadow-rect {
  width: 190px;
  height: 150px;
  border-radius: 5px;
  position: absolute;
  top: 5px;
  left: 5px;
  background-color: #222222;
  background-image: url('@/assets/light-mesh.png');
  z-index: 60;
  clip-path: polygon(1rem 0px, calc(100% - 1rem) 0px, 100% 1rem, 100% calc(100% - 1rem), calc(100% - 1rem) 100%, 1rem 100%, 0px calc(100% - 1rem), 0px 1rem);
}

.shadow-top-bar{
    width: 163px;
    height: 30px;
    position:absolute;
    left:15px;
    box-shadow: 0 -8px 5px -3px rgba( 0, 0, 0, 0.7);

}
.shadow-topright-bar{
    z-index:50;
    transform:rotate(45deg);
    transform-origin:left;
    width: 38px;
    height: 30px;
    position:absolute;
    left:160px;
    top:-7px;
    box-shadow: 0 -8px 5px -3px rgba( 0, 0, 0, 0.7);
}
.shadow-right-bar{
    width: 30px;
    height: 123px;
    position:absolute;
    left:164px;
    top:17px;
    box-shadow: 8px 0px 5px -3px rgba( 0, 0, 0, 0.65);
}

</style>
