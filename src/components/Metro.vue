<script setup lang="ts">
  import LineMap from './LineMap.vue'
  import MetroBelt
   from './MetroBelt.vue'
  import TopMetroBelt
   from './TopMetroBelt.vue'

</script>
<template>
  <TopMetroBelt/>
  <div class="container">
    <div class="circle">
      <div class="incircle">
        <LineMap/>
      </div>
    </div>
    <div class="shadow-circle"></div>
  </div>
  <MetroBelt/>
</template>

<style scoped>
.container {
  margin-top:-25px;
  position: relative; /* 子要素の絶対位置を基準にするために必要 */
  z-index: 100; /* armの下に来るように調整 */
  width:210px;
  height:210px;
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
  background-size: 50px 50px; /* Adjust the size as needed */
  
}

.circle::before{
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  padding: 2px;
  background: linear-gradient(45deg, #757575 0%, #9E9E9E 45%, #E8E8E8 70%, #9E9E9E 85%, #757575 90% 100%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);
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

.incircle{
  width:188px;
  height:188px;
  border-radius:50%;
  background-color: #ffffff;
  background-image: url(@/assets/chidori.svg);
  background-size: 50px 50px; 
  box-shadow: inset 10px -10px 10px 0 rgba(0, 0, 0, 0.7), inset -2px 2px 10px 0 rgba(0, 0, 0, 0.9);
}




</style>
