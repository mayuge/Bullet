<script setup lang="ts">
  import LineMap from './LineMap.vue'
  import MetroBelt from './MetroBelt.vue'
  import TopMetroBelt from './TopMetroBelt.vue'
</script>

<template>
  <TopMetroBelt/>
  <div class="container">
    <div class="circle">
      <div class="incircle">
        <LineMap/>
        <div class="time-frame-box">
          <div class="middle-stick"></div>
          <div class="frame">
            <div class="card">
              <div class="font top">2</div>
            </div>
            <div class="card">
              <div class="font bottom">2</div>
            </div>
          </div>
          <div class="frame">
            <div class="card"></div>
            <div class="card"></div>
          </div>
        </div>
        <div class="min-frame-box">
          <div class="middle-stick"></div>
          <div class="frame">
            <div class="card"></div>
            <div class="card"></div>
          </div>
          <div class="frame">
            <div class="card"></div>
            <div class="card"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="shadow-circle"></div>
  </div>
  <MetroBelt/>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dela+Gothic+One&display=swap');
.container {
  margin-top: -30px;
  position: relative;
  z-index: 100;
  width: 210px;
  height: 210px;
}

.time-frame-box {
  display: flex;
  position: absolute;
  top: 85px;
  left: 12px;
  height: 35px;
  padding-top: 3px;
  transform: rotate(45deg);
  box-shadow: inset 2px -2px 4px 0 rgba(0, 0, 0, 0.7);
}

.min-frame-box {
  display: flex;
  position: absolute;
  top: 125px;
  left: 110px;
  height: 35px;
  padding-top: 3px;
  transform: rotate(-45deg);
  box-shadow: inset 2px -2px 4px 0 rgba(0, 0, 0, 0.7);
}

.middle-stick {
  position: absolute;
  width: 43px;
  top: 19px;
  height: 1px;
  background-color: #ffffff;
}

.frame {
  width: 20px;
  height: 30px;
  margin: 0 1px;
}

.card {
  width: 20px;
  height: 16px;
  background-color: #222222;
  border-radius: 2px;
  position: relative;
  overflow: hidden;
}

.font {
  font-family: "Train One", system-ui;
  font-weight: 400;
  font-style: normal;
  color: #ffffff;
  font-size: 25px;
  position: absolute;
  width: 100%;
  height: 200%;
  left: 0;
}

.font.top {
  top: -20%;
}

.font.bottom {
  top: -120%;
}

.circle {
  width: 190px;
  height: 190px;
  border-radius: 50%;
  border: 10px solid rgba(0, 0, 0, 0.2);
  background-image: url(@/assets/wood.png);
  top: 0;
  left: 0;
  position: absolute;
  z-index: 80;
  background-repeat: repeat;
  background-color: #EFEEDC;
  background-size: 50px 50px;
}

.circle::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  padding: 2px;
  background: linear-gradient(45deg, #757575 0%, #9E9E9E 45%, #E8E8E8 70%, #9E9E9E 85%, #757575 90% 100%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}

.shadow-circle {
  width: 210px;
  height: 210px;
  border-radius: 50%;
  position: absolute;
  top: 1px;
  left: 1px;
  background-color: #333333;
  z-index: 70;
  box-shadow: 5px -5px 5px -10px rgba(255, 255, 255, 0.6), 5px -5px 5px 0px rgba(0, 0, 0, 0.7);
}

.incircle {
  width: 188px;
  height: 188px;
  border-radius: 50%;
  background-color: #ffffff;
  background-image: url(@/assets/chidori.svg);
  background-size: 50px 50px;
  box-shadow: inset 10px -10px 10px 0 rgba(0, 0, 0, 0.7), inset -2px 2px 10px 0 rgba(0, 0, 0, 0.9);
}
</style>
