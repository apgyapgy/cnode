import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { LoginState } from './Reducer'

/**
 * 声明一个变量把分支的store组合成一个树
 */
const App = combineReducers({
  LoginState
})
let store
// 用if判断客户端是否安装了redux devtools 如果未安装则不添加
if (!(window.__REDUX_DEVTOOLS_EXTENSION__ || window.__REDUX_DEVTOOLS_EXTENSION__)) {
  store = createStore(App)
} else {
  store = createStore(
    App,
    compose(
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ) // 插件调试，未安装会报错
  )
}
export default store
