<template>
  <div class="editor">
    <header class="flex justify-center">
      <section class="editor-section flex justify-between align-center">
        <div class="flex align-center">flex justify-between align-center</div>
      </section>
    </header>
    <div class="editor-container flex">
      <aside class="menus flex">
        <div class="menus-left">
          <div
            class="menus-item"
            @click="menusActive = item.value"
            :class="menusActive === item.value && 'active'"
            v-for="item in menus"
          >
            {{ item.name }}
          </div>
        </div>
        <div class="menus-right">
          <div class="menus-info">
            <div class="menus-info-title">{{ menusInfo.name }}</div>
            <!-- <VueDraggableNext
      v-model="list1"
      :group="{ name: 'people', pull: 'clone', put: true }"
      :sort="true"
      @change="log"
      :move="checkMove"
      style="width: 100%; height: 100%"
    >
      <transition-group>
        <div v-for="element in list1" :key="element">
          <Drag :component-name="element.componentName"></Drag>
        </div>
      </transition-group>
    </VueDraggableNext> -->
            <div class="menus-info-item" v-for="item in menusInfo.children">
              <div class="menus-info-item_icon">
                <svg-icon :icon="item.icon"></svg-icon>
              </div>
              <div>
                {{ item.name }}
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </aside>
      <section class="editor-main">操作区域</section>
      <aside class="config">
        <svg-icon icon="phone"></svg-icon>
        <!-- {{menusInfo(menusActive)}} -->
      </aside>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from '@vue/reactivity'
import { VueDraggableNext } from 'vue-draggable-next'

import { ref, watch, toRef } from 'vue'
interface menusitem {
  value: number
  name: string
  icon?: string
}
interface menusinfo extends menusitem {
  children: menusitem[]
}
const menus = reactive<menusinfo[]>([
  {
    name: '基础组件',
    value: 0,
    children: [
      {
        name: '文本组件',
        value: 1,
        icon: 'text',
      },
      {
        name: '图片组件',
        value: 2,
        icon: 'img',
      },
      {
        name: '分割线',
        value: 3,
        icon: 'phone',
      },
    ],
  },
  {
    name: '模板组件',
    value: 1,
    children: [
      {
        name: '文本组件',
        value: 2,
        icon: 'text',
      },
    ],
  },
])
let menusActive = ref(0)
let menusInfo = ref<menusinfo>(menus[0])
watch(
  menusActive,
  (val) => {
    menus.forEach((item) => {
      if (item.value === val) {
        menusInfo.value = item
      }
    })
    console.log(1111, menusInfo)
  },
  {
    deep: true,
    immediate: true,
  }
)
</script>

<style lang="less" scoped>
.editor {
  width: 100%;
  header {
    width: 100%;
    position: fixed;
    top: 80px;
    left: 0;
    z-index: 999;
    height: 60px;
    background-color: #dce5ed;
    .editor-section {
      width: 80%;
      margin: 0 auto;
    }
  }
  .editor-container {
    height: calc(100vh - 80px);
    padding-top: 140px;
    width: 100vw;
    .menus {
      width: 360px;
      .menus-left {
        display: flex;
        flex-direction: column;
        .menus-item {
          cursor: pointer;
          height: 40px;
          margin-top: 4px;
          margin-bottom: 4px;
          padding: 0 16px;
          overflow: hidden;
          line-height: 40px;
          text-overflow: ellipsis;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
          transition: border-color 0.3s, background 0.3s,
            padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
          &:hover {
            color: #619cd7;
          }
        }
        .active {
          color: #619cd7;
          background-color: #e6f7ff;
        }
      }
      .menus-right {
        width: 270px;
        overflow-x: hidden;
        padding: 10px;
        box-shadow: 0 3px 6px -4px rgb(0 0 0 / 12%),
          0 6px 16px 0 rgb(0 0 0 / 8%), 0 9px 28px 8px rgb(0 0 0 / 5%);
        .menus-info {
          display: flex;
          justify-content: flex-start;
          flex-wrap: wrap;
          .menus-info-title {
            width: 100%;
            height: 32px;
            line-height: 32px;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 10px;
          }
          .menus-info-item {
            cursor: move;
            margin: 5px;
            text-align: center;
            .menus-info-item_icon {
              font-size: 12px;
              height: 68px;
              width: 68px;
              background-color: #f7f8fa;
              display: flex;
              align-items: center;
              justify-content: center;
              margin-bottom: 10px;
            }
          }
        }
      }
    }
    .editor-main {
      flex: 1;
      background-color: rgb(240, 240, 240);
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1 1 0%;
      position: relative;
      overflow: hidden;
      user-select: none;
      cursor: grab;
    }
    .config {
      width: 360px;
    }
  }
}
</style>
