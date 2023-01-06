import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.less'
/**
 * vite 利用ES Module规范支持实现开发阶段的 Dev Server，进行模块的按需加载，而不是先整体打包再进行加载
 * 比如说import react from 'react' 相当于对vite dev server进行了一次http请求，这样就无需进行打包了
 * 
 */
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
