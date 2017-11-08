import React from 'react'
import { HashRouter, BrowserRouter, Route, Switch } from 'react-router-dom'
import { IndexPage, Topic, NewTopic, MessageLisPage, Userhome } from '../components'
const Routers = () => {
  const Router = process.env.NODE_ENV === 'development' ? BrowserRouter : HashRouter
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={IndexPage} />
        <Route path='/newtopic' component={NewTopic} />
        <Route path='/messages' component={MessageLisPage} />
        <Route path='/userhome' component={Userhome} />
        <Route path='/topic/:id' component={Topic} />
      </Switch>
    </Router>
  )
}
export default Routers
