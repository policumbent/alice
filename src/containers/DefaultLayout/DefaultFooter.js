import React from 'react';
import PropTypes from 'prop-types';

import Footer from 'components/footer';

const propTypes = {
  children: PropTypes.node,
};
const defaultProps = {};

const DefaultFooter = () => {
  return <Footer />;
};

DefaultFooter.propTypes = propTypes;
DefaultFooter.defaultProps = defaultProps;

export default DefaultFooter;
