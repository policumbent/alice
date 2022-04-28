import { Suspense } from 'react';
import { Container } from 'react-bootstrap';

import Footer from './Footer';
import Header from './Header';

const Layout = (props: any) => {
  const loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>;

  return (
    <div className="app">
      <div className="app-header navbar">
        <Suspense fallback={loading}>
          <Header />
        </Suspense>
      </div>
      <main className="main app-body">
        <Container fluid className="main-container">
          <Suspense fallback={loading}>{props.children}</Suspense>
        </Container>
      </main>
      <div className="app-footer footer-fixed ticker-footer">
        <Suspense fallback={loading}>
          <Footer />
        </Suspense>
      </div>
    </div>
  );
};

export default Layout;
