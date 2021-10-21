import React from 'react';
import PropTypes from 'prop-types';
import cln from 'classnames';
import styles from './button.module.scss';

export const ButtonSkeleton = ({ className, small, href, size, ...rest }) => {
  const buttonClasses = cln(className, {
    [styles[`skeleton`]]: true,
    [styles[`btn`]]: true,
    [styles[`btn--sm`]]: small || size === 'sm',
    [styles[`btn--md`]]: size === 'field' || size === 'md',
    [styles[`btn--lg`]]: size === 'lg',
    [styles[`btn--xl`]]: size === 'xl',
  });

  const commonProps = {
    className: buttonClasses,
    ...rest,
  };

  const button = <div {...commonProps} />;

  const anchor = <a {...commonProps} href={href} role="button" />; // eslint-disable-line

  return href ? anchor : button;
};

ButtonSkeleton.propTypes = {
  /**
   * Specify an optional className to add.
   */
  className: PropTypes.string,

  /**
   * Optionally specify an href for your Button to become an `<a>` element
   */
  href: PropTypes.string,

  /**
   * Specify the size of the button, from a list of available sizes.
   * For `default` buttons, this prop can remain unspecified or use `default`.
   * In the next major release of Carbon, `default`, `field`, and `small` will be removed
   */
  size: PropTypes.oneOf(['default', 'field', 'small', 'sm', 'md', 'lg', 'xl', '2xl']),

  /**
   * Specify whether the Button should be a small variant
   */
  small: PropTypes.bool,
};

ButtonSkeleton.defaultProps = {
  small: false,
};
