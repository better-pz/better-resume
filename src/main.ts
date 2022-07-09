import { createApp } from 'vue'
import App from './App.vue'
import route from './router/'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';
import SvgIcon from '@/components/common/svgIcon.vue' // 引入组件

createApp(App).component('svg-icon', SvgIcon).use(route).use(Antd).mount('#app')
