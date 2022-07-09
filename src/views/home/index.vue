<template>
  <section class="home-banner">
    <h2 class="home-banner-slogin">vue3在线拖拽配置</h2>
    <p>自动拖拽配置 * 自定义组件</p>
    <a-input-search
      v-model:value="value"
      placeholder="input search text"
      style="width: 200px"
      @search="onSearch"
    />
  </section>

  <section class="home-template">
    <div @click="goDetail(item)" class="template-card" v-for="item in 5">
      {{ item }}
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const value = ref<string>('')

const onSearch = (searchValue: string) => {
  console.log('use value', searchValue)
  console.log('or use this.value', value.value)
}
const goDetail = () => {
  router.push({name:'editor'})
}
</script>

<style lang="less" scoped>
.home-banner {
  height: 566px;
  overflow: hidden;
  background-image: linear-gradient(to right top, #93cba4, #a1d2d5);
  padding-top: 150px;
  position: relative;
  text-align: center;

  .home-banner-slogin {
    color: #fff;
    font-size: 40px;
  }
}
.home-template {
  width: 70%;
  margin: 20px auto;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(4, minmax(200px, 1fr));
  grid-auto-rows: 400px;
  .template-card {
    background-color: rgb(218, 183, 183);
    cursor: pointer;
      transition: all 0.2 ease-in-out;
    &:hover {
      transform: translateY(-5px);
      transition: all 0.2 ease-in-out;
    }
  }
}
</style>
