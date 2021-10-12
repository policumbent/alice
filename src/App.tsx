import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import Notifications from 'components/notifications';

import './App.scss';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = Loadable({
  loader: () => import('./containers/DefaultLayout/DefaultLayout'),
  loading,
});

// Pages
const Page404 = Loadable({
  loader: () => import('./views/Pages/Page404/Page404'),
  loading,
});

const Page500 = Loadable({
  loader: () => import('./views/Pages/Page500/Page500'),
  loading,
});

const App = () => {
  return (
    <div className="app-container">
      <Notifications />
      <BrowserRouter>
        <Switch>
          <Route path="/404" component={Page404} />
          <Route path="/500" component={Page500} />
          <Route path="/" component={DefaultLayout} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
