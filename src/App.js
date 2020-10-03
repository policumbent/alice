import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
// import { renderRoutes } from 'react-router-config';
import Loadable from 'react-loadable'
import './App.scss'
import dataService from './api'
import ReactNotification from 'react-notifications-component'

const loading = () => (
  <div className="animated fadeIn pt-3 text-center">Loading...</div>
)

// Containers
const DefaultLayout = Loadable({
  loader: () => import('./containers/DefaultLayout'),
  loading,
})

// Pages
const Page404 = Loadable({
  loader: () => import('./views/example/Pages/Page404'),
  loading,
})

const Page500 = Loadable({
  loader: () => import('./views/example/Pages/Page500'),
  loading,
})

class App extends Component {
  componentDidMount() {
    dataService.setup()
  }

  render() {
    return (
      <div className="app-container">
        <ReactNotification />
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
}

export default App
