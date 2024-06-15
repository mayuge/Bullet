<template>
	
		<div class="line" style=" height:5px;" :style="{ transform: `rotate(${deg}deg)`, width: `${length}px; background-color:#ff0000` }"></div>
	
</template>
<script setup lang="ts">
	const props = defineProps({
		name:{
			type:String,
			required:true
		},
    x:{

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

</style>