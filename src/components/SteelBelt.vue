<template>
  <div class="belt-box">
    <div class="back-belt" v-for="i in 15" :key="i">
      <div class="belt">
        <div class="inner-belt">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.belt-box {
  margin-top: -25px;
  width: 190px;
  height: 500px;
  display: flex;
  flex-direction: column; /* 縦に並べる */
  justify-content: center;
  align-items: center; /* 中央寄せ */
  text-align: center;
  z-index: 40;

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
  border:#222222 2px solid;
  border-radius:5px;
}

.back-belt{
  background-color:#464646;
  box-shadow: 5px -5px 6px -6px rgba(255, 255, 255, 0.7), 5px -5px 6px 0px rgba(0, 0, 0, 0.6);
  border-radius:5px;
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
