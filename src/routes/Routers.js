import React from 'react'
import { HashRouter, BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { IndexPage, Topic, NewTopic, MessageLisPage, Userhome, Login } from '../components'
const Routers = () => {
  const Router = process.env.NODE_ENV === 'development' ? BrowserRouter : HashRouter
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={IndexPage} />
        <Route path='/newtopic' component={NewTopic} />
        <Route path='/messages' component={MessageLisPage} />
        <Route path='/userhome' component={Userhome} />
        <Route path='/login' component={Login} />
        <Route path='/topic/:id' component={Topic} />
      </Switch>
    </Router>
  )
}
const LoginComponent = ({ component:Component, ...data }) => (
  <Route {...data} render={props => (
    !localStorage
      ? <Redirect to='/login' />
      : <Component {...props} />
  )} />
)
export default Routers
