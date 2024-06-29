<script setup lang="ts">
  import SmartBelt from './SmartBelt.vue'
</script>

<template>
  <div class="container">
    <div class="circle">
      <div class="displayZero">零二四五</div>
        <img src="@/assets/umbrella.svg"class="umbrella">
    </div>
    <div class="shadow-circle"></div>
  </div>
  <SmartBelt/>
</template>


<style scoped>
@import '@/assets/font/fonts.css';
.container {
  position: relative; /* 子要素の絶対位置を基準にするために必要 */
  z-index: 100; /* armの下に来るように調整 */
  width:200px;
  height:190px;
}

.umbrella{
  margin-top:10px;
  width:90%;
  height:90%;
}

.displayZero{
  font-family:zero;
  margin-top:70px;
  font-size:30px;
  position:absolute;
  z-index:110;
  color: #EB4526;
    -webkit-text-stroke: 0.1px #fff;
  text-stroke: 0.1px #fff;
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


.circle {
  width: 180px;
  height: 190px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  position: absolute;
  z-index: 80;
  background-color: #111111;

  background-size: cover;
  box-shadow: inset 8px -8px 10px 0 rgba(200, 200, 200, 0.5),
  inset -8px 8px 10px 0 rgba(200, 200, 200, 0.5);
}

.circle::before{
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 20px;
  padding: 2px;
  background: linear-gradient(45deg, #757575 0%, #9E9E9E 45%, #E8E8E8 70%, #9E9E9E 85%, #757575 90% 100%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}

.shadow-circle {
  width: 180px;
  height: 190px;
  border-radius: 20px;
  position: absolute;
  top: 1px;
  left: 1px;
  background-color: #333333;
  z-index: 70;
  box-shadow: 5px -5px 6px -6px rgba(255, 255, 255, 0.7), 5px -5px 6px 0px rgba(0, 0, 0, 0.9);
}
</style>
