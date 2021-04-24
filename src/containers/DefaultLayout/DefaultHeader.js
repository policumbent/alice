import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem } from 'react-bootstrap';
import PropTypes from 'prop-types';

import { AppNavbarBrand } from './components';

import logo from 'assets/img/brand/logo.svg';
import sygnet from 'assets/img/brand/sygnet.svg';
import { default as api } from 'api';
import { parseDate } from 'components/utils';

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
    this.state = { bike: '', show: false };
  }

  async componentDidMount() {
    const data = await api.getConfig();

    this.setState({
      bike: data.bikeName,
      show: parseDate(data.date, data.startTime) < Date.now(),
    });
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
          <NavItem className="px-3">
            <Link to="/dashboard" className="nav-link">
              Dashboard
            </Link>
          </NavItem>
          <NavItem className="px-3">
            <Link to="/wind" className="nav-link">
              Wind Stations
            </Link>
          </NavItem>
          <NavItem className="px-3">
            <Link to="/accelerations" className="nav-link">
              Accelerations
            </Link>
          </NavItem>
        </Nav>
        <AppNavbarBrand className="logo" full={brandFull} minimized={brandMinimized} />
        <Nav className="ml-auto navbar-nav">
          <NavItem className="px-2 blink">
            <div>{this.state.show ? this.state.bike + ' on the road' : null}</div>
          </NavItem>

          <NavItem className="px-2">
            <Link to="/credits" className="nav-link">
              Credits
            </Link>
          </NavItem>
          <NavItem className="px-3">
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
