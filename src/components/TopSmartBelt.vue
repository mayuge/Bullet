<script setup lang="ts">
// 画像をインポート
import Heart from '../assets/Heart.vue'
</script>

<template>
  <div class="buckle-box">
    <div class="stopper"></div>
    <div class="buckle"></div>
    <div class="stopper"></div>
  </div>

  <div class="ring">
    <div class="ring-hole"></div>
  </div>
  <div class="belt-box">
    <div class="belt">
      <div class="inner-belt">
      </div>
    </div>
  </div>
  <div class="arms">
    <div class="heart">
      <Heart />
    </div>
    <div class="heart">
      <Heart />
    </div>
  </div>
</template>

<style scoped>
.stopper {
  width: 10px;
  height: 45px;
  border-radius: 3px 3px 0px 0px;
  background-color: #b38900;
  margin: 5px 22px 0px 22px;
  z-index: 110; /* Increased z-index */
  background-image: url('@/assets/arches.png');
  box-shadow: 2px -2px 3px -3px rgba(255, 255, 255, 0.7), 2px -2px 3px 0px rgba(0, 0, 0, 0.6);
}

.buckle-box {
  justify-content: space-between;
  margin-top: 10px;
  margin-left: 35px;
  width: 110px;
  height: 50px;
  border-radius: 5px 5px 0px 0px;
  display: flex;
  justify-content: center;
  text-align: center;
  box-shadow: 5px -5px 6px -6px rgba(255, 255, 255, 0.7), 5px -5px 6px 0px rgba(0, 0, 0, 0.6);
  position: relative;
}

.buckle {
  width: 110px;
  height: 50px;
  border-radius: 5px 5px 0px 0px;
  box-shadow: inset 5px -5px 15px 0 rgba(0, 0, 0, 0.5);
  position: absolute;
  z-index: 100; /* Ensure it's below stopper */
}

.buckle::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 5px 5px 0px 0px;
  padding: 10px 6px 0px 6px;
  background: linear-gradient(45deg, #757575 0%, #9E9E9E 45%, #E8E8E8 70%, #9E9E9E 85%, #757575 90% 100%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}

.ring {
  width: 130px;
  height: 50px;
  margin-left: 25px;
  border-radius: 10px;
  background-color: #0CB2B4;
  display: flex;
  justify-content: center;
  text-align: center;
  background-image: url('@/assets/black-scales.png');
  box-shadow: 0px -5px 6px -6px rgba(255, 255, 255, 0.7), 5px 0px 6px 0px rgba(0, 0, 0, 0.6);
}

.ring-hole {
  width: 110px;
  height: 20px;
  background-color: #666666;
  margin-top: 20px;
  border-radius: 10px;
  box-shadow: inset 5px -5px 10px 0 rgba(0, 0, 0, 0.5);
}

.heart {
  width: 30px;
  height: 30px;
  margin: 0 25px;
}

.arms {
  display: flex;
  width: 180px;
  height: 30px;
  justify-content: space-between;
}

.belt-box {
  width: 180px;
  height: 280px;
  display: flex;
  justify-content: center;
  text-align: center;
  z-index: 40;
}

.belt {
  width: 100px;
  height: 300px;
  background-color: #b02303;
  display: flex;
  justify-content: center;
  text-align: center;
  background-image: url('@/assets/black-scales.png');
  box-shadow: 0px -5px 6px -6px rgba(255, 255, 255, 0.7), 5px 0px 6px 0px rgba(0, 0, 0, 0.6);
}

.inner-belt {
  width: 75px;
  height: 270px;
  margin-top: 10px;
  background-color: #b02303;
  border: #7d1903 3px solid;
  background-image: url('@/assets/arches.png');
  border-radius: 0 0 5px 5px;
}

.hole {
  margin: 25px 5px 0 5px;
  height: 8px;
  width: 15px;
  border-radius: 2px;
  background-color: #222222;
}

.hole-container {
  display: flex;
  justify-content: center;
  text-align: center;
  justify-content: space-between;
}
</style>
