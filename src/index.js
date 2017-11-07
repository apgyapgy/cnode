import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'
// 引入初始化各个浏览器样式css文件
import 'lib-flexible'
// 引入lib-flexible 解决rem自适应方案
import './index.css'
// 自己写的样式
import './styles/App.css'
import 'github-markdown-css'
import registerServiceWorker from './registerServiceWorker'
import axios from 'axios'
import Routers from './routes/Routers'

axios.defaults.baseURL = 'https://cnodejs.org/api/v1'
ReactDOM.render(<Routers />,
  document.getElementById('root'))
registerServiceWorker()
