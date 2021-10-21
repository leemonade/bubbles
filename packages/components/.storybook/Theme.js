import React from 'react';
import PropTypes from 'prop-types';
import styles from './theme.module.scss';

console.log(styles);

export const Theme = ({ theme, ...props }) => {
  return <div className={styles[`theme--${theme}`]} {...props} />;
};

Theme.propTypes = {
  theme: PropTypes.string,
};
