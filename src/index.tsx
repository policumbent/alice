import { StrictMode } from 'react';
import { render } from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorkerRegister';
import ReactGA from 'react-ga4';
import { SocketContextComponent } from './contexts/Socket/Component';

try {
  ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID || '');
} catch (e) {
  console.warn(e);
}

render(
  <SocketContextComponent>
  <StrictMode>
    
    <App />
    
  </StrictMode>
  </SocketContextComponent>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
