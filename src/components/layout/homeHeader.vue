<template>
  <header class="flex justify-center">
    <section class="better-header flex justify-between align-center">
      <div
        class="better-header-logo flex align-center"
        @click="changeRouter('home')"
      >
        <img src="@/assets/img/logoMini.png" alt="Better-logo" />
        <span>Better配置</span>
      </div>
      <div class="flex">
        <div
          @click="changeRouter(item.name)"
          class="better-header-item"
          :class="item.name === route.name && 'active'"
          :key="item.title"
          v-for="item in headerList"
        >
          {{ item.title }}
        </div>
      </div>
    </section>
  </header>
</template>

<script setup lang="ts">
import { reactive } from '@vue/reactivity'
import { useRouter, useRoute } from 'vue-router'
interface headerItem {
  title:string,
  name:string
}
const router = useRouter()
const route = useRoute()
console.log(router)
const headerList = reactive<headerItem[]>([
  { title: '首页', name: 'home' },
  { title: '模板中心', name: 'template' },
  { title: '组件库', name: 'template' },
  { title: '联系我们', name: 'contact' },
  { title: '帮助中心', name: 'help' },
])
const changeRouter = (name: string) => {
  router.push({ name })
}
</script>

<style lang="less" scoped>
header {
  user-select: none;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  height: 80px;
  width: 100%;
  .better-header {
    height: 50px;
    line-height: 50px;
    width: 90%;
    margin: auto;
    padding: 0 25px;
    font-size: 20px;
    border-radius: 10px;
    backdrop-filter: blur(18px);
    box-shadow: 0px 0px 14px #629cad, 0px 0px 22px #bad3e9;
    .better-header-logo {
      img {
        width: 30px;
        height: 30px;
      }
      span {
        margin-left: 10px;
      }
    }
    .better-header-item {
      cursor: pointer;
      padding-left: 15px;
      padding-right: 15px;

      font-size: 1.2rem;
      font-weight: bold;
      &:hover {
        color: #619cd7;
      }
    }
    .active {
      color: #619cd7;
    }
  }
}
</style>
