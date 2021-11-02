import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

import { AppNavbarBrand } from './components';

import logo from 'assets/img/brand/logo.svg';
import sygnet from 'assets/img/brand/sygnet.svg';
import { default as api } from 'api';
import { parseDate, isNotificationsActive } from 'utils';
import { getMessageToken } from 'firebase';
import Store from 'utils/store';

const propTypes = {
  children: PropTypes.node,
};
const defaultProps = {};
const brandFull = { src: logo, width: 89, height: 25, alt: 'Policumbent Logo' };
const brandMinimized = {
  src: sygnet,
  width: 30,
  height: 30,
  alt: 'Policumbent Logo',
};

class DefaultHeader extends Component {
  constructor() {
    super();
    this.state = { bike: null, show: null };

    api
      .getConfig()
      .then((data) => {
        const bikeName = data.bikeName;
        const show = parseDate(data.date, data.startTime) < Date.now();
        this.setState({
          bike: bikeName,
          show: show,
        });
      })
      .catch((e) => console.error(e));

    Store.remove('blinker');
  }

  componentDidMount() {
    // polling over configuration change
    setInterval(() => {
      const data = Store.get('blinker');

      if (data) {
        const { bikeName, show } = data;

        if (bikeName !== this.state.bikeName || show !== this.state.show) {
          this.setState({
            bike: bikeName,
            show: show,
          });
        }
      }
    }, 1000);
  }

  render() {
    const {
      children,
      // eslint-disable-next-line
      ...attributes
    } = this.props;

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
        <AppNavbarBrand
          className={`mx-auto ${isNotificationsActive() ? null : 'pr-5'} logo`}
          full={brandFull}
          minimized={brandMinimized}
        />
        <Nav className="ml-auto navbar-nav">
          {this.state.show ? (
            <NavItem className="mr-2 ml-auto">
              <div className="blink px-1">{this.state.bike} on the road</div>
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
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
