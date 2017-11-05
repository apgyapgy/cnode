import React from 'react'
import { HashRouter, BrowserRouter, Route, Switch } from 'react-router-dom'
import { IndexPage } from '../components'
const Routers = () => {
  const Router = process.env.NODE_ENV === 'development' ? BrowserRouter : HashRouter
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={IndexPage} />
      </Switch>
    </Router>
  )
}
export default Routers
