<script setup lang="ts">
// 画像をインポート
import metalImage from '@/assets/metal.jpg';
</script>

<template>
<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 100 100" filter="drop-shadow(15px 15px 10px rgba(0,0,0,0.5))" overflow="visible">


    <defs>
      <!-- パターンを定義 -->
      <pattern id="imgPattern" patternUnits="userSpaceOnUse" width="150" height="150">
        <image :href="metalImage" x="-10" y="-10" width="100" height="100" />
      </pattern>
    </defs>


    <path fill="url(#imgPattern)" stroke-width="none" d="M 10,27 A 20,20 0,0,1 50,27 A 20,20 0,0,1 90,27 Q 85.35, 66.48 50,87 Q 14.65, 66.48 10,27 z" />

  </svg>
</template>

<style scoped>
</style>
