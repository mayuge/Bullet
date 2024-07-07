<script setup lang="ts">
import SimpleBelt from './SimpleBelt.vue'
import TopSimpleBelt from './TopSimpleBelt.vue'
import { ref } from 'vue'

const hanahudaColor = ref([
  ['#2B2923'],
  ['#1F1D1C'],
  ['#78D244'],
  ['#FCDBDE'],
  ['#5B336F'],
  ['#43A9C4'],
  ['#FE4136'],
  ['#FDAA4F'],
  ['#FF362C'],
  ['#F8F031'],
  ['#FFA953'],
  ['#389CB6'],
  ['#693D7C'],
])
</script>

<template>
  <TopSimpleBelt/>
  <div class="container">
      <div class="circle">
        <div class="center"></div>
        <div class="hand-base" :style="{transform:'rotate('+360+'deg)'}">
          <div class="time-hand"></div>
        </div>
        <div class="hand-base" :style="{transform:'rotate('+120+'deg)'}">
          <div class="min-hand"></div>
        </div>
        <div v-for="i in 60" :key="i" class="scale" :style="{ transform: 'rotate(' + i * 6 + 'deg)' }">
          <div v-if="i % 5 === 0" class="big-scales-container">
            <div class="big-scales" :style="{ backgroundColor: hanahudaColor[Math.floor(i / 5)][0] }"></div>
            <div class="big-scales" :style="{ backgroundColor: hanahudaColor[Math.floor(i / 5)][0] }"></div>
          </div>
          <div v-else>
            <div class="scales"></div>
          </div>
        </div>
      </div>
      <div class="shadow-circle"></div>
  </div>
  <SimpleBelt/>
</template>

<style scoped>
.container {
  margin-top:-10px;
  width: 170px;
  height: 170px;
  position: relative;
  z-index: 100;
}

.circle-container {
  width: 170px;
  height: 170px;
}

.center {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  position: absolute;
  background-color: #ffffee;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  box-shadow: 1px -1px 2px -2px rgba(255, 255, 255, 0.7), 1px -1px 2px 0px rgba(0, 0, 0, 0.9);
}

.scale {
  width: 1px;
  height: 150px;
  margin: 0 auto;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
}

.scales {
  width: 1px;
  height: 2px;
  background-color: #262626;
  z-index: 30;
}

.big-scales-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.big-scales {
  margin-top: 2px;
  width: 2px;
  height: 8px;
}

.hand-base {
  width: 2px;
  height: 150px;
  position: absolute;
  top: 0;
  z-index: 80;
}

.time-hand {
  width: 2px;
  height: 50px;
  margin-top: 35px;
  background-color: #ddddee;
  box-shadow: 1px -1px 2px -2px rgba(255, 255, 255, 0.7), 1px -1px 2px 0px rgba(0, 0, 0, 0.9);
  z-index: 50;
}

.min-hand {
  width: 2px;
  height: 70px;
  margin-top: 15px;
  background-color: #ddddee;
  box-shadow: 1px -1px 2px -2px rgba(255, 255, 255, 0.7), 1px -1px 2px 0px rgba(0, 0, 0, 0.9);
}

.circle {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 10px solid rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  position: absolute;
  z-index: 80;
  background-image: url(@/assets/alum.png);
  background-color: #454545;
  background-size: cover;
  box-shadow: inset 5px -5px 10px 0 rgba(0, 0, 0, 0.5);
}

.shadow-circle {
  width: 170px;
  height: 170px;
  border-radius: 50%;
  position: absolute;
  top: 1px;
  left: 1px;
  background-color: #333333;
  z-index: 70;
  box-shadow: 5px -5px 10px -10px rgba(255, 255, 255, 0.7), 5px -5px 6px 0px rgba(0, 0, 0, 0.9);
}
</style>
