<script setup lang="ts">
  import SteelBelt from './SteelBelt.vue'
  import TopSteelBelt from './TopSteelBelt.vue'
  import { useStore } from '../stores/store'
const store = useStore()
console.log(store.minuteAngle)
</script>

<template>
  <TopSteelBelt/>
  <div class="container">
    <div class="rect">
      <div class="nail-box">
        <div class="nail"></div>
        <div class="speaker-box"></div>
        <div class="nail"></div>
      </div>

      <div class="week-box"></div>
      <div class="hour-box"></div>

      <div class="nail-box">
        <div class="nail"></div>
        <div class="speaker-box"></div>
        <div class="nail"></div>
      </div>
    </div>
    <div class="mini-rect"></div>
    <div class="mini-circle">
      <div class="center-circle"></div>
      <div v-for="i in 12" :key="i" class="circle-scales" :style="{ transform: 'rotate(' + i * 30 + 'deg)' }">
        <div class="circle-scale"></div>
      </div>
      <div class="circle-scales" :style="{ transform: 'rotate(' + store.minuteAngle + 'deg)' }">
        <div class="circle-hand"></div>
      </div>
    </div>
    <div class="back-rect"></div>
    <div class="shadow-rect"></div>
    <div class="shadow-top-bar"></div>
    <div class="shadow-topright-bar"></div>
    <div class="shadow-right-bar"></div>
  </div>
  <SteelBelt/>
</template>

<style scoped>
@import '@/assets/font/fonts.css';

.center-circle {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background-color: #b02303;
  z-index: 100;
  box-shadow: 1px -1px 2px -2px rgba(255, 255, 255, 0.4), 1px -1px 2px 0px rgba(0, 0, 0, 0.5);
  transform: translate(-50%, -50%); /* 中央に配置するための補正 */
}

.circle-scale {
  width: 1px;
  height: 2px;
  background-color: #999999;
}

.circle-hand {
  position: absolute;
  width: 1px;
  height: 17px;
  margin-top:3px;
  background-color: #b02303;
  box-shadow: 1px -1px 2px -2px rgba(255, 255, 255, 0.4), 1px -1px 2px 0px rgba(0, 0, 0, 0.5);
}

.circle-scales {
  width: 1px;
  height: 40px;
  margin: 0 auto;
  position: absolute;
  top: 0;
  left: 20px;
  transform: translate(-50%, -50%); /* 中央に配置するための補正 */
}

.container {
  margin-top: -30px;
  position: relative; /* 子要素の絶対位置を基準にするために必要 */
  z-index: 100; /* armの下に来るように調整 */
  width: 190px;
  height: 150px;
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
  border-radius: 5px;
  top: 70px;
  left: 125px;
  background-color: #b38900;
  box-shadow: inset 5px -5px 10px 0 rgba(0, 0, 0, 0.5);
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

.shadow-top-bar {
  width: 163px;
  height: 30px;
  position: absolute;
  left: 15px;
  box-shadow: 0 -8px 5px -3px rgba(0, 0, 0, 0.7);
}

.shadow-topright-bar {
  z-index: 50;
  transform: rotate(45deg);
  transform-origin: left;
  width: 38px;
  height: 30px;
  position: absolute;
  left: 160px;
  top: -7px;
  box-shadow: 0 -8px 5px -3px rgba(0, 0, 0, 0.7);
}

.shadow-right-bar {
  width: 30px;
  height: 123px;
  position: absolute;
  left: 164px;
  top: 17px;
  box-shadow: 8px 0px 5px -3px rgba(0, 0, 0, 0.65);
}

.mini-circle {
  width: 40px;
  height: 40px;
  background-color: #999999;
  position: absolute;
  border-radius: 50%;
  z-index: 100;
  left: 125px;
  top: 10px;
  background-image: url(@/assets/iron-grip.png);
  background-size: 20px 20px; 
  border: 5px solid rgba(0, 0, 0, 0.3);
  box-shadow: inset 2px -2px 10px 0 rgba(0, 0, 0, 0.7),
    5px -5px 10px -8px rgba(255, 255, 255, 0.7),
    3px -4px 6px 0px rgba(0, 0, 0, 0.9);
}

.nail-box {
  margin-top: 5px;
  display: flex;
}

.nail {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: auto;
  background-color: #ffffff;
  background-image: url('@/assets/wood.png');
  border: solid 1px #191c17;
  box-shadow: inset 3px -4px 10px 0 rgba(0, 0, 0, 0.8);
}

.speaker-box {
  width: 60px;
  height: 10px;
  border-radius: 5px;
  background-color: #576250;
  background-image: url('@/assets/carbon-fibre.png');
  border: solid 1px #191c17;
  box-shadow: inset 3px -4px 10px 0 rgba(0, 0, 0, 0.8);
}

.week-box {
  /* 心電図的な感じにする */
  width: 80px;
  height: 20px;
  background-color: #ffffff;
  margin: 5px auto;
  box-shadow: inset 2px -2px 10px 0 rgba(0, 0, 0, 0.7);
    background: linear-gradient(
    20deg,
    rgba(92, 97, 85, 1) 0%,
    rgba(112, 115, 98, 1) 25%,
    rgba(92, 97, 85, 1) 50%,
    rgba(112, 115, 98, 1) 75%,
    rgba(92, 97, 85, 1) 100%
  );
    background-size: 8px 4px;
    border:1px #34372f solid;
}

.hour-box {
  width: 80px;
  height: 45px;
  background-color: #ffffff;
  margin: 7px auto;
  box-shadow: inset 2px -2px 10px 0 rgba(0, 0, 0, 0.7);
    background: linear-gradient(
    20deg,
    rgba(92, 97, 85, 1) 0%,
    rgba(112, 115, 98, 1) 25%,
    rgba(92, 97, 85, 1) 50%,
    rgba(112, 115, 98, 1) 75%,
    rgba(92, 97, 85, 1) 100%
  );
    background-size: 8px 4px;
    border:1px #34372f solid;
}
</style>
