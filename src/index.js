import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store/Store'
import 'normalize.css'
// 引入初始化各个浏览器样式css文件
import './index.css'
// 自己写的样式
import './styles/styleThemes/Container/index.css'
import 'github-markdown-css'
import registerServiceWorker from './registerServiceWorker'
import axios from 'axios'
import Routers from './routes/Routers'

// 定义axios请求地址
axios.defaults.baseURL = 'https://cnodejs.org/api/v1'

function App () {
  return ReactDOM.render(
    <Provider store={store}>
      <Routers />
    </Provider>,
    document.getElementById('root'))
}

App()
registerServiceWorker()
