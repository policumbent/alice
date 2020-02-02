import React from 'react'
import DefaultLayout from './containers/DefaultLayout'

const Dashboard = React.lazy(() => import('./views/Dashboard'))
const Bike = React.lazy(() => import('./views/Bike'))

// const Breadcrumbs = React.lazy(() => import('./views/example/Base/Breadcrumbs'))
// const Cards = React.lazy(() => import('./views/example/Base/Cards'))
// const Carousels = React.lazy(() => import('./views/example/Base/Carousels'))
// const Collapses = React.lazy(() => import('./views/example/Base/Collapses'))
// const Dropdowns = React.lazy(() => import('./views/example/Base/Dropdowns'))
// const Forms = React.lazy(() => import('./views/example/Base/Forms'))
// const Jumbotrons = React.lazy(() => import('./views/example/Base/Jumbotrons'))
// const ListGroups = React.lazy(() => import('./views/example/Base/ListGroups'))
// const Navbars = React.lazy(() => import('./views/example/Base/Navbars'))
// const Navs = React.lazy(() => import('./views/example/Base/Navs'))
// const Paginations = React.lazy(() => import('./views/example/Base/Paginations'))
// const Popovers = React.lazy(() => import('./views/example/Base/Popovers'))
// const ProgressBar = React.lazy(() => import('./views/example/Base/ProgressBar'))
// const Switches = React.lazy(() => import('./views/example/Base/Switches'))
// const Tables = React.lazy(() => import('./views/example/Base/Tables'))
// const Tabs = React.lazy(() => import('./views/example/Base/Tabs'))
// const Tooltips = React.lazy(() => import('./views/example/Base/Tooltips'))
// const ButtonDropdowns = React.lazy(() =>
//   import('./views/example/Buttons/ButtonDropdowns')
// )
// const ButtonGroups = React.lazy(() => import('./views/example/Buttons/ButtonGroups'))
// const Buttons = React.lazy(() => import('./views/example/Buttons/Buttons'))
// const CoreUIIcons = React.lazy(() => import('./views/example/Icons/CoreUIIcons'))
// const FontAwesome = React.lazy(() => import('./views/example/Icons/FontAwesome'))
// const SimpleLineIcons = React.lazy(() =>
//   import('./views/example/Icons/SimpleLineIcons')
// )
// const Alerts = React.lazy(() => import('./views/example/Notifications/Alerts'))
// const Badges = React.lazy(() => import('./views/example/Notifications/Badges'))
// const Modals = React.lazy(() => import('./views/example/Notifications/Modals'))
// const Colors = React.lazy(() => import('./views/example/Theme/Colors'))
// const Widgets = React.lazy(() => import('./views/example/Widgets/Widgets'))

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  {
    path: '/',
    exact: true,
    name: 'Home',
    component: DefaultLayout,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/bike',
    name: 'Bike',
    component: Bike,
  },
  // {
  //   path: '/theme',
  //   exact: true,
  //   name: 'Theme',
  //   component: Colors,
  // },
  // {
  //   path: '/theme/colors',
  //   name: 'Colors',
  //   component: Colors,
  // },
  // {
  //   path: '/base',
  //   exact: true,
  //   name: 'Base',
  //   component: Cards,
  // },
  // {
  //   path: '/base/cards',
  //   name: 'Cards',
  //   component: Cards,
  // },
  // {
  //   path: '/base/forms',
  //   name: 'Forms',
  //   component: Forms,
  // },
  // {
  //   path: '/base/switches',
  //   name: 'Switches',
  //   component: Switches,
  // },
  // {
  //   path: '/base/tables',
  //   name: 'Tables',
  //   component: Tables,
  // },
  // {
  //   path: '/base/tabs',
  //   name: 'Tabs',
  //   component: Tabs,
  // },
  // {
  //   path: '/base/breadcrumbs',
  //   name: 'Breadcrumbs',
  //   component: Breadcrumbs,
  // },
  // {
  //   path: '/base/carousels',
  //   name: 'Carousel',
  //   component: Carousels,
  // },
  // {
  //   path: '/base/collapses',
  //   name: 'Collapse',
  //   component: Collapses,
  // },
  // {
  //   path: '/base/dropdowns',
  //   name: 'Dropdowns',
  //   component: Dropdowns,
  // },
  // {
  //   path: '/base/jumbotrons',
  //   name: 'Jumbotrons',
  //   component: Jumbotrons,
  // },
  // {
  //   path: '/base/list-groups',
  //   name: 'List Groups',
  //   component: ListGroups,
  // },
  // {
  //   path: '/base/navbars',
  //   name: 'Navbars',
  //   component: Navbars,
  // },
  // {
  //   path: '/base/navs',
  //   name: 'Navs',
  //   component: Navs,
  // },
  // {
  //   path: '/base/paginations',
  //   name: 'Paginations',
  //   component: Paginations,
  // },
  // {
  //   path: '/base/popovers',
  //   name: 'Popovers',
  //   component: Popovers,
  // },
  // {
  //   path: '/base/progress-bar',
  //   name: 'Progress Bar',
  //   component: ProgressBar,
  // },
  // {
  //   path: '/base/tooltips',
  //   name: 'Tooltips',
  //   component: Tooltips,
  // },
  // {
  //   path: '/buttons',
  //   exact: true,
  //   name: 'Buttons',
  //   component: Buttons,
  // },
  // {
  //   path: '/buttons/buttons',
  //   name: 'Buttons',
  //   component: Buttons,
  // },
  // {
  //   path: '/buttons/button-dropdowns',
  //   name: 'Button Dropdowns',
  //   component: ButtonDropdowns,
  // },
  // {
  //   path: '/buttons/button-groups',
  //   name: 'Button Groups',
  //   component: ButtonGroups,
  // },
  // {
  //   path: '/icons',
  //   exact: true,
  //   name: 'Icons',
  //   component: CoreUIIcons,
  // },
  // {
  //   path: '/icons/coreui-icons',
  //   name: 'CoreUI Icons',
  //   component: CoreUIIcons,
  // },
  // {
  //   path: '/icons/font-awesome',
  //   name: 'Font Awesome',
  //   component: FontAwesome,
  // },
  // {
  //   path: '/icons/simple-line-icons',
  //   name: 'Simple Line Icons',
  //   component: SimpleLineIcons,
  // },
  // {
  //   path: '/notifications',
  //   exact: true,
  //   name: 'Notifications',
  //   component: Alerts,
  // },
  // {
  //   path: '/notifications/alerts',
  //   name: 'Alerts',
  //   component: Alerts,
  // },
  // {
  //   path: '/notifications/badges',
  //   name: 'Badges',
  //   component: Badges,
  // },
  // {
  //   path: '/notifications/modals',
  //   name: 'Modals',
  //   component: Modals,
  // },
  // {
  //   path: '/widgets',
  //   name: 'Widgets',
  //   component: Widgets,
  // },
]

export default routes
