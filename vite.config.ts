import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
export default defineConfig({
  /**
   * 来提供 React 项目编译和热更新的功能。
   */
  plugins: [react()],
  css:{
    postcss:{
      plugins:[
        autoprefixer({
          // 指定目标浏览器
          overrideBrowserslist:['safari >= 6', 'ff >= 10']
        })
      ]
    }
  }
})
