import React from 'react'
import { HashRouter, BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { IndexPage, Topic, NewTopic, NewsPage, Userhome, Login } from '../components'
const Routers = () => {
  const Router = process.env.NODE_ENV === 'development' ? BrowserRouter : HashRouter
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={IndexPage} />
        <LoginComponent path='/newtopic' component={NewTopic} />
        <LoginComponent path='/messages' component={NewsPage} />
        <LoginComponent path='/userhome' component={Userhome} />
        <Route path='/login' component={Login} />
        <Route path='/topic/:id' component={Topic} />
      </Switch>
    </Router>
  )
}

/**
 * 封装Route，跳转前判断本地是否存在token如果不存在则重定向至指定
 * @param {String} path - 原始Route的path
 * @param {Object} component - 接受组件参数
 */
const LoginComponent = ({ component:Component, ...data }) => (
  <Route {...data} render={props => (
    !localStorage.token // 判断本地是否存在token 
      ? <Redirect to={{ // 如果不存在则跳转到login页面
        pathname: '/login', // to可以接受一个字符串及目标url，或者接受一个对象 pathname 跳转目标
        state: { from: props.location } // state携带用户跳转前的location对象
      }} />
      : <Component {...props} />
  )} />
)
export default Routers
