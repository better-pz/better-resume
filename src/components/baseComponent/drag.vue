<template>
  <div :class="dragClass" >
    <div class="panel-box" @mouseenter="canEdit" @mouseleave="noEdit" >

    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, ref } from "vue";
const props = defineProps({
  componentName: { type: String, default: "JobIntension" },
  titleType: { type: String, default: "title-01" },
  titleWidth: { type: String, default: "100%" },
  titleSize: { type: String, default: "normal" },
  dragType: { type: String, default: "content" },
});

const dragClass = computed(() => {
  if (props.dragType == "content") {
    return "drag-box";
  } else {
    return "drag-box-display";
  }
});
const canEdit = () => {

}
const noEdit = () => {
  
}
</script>

<style lang="less" scoped>
.drag-box {
  width: 100%;
}

.drag-box-display {
  width: 600px;
  margin: 15px;
  border: 1px black solid;
  transform: scale(0.5);
}
</style>