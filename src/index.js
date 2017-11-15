import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'
// 引入初始化各个浏览器样式css文件
import './index.css'
// 自己写的样式
import './styles/styleThemes/Container/index.css'
import 'github-markdown-css'
import registerServiceWorker from './registerServiceWorker'
import axios from 'axios'
import Routers from './routes/Routers'

axios.defaults.baseURL = 'https://cnodejs.org/api/v1'
ReactDOM.render(<Routers />,
  document.getElementById('root'))
registerServiceWorker()
