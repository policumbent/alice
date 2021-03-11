import React from 'react'

import { HashRouter, Route, Switch } from 'react-router-dom'
import Loadable from 'react-loadable'
import Notifications from 'notifications'

import './App.scss'

const loading = () => (
  <div className="animated fadeIn pt-3 text-center">Loading...</div>
)

// Containers
const DefaultLayout = Loadable({
  loader: () => import('./containers/DefaultLayout/DefaultLayout'),
  loading,
})

// Pages
const Page404 = Loadable({
  loader: () => import('./views/Pages/Page404/Page404'),
  loading,
})

const Page500 = Loadable({
  loader: () => import('./views/Pages/Page500/Page500'),
  loading,
})

const App = () => {
  return (
    <div className="app-container">
      <Notifications />
      <HashRouter hashType="noslash">
        <Switch>
          <Route path="/404" name="Page 404" component={Page404} />
          <Route path="/500" name="Page 500" component={Page500} />
          <Route path="/" name="Home" component={DefaultLayout} />
        </Switch>
      </HashRouter>
    </div>
  )
}

export default App
