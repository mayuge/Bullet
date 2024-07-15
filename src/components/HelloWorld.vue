<script setup lang="ts">
  import Simple from '../components/Simple.vue'
  import Smart from '../components/Smart.vue'
  import Steel from '../components/Steel.vue'
  import Metro from '../components/Metro.vue'

  import {ref} from 'vue'

  const count = ref(0)
</script>

<template>
  <button @click="count++">ボタン</button>
  {{count}}
  <h1>光陰矢の如しを愛せ</h1>
  <div class="container">
    <div class ="box" >
      <div class="simple">
          <Simple/>
      </div>
    </div>
    <div class="box">
      <div class="smart">
        <Smart/>
      </div>
      
    </div>
    <div class="box">
      <div class="steel">
        <Steel/>
      </div>
      
    </div>
    <div class="box">
      <div class="metro">
        <Metro/>
      </div>
    </div>
  </div>


</template>

<style scoped>
  h1{
    font-family:'title';
    font-size:100px;
    font-weight:200;
  }
  .metro{
    width:210px;
  }
  .steel{
    margin-top:70px;
    width:200px;
    height:700px;
  }
  .container{
    display:flex;
  }
  .simple{
    margin-top:110px;
    width:170px;
    height:700px;
  }
  .smart{
    margin-top:30px;
    width:180px;
    height:700px;
  }
  .box{
    width:230px;
    height:1300px;
    margin:0 auto;
    padding:0 20px;
    display: flex;
    justify-content: center;
    text-align: center;
    background-color:#666666;
  }
  .test-box{
    width:200px;
    height:400px;
    background-color:#E60012;
  }

</style>

