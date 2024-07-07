<script setup lang="ts">
  import Simple from '../components/Simple.vue'
  import Smart from '../components/Smart.vue'
  import Steel from '../components/Steel.vue'
  import Metro from '../components/Metro.vue'
</script>

<template>
  <div class="container">
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
  </div>


</template>

<style scoped>
  .container{
    display:flex;
  }
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

