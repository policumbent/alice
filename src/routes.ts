import { lazy } from 'react';
import DefaultLayout from 'containers/DefaultLayout';

const Dashboard = lazy(() => import('views/Dashboard'));
const WindStations = lazy(() => import('views/WindStations'));
const Accelerations = lazy(() => import('views/Accelerations'));
const Credits = lazy(() => import('views/Credits'));
const Login = lazy(() => import('views/Login'));
const Logout = lazy(() => import('views/Logout'));

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
    path: '/accelerations',
    name: 'Accelerations',
    component: Accelerations,
  },
  {
    path: '/wind',
    name: 'Wind Stations',
    component: WindStations,
  },
  {
    path: '/credits',
    name: 'Credits',
    component: Credits,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout,
  },
];

export default routes;
