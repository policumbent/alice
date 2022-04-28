import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem, Button } from 'react-bootstrap';

import NavbarBrand from './NavbarBrand';

import { default as api } from '../api';
import { parseDate, isNotificationsActive, usePolling } from '../utils';
import { getMessageToken } from '../firebase';
import Store from '../utils/store';

import logo from '../assets/img/brand/logo.svg';
import sygnet from '../assets/img/brand/sygnet.svg';

const brandFull = { src: logo, width: 89, height: 25, alt: 'Policumbent Logo' };
const brandMinimized = {
  src: sygnet,
  width: 30,
  height: 30,
  alt: 'Policumbent Logo',
};

const Header = () => {
  const [bike, setBike] = useState<string | null>(null);
  const [show, setShow] = useState<boolean>(false);

  // polling over configuration change
  const [, setPolling] = usePolling(() => updateBlinker(), 1000);

  const updateBlinker = () => {
    const data = Store.get('blinker');

    if (data) {
      setBike(data.bikeName);
      setShow(data.show);
    }
  };

  useEffect(() => {
    api
      .getConfig()
      .then((data) => {
        setBike(data.bikeName);
        setShow(parseDate(data.date, data.startTime) < Date.now());
      })
      .catch((e) => console.error(e));

    Store.remove('blinker');
    setPolling(true);
  }, [setPolling]);

  return (
    <React.Fragment>
      <Nav className="mr-auto navbar-nav">
        <NavItem className="ml-3 mr-auto">
          <Link to="/" className="nav-link">
            Dashboard
          </Link>
        </NavItem>
        <NavItem className="mr-auto">
          {isNotificationsActive() ? null : (
            <Button className="ml-3" variant="danger" onClick={() => getMessageToken()}>
              Notifiche
            </Button>
          )}
        </NavItem>
      </Nav>
      <NavbarBrand
        className={`mx-auto ${isNotificationsActive() ? null : 'pr-5'} logo`}
        full={brandFull}
        minimized={brandMinimized}
      />
      <Nav className="ml-auto navbar-nav">
        {show ? (
          <NavItem className="mr-2 ml-auto">
            <div className="blink px-1">{bike} on the road</div>
          </NavItem>
        ) : null}

        <NavItem className="mr-3 ml-auto">
          <Link to="/credits" className="nav-link">
            Credits
          </Link>
        </NavItem>
        <NavItem className="ml-auto mr-3">
          <Link to={api.isLogged() ? '/logout' : '/login'} className="nav-link">
            {api.isLogged() ? 'Logout' : 'Login'}
          </Link>
        </NavItem>
      </Nav>
    </React.Fragment>
  );
};

export default Header;
