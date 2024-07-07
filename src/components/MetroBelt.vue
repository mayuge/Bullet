<template>
  <div class="arms">
    <div class="tablet" style="transform:rotate(-20deg);"></div>
    <div class="tablet" style="transform:rotate(20deg);"></div>
  </div>
  <div class="belt-box">
    <div class="belt">
      <div class="inner-belt"></div>
    </div>
  </div>
</template>

<style scoped>
.arms {
  margin-top: -35px;
  display: flex;
  width: 210px;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  z-index: 20;
}

.belt-box {
  margin-top: -13px;
  width: 210px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 40;
}

.belt {
  width: 100px;
  height: 500px;
  background-color: #0CB2B4;
  display: flex;
  justify-content: center;
  text-align: center;
  border-radius: 20px;
  box-shadow: 5px -5px 6px -6px rgba(255, 255, 255, 0.7), 5px -5px 6px 0px rgba(0, 0, 0, 0.6);
  z-index: 30;
  background-image: url('@/assets/dimension.png');
  border:1px #eeeeee solid;
}

.inner-belt {
  margin-top:10px;
  width: 75px;
  height: 470px;
  background-color: #1e281c;
  background-image: url('@/assets/mizutama.svg');
  border-left: #E834CD 5px solid;
  border-right: #E1B737 5px solid;
  border-bottom: #41B6E9 5px solid;
  border-top: #41B6E9 5px solid;
  border-radius:20px;
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

.tablet {
  margin: 0 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 45px;
  text-align: center;
  font-weight: bold;
  color: hsl(0, 0%, 60%) !important;
  background-color: hsl(0, 0%, 90%);
  background-image: url('@/assets/noise.png');
  border-top: none;
  border-radius: 30%;
  box-shadow: inset rgba(255, 254, 255, 0.6) 0 0.3em 0.3em, inset rgba(0, 0, 0, 0.15) 0 -0.1em 0.3em,
              hsl(0, 0%, 60%) 0 0.1em 3px, hsl(0, 0%, 45%) 0 0.3em 1px,
              rgba(0, 0, 0, 0.2) 0 0.5em 5px;
  z-index: 60; /* Increased z-index to ensure it's in front */
}
</style>
