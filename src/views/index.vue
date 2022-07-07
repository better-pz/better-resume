<template>
  <div class="better-container">
    <home-header/>
    <router-view />
  </div>
</template>

<script setup lang="ts">
import homeHeader from '@/components/layout/homeHeader.vue'
</script>

<style lang="less" scoped>
.better-container {
 min-height: 100vh;
//  background-image: linear-gradient(to right top, #fdffff, #93cba4, #a1d2d5);
}
</style> 