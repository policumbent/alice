import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { DefaultLayout } from './containers';
import { Page404, Page500 } from './views/Pages';

import Notifications from './components/notifications';

import './App.scss';

const App = () => {
  return (
    <div className="app-container">
      <Notifications />
      <BrowserRouter>
        <Switch>
          {/* @ts-ignore  */}
          <Route path="/404" component={Page404} />
          {/* @ts-ignore  */}
          <Route path="/500" component={Page500} />
          {/* @ts-ignore  */}
          <Route path="/" component={DefaultLayout} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
