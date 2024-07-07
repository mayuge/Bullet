<template>
  <div class="steel-box">
    <div class="side-switch"></div>
    <div class="buckle">
      <div class="vertical-stick"></div>
      <div class="vertical-stick"></div>
      <div class="vertical-stick"></div>
    </div>
    <div class="side-switch"></div>
  </div>
  <div class="belt-box">
    <div class="back-belt" v-for="i in 10" :key="i">
      <div class="belt">
        <div class="inner-belt">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.side-switch {
  width: 5px;
  height: 20px;
  background-color: #000000;
  position: relative;
  z-index: 40; /* Lower z-index */
  margin-top: 20px; /* Adjust position as needed */
}

.vertical-stick {
  width: 10px;
  height: 40px;
  background-color: #000000;
  margin: 5px 10px;
  border-radius: 5px;
}

.buckle {
  width: 130px;
  height: 50px;
  border-radius: 5px;
  background-color: #484848;
  background-image: url('@/assets/light-mesh.png');
  position: relative;
  z-index: 50; /* Higher z-index */
  display: flex;
  justify-content: center;
  text-align: center;
  box-shadow: 5px -5px 6px -6px rgba(255, 255, 255, 0.7), 5px -5px 6px 0px rgba(0, 0, 0, 0.6);
}

.steel-box {
  margin-top:10px;
  width: 190px;
  height: 50px;
  display: flex;
  justify-content: center;
  text-align: center;
  position: relative;
}

.belt-box {
  margin-top: -25px;
  width: 190px;
  height: 380px;
  display: flex;
  flex-direction: column; /* 縦に並べる */
  justify-content: center;
  align-items: center; /* 中央寄せ */
  text-align: center;
  z-index: 30;
}

.belt {
  width: 110px;
  height: 25px;
  margin-top: 5px;
  background-color: #32382e;
  display: flex;
  justify-content: center;
  text-align: center;
  background-image: url('@/assets/bo-play.png');
  border: #222222 2px solid;
  border-radius: 5px;
}

.back-belt {
  background-color: #464646;
  box-shadow: 5px -5px 6px -6px rgba(255, 255, 255, 0.7), 5px -5px 6px 0px rgba(0, 0, 0, 0.6);
  border-radius: 5px;
}

.inner-belt {
  width: 75px;
  height: 25px;
  background-color: #1e281c;
  background-image: url('@/assets/cartographer.png');
}

.hole {
  margin: 20px 5px 0 5px;
  height: 8px;
  width: 15px;
  border-radius: 2px;
  background-color: #222222;
}

.hole-container {
  display: flex;
  justify-content: space-between;
  text-align: center;
}
</style>
