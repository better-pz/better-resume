<template>
  <svg
    aria-hidden="true"
    class="svg-icon"
    :style="{
      fontSize: size + 'px',
      width: width + 'px',
      height: height + 'px',
    }"
  >
    <use :xlink:href="symbolId" :fill="color" />
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { number, string } from 'vue-types'

const props = defineProps({
  prefix: { type: String, default: 'icon' },
  icon: { type: String, required: true },
  color: { type: String, default: '' },
  size: { type: [number,string] },
  width: { type: number },
  height: { type: number },
})

const symbolId = computed(() => `#${props.prefix}-${props.icon}`)
</script>

<style lang="less" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  overflow: hidden;
  fill: currentColor;
}
</style>
