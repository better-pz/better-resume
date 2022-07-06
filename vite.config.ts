import { defineConfig } from 'vite'
const { resolve } = require("path")
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {


    
    alias: {
      "@": resolve("src"),
    },
  },
})
