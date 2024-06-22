<script setup lang="ts">
  import SimpleBelt from './SimpleBelt.vue'
</script>

<template>
<div class=container>
    
  
  <div class="circle-container">
    <div class="circle">
      <div class="center"></div>
      <div class="hand-base" :style="{transform:'rotate('+360+'deg)'}">
        <div class="time-hand"></div>
      </div>
      <div class="hand-base" :style="{transform:'rotate('+120+'deg)'}">
        <div class="min-hand"></div>
      </div>
      <div v-for="i in 60" :key="i" class="scale" :style="{ transform: 'rotate(' + i * 6 + 'deg)' }">
        <div v-if="i%5 == 0">
          <div class="big-scales"></div>
        </div>
        <div v-else>
          <div class="scales"></div>
        </div>
      </div>
    </div>
    <div class="arms">
      <div class="arm"></div>
      <div class="arm"></div>
    </div>


    <div class="shadow-circle"></div>
  </div>
    <SimpleBelt/>
</div>
  
</template>


<style scoped>
.container {
  position: relative; /* 子要素の絶対位置を基準にするために必要 */
  z-index: 100; /* armの下に来るように調整 */
}
.arms{
  position:absolute;
  top:155px;
  display:flex;
  width: 170px;
  height:30px;
}

.arm{
  width:10px;
  height:30px;
  background:#000000;
  border-radius:0px 0px 50% 50%;
}
.circle-container{
  width:170px;
  height:170px;
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
}

.big-scales {
  width: 1px;
  height: 5px;
  background-color: #bbbbbb;
}

.hand-base {
  width: 2px;
  height: 150px;
  position: absolute;
  top: 0;
}

.time-hand {
  width: 2px;
  height: 50px;
  margin-top: 35px;
  background-color: #ddddee;
  box-shadow: 1px -1px 2px -2px rgba(255, 255, 255, 0.7), 1px -1px 2px 0px rgba(0, 0, 0, 0.9);
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
