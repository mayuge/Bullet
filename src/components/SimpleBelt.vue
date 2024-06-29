<script setup lang="ts">
</script>

<template>
    <div class="arms">
      <div class="arm"></div>
      <div class="arm"></div>
    </div>
    <div class="belt-box">
    	<div class="belt"></div>
    	<div class="stitch">
        <div class="hole-container">
          <div v-for="i in 11" :key="i">
            <div class="hole"></div>
          </div>
        </div>

    	</div>
    	<div class="shadow-box"></div>
    </div>
</template>

<style scoped>
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
  border-radius: 0px 0px 50% 50%;
  box-shadow: 1px -1px 2px -4px rgba(255, 255, 255, 0.6), 1px -1px 2px 3px rgba(0, 0, 0, 0.7);
  background-image: url('@/assets/wood.png');
  box-shadow: 3px -3px 6px -6px rgba(255, 255, 255, 0.6), 3px -3px 6px 3px rgba(0, 0, 0, 0.5);
  z-index: 50;
}

.hole {
  margin-top:20px;
  height: 12px;
  width: 6px;
  border-radius: 10px;
  background-color: #000000;
}

.hole-container {
  margin-top:50px;
}

.belt-box {
  margin-top: -10px;
  width: 170px;
  height: 500px;
  display: flex;
  justify-content: center;
  text-align: center;
  z-index: 40;
}

.belt {
  width: 77px;
  height: 500px;
  background-color: #15344a;
  border-radius: 7px 8px 40% 40%;
  background-image: url('@/assets/argyle.png');
  z-index: 35;
}

.stitch {
  position: absolute;
  margin-top: 10px;
  width: 55px;
  height: 470px;
  background-color: #0a1924;
  border-radius: 7px 8px 40% 40%;
  background-image: url('@/assets/argyle.png');
  z-index: 50;
  border: 3px dashed #c39143;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.shadow-box {
  position: absolute;
  width: 77px;
  height: 500px;
  border-radius: 7px 8px 40% 40%;
  background-color: #222222;
  z-index: 30;
  margin-left: 0px;
  box-shadow: 5px -5px 6px -6px rgba(255, 255, 255, 0.5), 5px -2px 6px 0px rgba(0, 0, 0, 0.9);
}
</style>
