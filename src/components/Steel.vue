<script setup lang="ts">
  import SteelBelt from './SteelBelt.vue'
</script>

<template>
  <div class="container">
    <div class="rect">
      <div class="nail-box">
        <div class=nail></div>
        <div class="speaker-box"></div>
        <div class=nail></div>
      </div>

      <div class="week-box"></div>
      <div class="hour-box"></div>

      <div class="nail-box">
        <div class=nail></div>
        <div class="speaker-box"></div>
        <div class=nail></div>
      </div>
    </div>
    <div class="mini-rect"></div>
    <div class="mini-circle"></div>
    <div class="back-rect"></div>
    <div class="shadow-rect"></div>
    <div class="shadow-top-bar"></div>
    <div class="shadow-topright-bar"></div>
    <div class="shadow-right-bar "></div>
  </div>
    <SteelBelt/>
</template>

<style scoped>
@import '@/assets/font/fonts.css';

.container {
  position: relative; /* 子要素の絶対位置を基準にするために必要 */
  z-index: 100; /* armの下に来るように調整 */
  width:190px;
  height:150px;
}

.rect {
  width: 95px;
  height: 120px;
  position: absolute;
  top: 15px;
  left: 15px;
  background-color: #1e281c;
  z-index: 100;
  background-image: url('@/assets/cartographer.png');
  box-shadow: 3px 3px 3px 1px rgba(0, 0, 0, 0.4), 5px -5px 6px 0px rgba(0, 0, 0, 0.7);
}

.mini-rect {
  width: 50px;
  height: 65px;
  position: absolute;
  border-radius:5px;
  top: 70px;
  left: 125px;
  background-color: #b38900;
   background-image: url('@/assets/bo-play.png');
  z-index: 100;
  box-shadow: 3px 3px 3px 1px rgba(0, 0, 0, 0.4), 5px -5px 6px 0px rgba(0, 0, 0, 0.4);
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

.mini-circle{
  width: 50px;
  height:50px;
  background-color:#ffffff;
  position:absolute;
  border-radius:50%;
  z-index:100;
  left:125px;
  top:10px;
}

.nail-box{
  margin-top:5px;
  display:flex;
}


.nail{
  width:10px;
  height:10px;
  border-radius:50%;
  margin:auto;
  background-color:#ffffff;
  background-image: url('@/assets/wood.png');
  border: solid 1px #191c17;
  box-shadow: inset 3px -4px 10px 0 rgba(0, 0, 0, 0.8);
}

.speaker-box{
  width:60px;
  height:10px;
  border-radius:5px;
  background-color: #576250;
  background-image: url('@/assets/carbon-fibre.png');
  border: solid 1px #191c17;
  box-shadow: inset 3px -4px 10px 0 rgba(0, 0, 0, 0.8);
}
.week-box{
/*  心電図的な感じにする*/
  width:80px;
  height:20px;
  background-color:#ffffff;
  margin:5px auto;
  box-shadow: inset 10px -10px 10px 0 rgba(0, 0, 0, 0.6);
}
.hour-box{
  width:80px;
  height:50px;
  background-color:#ffffff;
  margin:7px auto;
  box-shadow: inset 10px -10px 10px 0 rgba(0, 0, 0, 0.6);
}

</style>
