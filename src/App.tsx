import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Notifications from './components/Notifications';
import Layout from './containers/Layout';

import './App.scss';

// routes config
import routes from './routes';

const App = () => {
  return (
    <div className="app-container">
      <Notifications />
      <BrowserRouter>
        <Layout>
          <Switch>
            {routes.map((route, idx) =>
              !route.component ? null : (
                <Route key={idx} path={route.path} exact={route.exact}>
                  <route.component />
                </Route>
              )
            )}
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
};

export default App;
