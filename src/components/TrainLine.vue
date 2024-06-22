<template>
	<div v-if="name==='丸ノ内線'">
        <div class="line" style=" height:2px;" :style="{ transform: `rotate(${deg}deg)`, width: `${length}px`,backgroundColor:`#E24340`,top:`${y}px`, left:`${x}px` }"></div>
  </div>
  <div v-if="name==='有楽町線'">
        <div class="line" style=" height:2px;" :style="{ transform: `rotate(${deg}deg)`, width: `${length}px`,backgroundColor:`#c1a470`,top:`${y}px`, left:`${x}px` }"></div>
  </div>
  
  <div v-if="name==='東西線'">
        <div class="line" style=" height:2px;" :style="{ transform: `rotate(${deg}deg)`, width: `${length}px`,backgroundColor:`#4499BB`,top:`${y}px`, left:`${x}px` }"></div>
  </div>
  <div v-if="name==='副都心線'">
        <div class="line" style=" height:2px;" :style="{ transform: `rotate(${deg}deg)`, width: `${length}px`,backgroundColor:`#93613A`,top:`${y}px`, left:`${x}px` }"></div>
  </div>
  <div v-if="name==='半蔵門線'">
        <div class="line" style=" height:2px;" :style="{ transform: `rotate(${deg}deg)`, width: `${length}px`,backgroundColor:`#8B76D0`,top:`${y}px`, left:`${x}px` }"></div>
  </div>

  <div v-if="name==='南北線'">
        <div class="line" style=" height:2px;" :style="{ transform: `rotate(${deg}deg)`, width: `${length}px`,backgroundColor:`#4DA99B`,top:`${y}px`, left:`${x}px` }"></div>
  </div>
  <div v-if="name==='千代田線'">
        <div class="line" style=" height:2px;" :style="{ transform: `rotate(${deg}deg)`, width: `${length}px`,backgroundColor:`#54B889`,top:`${y}px`, left:`${x}px` }"></div>
  </div>
  <div v-if="name==='銀座線'">
        <div class="line" style=" height:2px;" :style="{ transform: `rotate(${deg}deg)`, width: `${length}px`,backgroundColor:`#F19A38`,top:`${y}px`, left:`${x}px` }"></div>
  </div>
  <div v-if="name==='日比谷線'">
        <div class="line" style=" height:2px;" :style="{ transform: `rotate(${deg}deg)`, width: `${length}px`,backgroundColor:`#B5B5AD`,top:`${y}px`, left:`${x}px` }"></div>
  </div>
  



  


  
</template>

<script setup lang="ts">
	const props = defineProps({
		name:{
			type:String,
			required:true
		},
    x:{
      type:Number,
      required:true
    },
    y:{
      type:Number,
      required:true
    },
		deg:{
			type:Number,
			required:true
		},
		length:{
			type:Number,
			required:true
		}
	});	
	console.log(props.name)
</script>
<style scoped>
  .line{
    z-index:100;
    position:absolute;
  }
</style>