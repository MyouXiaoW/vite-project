import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  /**
   * 来提供 React 项目编译和热更新的功能。
   */
  plugins: [react()],
})
