import Dashboard from './views/Dashboard';
import Credits from './views/Credits';
import Login from './views/Login';
import Logout from './views/Logout';

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  {
    path: '/',
    exact: true,
    name: 'Home',
    component: Dashboard,
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
