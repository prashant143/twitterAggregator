import React from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = ({ message }) => (
  <p style={{ color: 'red' }}>{message}</p>
);

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired
};

export default ErrorMessage;
