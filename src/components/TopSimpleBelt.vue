<script setup lang="ts">
</script>

<template>
  <div class="buckle-box">
    <div class="top-holizonal-stick"></div>
    <div class="buckle">
      <div class="vertical-stick"></div>
      <div class="vertical-stick"></div>
      <div class="vertical-stick"></div>
    </div>
    <div class="holizonal-stick"></div>
  </div>

  <div class="belt-box">
    <div class="belt"></div>
      <div class="stitch"></div>
  </div>
  <div class="arms">
    <div class="arm"></div>
    <div class="arm"></div>
  </div>
</template>

<style scoped>
.vertical-stick{
  width:10px;
  height:40px;
  background-color:#000000;
  box-shadow: 2px -2px 3px -3px rgba(255, 255, 255, 0.5), 2px 0px 3px 0px rgba(0, 0, 0, 0.9);
}
.buckle-box{
  margin-left:40px;
}

.buckle{
  width:90px;
  height:40px;
  display: flex;
  justify-content: center;
  text-align: center;
  justify-content:space-between;
}

.holizonal-stick {
  width: 90px;
  height: 10px;
  margin: -5px 0px 0px 0px;
  background: #555555;
  border-radius: 0px 0px 50% 50%;
  background-image: url('@/assets/wood.png');
  box-shadow: 3px -3px 6px -6px rgba(255, 255, 255, 0.6), 3px -3px 6px 3px rgba(0, 0, 0, 0.5);
  z-index: 100; /* Increased z-index */
  position: relative; /* Ensure it's on top */
}
.top-holizonal-stick {
  width: 90px;
  height: 10px;
  margin: 10px 0px 0px 0px;
  background: #555555;
  border-radius:50% 50% 0px 0px;
  background-image: url('@/assets/wood.png');
  box-shadow: 3px -3px 6px -6px rgba(255, 255, 255, 0.6), 3px -3px 6px 3px rgba(0, 0, 0, 0.5);
  z-index: 120; /* Increased z-index */
  position: relative; /* Ensure it's on top */
}
.arms {
  margin-top: -20px;
  display: flex;
  width: 170px;
  height: 30px;
  justify-content: space-around;
}

.arm {
  width: 10px;
  height: 33px;
  background: #555555;
  border-radius: 50% 50% 0px 0px;
  box-shadow: 3px -3px 6px -6px rgba(255, 255, 255, 0.6), 3px -3px 6px 3px rgba(0, 0, 0, 0.5);
  background-image: url('@/assets/wood.png');
  z-index: 50;
}

.belt-box {
  width: 170px;
  height: 300px;
  margin-top: -10px;
  display: flex;
  justify-content: center;
  text-align: center;
  z-index: 40; /* Ensure it's below holizonal-stick */
  position: relative;
}

.belt {
  width: 77px;
  height: 300px;
  background-color: #15344a;
  border-radius: 7px;
  background-image: url('@/assets/argyle.png');
  z-index: 35;
  box-shadow: 5px -5px 6px -6px rgba(255, 255, 255, 0.5), 5px 0px 6px 0px rgba(0, 0, 0, 0.9);
}

.stitch {
  position: absolute;
  margin-top: 20px;
  width: 55px;
  height: 260px;
  background-color: #0a1924;
  border-radius: 7px;
  background-image: url('@/assets/argyle.png');
  z-index: 50;
  border: 3px dashed #c39143;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
