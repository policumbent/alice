import React, { Component, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import { AppFooter, AppHeader } from './components';

// routes config
import routes from '../../routes';

const DefaultFooter = React.lazy(() => import('./DefaultFooter'));
const DefaultHeader = React.lazy(() => import('./DefaultHeader'));

const DefaultLayout = (props) => {
  const loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>;

  function signOut(e) {
    e.preventDefault();
    props.history.push('/login');
  }

  return (
    <div className="app">
      <AppHeader>
        <Suspense fallback={loading}>
          <DefaultHeader onLogout={(e) => signOut(e)} />
        </Suspense>
      </AppHeader>
      <main className="main app-body">
        <Container fluid className="main-container">
          <Suspense fallback={loading}>
            <Switch>
              {routes.map((route, idx) =>
                !route.component ? null : (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={(props) => <route.component {...props} />}
                  />
                )
              )}
            </Switch>
          </Suspense>
        </Container>
      </main>
      <AppFooter fixed className="ticker-footer">
        <Suspense fallback={loading}>
          <DefaultFooter />
        </Suspense>
      </AppFooter>
    </div>
  );
};

export default DefaultLayout;
