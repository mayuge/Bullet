<script setup lang="ts">
// 画像をインポート
import Heart from '../assets/Heart.vue'
</script>

<template>
<div class="arms">
    <div class="heart">
      <Heart/>
    </div>    
    <div class="heart">
      <Heart/>
    </div>
  </div>

  <div class="belt-box">
    <div class="belt">
      <div class="inner-belt">
          <div class=hole-container v-for="i in 12" :key="i">
            <div class="hole"></div>
            <div class="hole"></div>
          </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
  .heart {
    width:30px;
    height:30px;
    transform:rotate(180deg);
    margin: 0 25px;

  }
.arms {
  margin-top: -12px;
  display: flex;
  width: 180px;
  height: 30px;
  justify-content: space-between;

}
.belt-box {
  margin-top: -15px;
  width: 180px;
  height: 500px;
  display: flex;
  justify-content: center;
  text-align: center;
  z-index: 40;
}
.belt{
  width:100px;
  height:500px;
  border-radius:13px;
  background-color:#b02303;
  display: flex;
  justify-content: center;
  text-align: center;
  background-image:url('@/assets/black-scales.png');
  box-shadow: 5px -5px 6px -6px rgba(255, 255, 255, 0.7), 5px -5px 6px 0px rgba(0, 0, 0, 0.6);
}

.inner-belt{
    margin-top:20px;
    width:75px;
    height :430px;
    background-color:#b02303;
    border-radius:5px;
    border:#7d1903 3px solid;
    background-image:url('@/assets/arches.png');
}
.hole {
  margin:25px 5px 0 5px;
  height: 8px;
  width: 15px;
  border-radius:2px;
  background-color: #222222;
}
.hole-container{
  display: flex;
  justify-content: center;
  text-align: center;
  justify-content: space-between;
}

</style>
