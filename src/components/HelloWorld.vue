<script setup lang="ts">
  import Simple from '../components/Simple.vue'
  import Smart from '../components/Smart.vue'
  import Steel from '../components/Steel.vue'
  import Metro from '../components/Metro.vue'
</script>

<template>
  <h1><div>a</div></h1>
  <div class ="box" >
    <Simple/>
  </div>
  <div class="box">
    <Smart/>
  </div>
  <div class="box">
    <Steel/>
  </div>
  <div class="box">
    <Metro/>
  </div>
  <div class="test-box "></div>
</template>

<style scoped>
  .box{
    width:200px;
    height:700px;
  }
  .test-box{
    width:200px;
    height:400px;
    background-color:#E60012;
  }
</style>

