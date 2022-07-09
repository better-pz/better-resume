import { defineConfig } from 'vite'
const { resolve } = require("path")
import vue from '@vitejs/plugin-vue'
import { createSvg } from './src/plugins/svgBuilder'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
  // 引入svg
  createSvg('./src/assets/svg/'),

  ],
  resolve: {
    alias: {
      "@": resolve("src"),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          'primary-color': '#a1d2d5',
          'link-color': '#a1d2d5',
          'border-radius-base': '2px',
        },
        javascriptEnabled: true
      }
    }
  }
})
