import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Footer from 'components/footer';

const propTypes = {
  children: PropTypes.node,
};
const defaultProps = {};

class DefaultFooter extends Component {
  render() {
    return <Footer />;
  }
}

DefaultFooter.propTypes = propTypes;
DefaultFooter.defaultProps = defaultProps;

export default DefaultFooter;
