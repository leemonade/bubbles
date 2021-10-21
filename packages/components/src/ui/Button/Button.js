import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cln from 'classnames';
import { composeEventHandlers } from '../../tools/events';
import { keys, matches } from '../../internal/keyboard';
import { useId } from '../../internal/useId';
import styles from './button.module.scss';

export const Button = React.forwardRef(function Button(
  {
    children,
    as,
    className,
    disabled,
    small,
    size,
    kind,
    href,
    isExpressive,
    isSelected,
    tabIndex,
    type,
    renderIcon: ButtonImageElement,
    dangerDescription,
    iconDescription,
    hasIconOnly,
    onClick,
    onBlur,
    onFocus,
    onMouseEnter,
    onMouseLeave,
    ...other
  },
  ref
) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = (evt) => {
    if (hasIconOnly) {
      setIsFocused(true);
    }
  };

  const handleBlur = () => {
    if (hasIconOnly) {
      setIsHovered(false);
      setIsFocused(false);
    }
  };

  const handleMouseEnter = (evt) => {
    if (hasIconOnly) {
    }
  };

  const handleMouseLeave = () => {
    if (!isFocused && hasIconOnly) {
      setIsHovered(false);
    }
  };

  const handleClick = (evt) => {};

  useEffect(() => {
    const handleEscKeyDown = (event) => {
      if (matches(event, [keys.Escape])) {
        setIsHovered(false);
      }
    };
    document.addEventListener('keydown', handleEscKeyDown);
    return () => document.removeEventListener('keydown', handleEscKeyDown);
  }, []);

  const buttonClasses = cln(className, {
    [styles[`btn`]]: true,
    [styles[`btn--sm`]]:
      (size === 'small' && !isExpressive) ||
      (size === 'sm' && !isExpressive) ||
      (small && !isExpressive),
    [styles[`btn--md`]]: (size === 'field' && !isExpressive) || (size === 'md' && !isExpressive),
    [styles[`btn--lg`]]: size === 'lg',
    [styles[`btn--xl`]]: size === 'xl',
    [styles[`btn--${kind}`]]: kind,
    [styles[`btn--disabled`]]: disabled,
    [styles[`btn--expressive`]]: isExpressive,
    [styles[`btn--icon-only`]]: hasIconOnly,
    [styles[`btn--selected`]]: hasIconOnly && isSelected && kind === 'ghost',
  });

  const commonProps = {
    tabIndex,
    className: buttonClasses,
    ref,
  };

  const buttonImage = !ButtonImageElement ? null : (
    <ButtonImageElement
      aria-label={iconDescription}
      className={styles[`btn__icon`]}
      aria-hidden="true"
    />
  );

  const dangerButtonVariants = ['danger', 'danger--tertiary', 'danger--ghost'];

  let component = 'button';
  const assistiveId = useId('danger-description');
  let otherProps = {
    disabled,
    type,
    'aria-describedby': dangerButtonVariants.includes(kind) ? assistiveId : null,
    'aria-pressed': hasIconOnly && kind === 'ghost' ? isSelected : null,
  };
  const anchorProps = {
    href,
  };

  let assistiveText;
  if (hasIconOnly) {
    assistiveText = (
      <div onMouseEnter={handleMouseEnter} className={styles[`assistive-text`]}>
        {iconDescription}
      </div>
    );
  } else if (dangerButtonVariants.includes(kind)) {
    assistiveText = (
      <span id={assistiveId} className={styles[`visually-hidden`]}>
        {dangerDescription}
      </span>
    );
  } else {
    assistiveText = null;
  }

  if (as) {
    component = as;
    otherProps = {
      ...otherProps,
      ...anchorProps,
    };
  } else if (href && !disabled) {
    component = 'a';
    otherProps = anchorProps;
  }

  return React.createElement(
    component,
    {
      onMouseEnter: composeEventHandlers([onMouseEnter, handleMouseEnter]),
      onMouseLeave: composeEventHandlers([onMouseLeave, handleMouseLeave]),
      onFocus: composeEventHandlers([onFocus, handleFocus]),
      onBlur: composeEventHandlers([onBlur, handleBlur]),
      onClick: composeEventHandlers([onClick, handleClick]),
      ...other,
      ...commonProps,
      ...otherProps,
    },
    assistiveText,
    children,
    buttonImage
  );
});

Button.displayName = 'Button';
Button.propTypes = {
  /**
   * Specify how the button itself should be rendered.
   * Make sure to apply all props to the root node and render children appropriately
   */
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string, PropTypes.elementType]),

  /**
   * Specify the content of your Button
   */
  children: PropTypes.node,

  /**
   * Specify an optional className to be added to your Button
   */
  className: PropTypes.string,

  /**
   * Specify the message read by screen readers for the danger button variant
   */
  dangerDescription: PropTypes.string,

  /**
   * Specify whether the Button should be disabled, or not
   */
  disabled: PropTypes.bool,

  /**
   * Specify if the button is an icon-only button
   */
  hasIconOnly: PropTypes.bool,

  /**
   * Optionally specify an href for your Button to become an `<a>` element
   */
  href: PropTypes.string,

  /**
   * If specifying the `renderIcon` prop, provide a description for that icon that can
   * be read by screen readers
   */
  iconDescription: (props) => {
    if (props.renderIcon && !props.children && !props.iconDescription) {
      return new Error(
        'renderIcon property specified without also providing an iconDescription property.'
      );
    }
    return undefined;
  },

  /**
   * Specify whether the Button is expressive, or not
   */
  isExpressive: PropTypes.bool,

  /**
   * Specify whether the Button is currently selected
   */
  isSelected: PropTypes.bool,

  /**
   * Specify the kind of Button you want to create
   */
  kind: PropTypes.oneOf([
    'primary',
    'secondary',
    'danger',
    'ghost',
    'danger--primary',
    'danger--ghost',
    'danger--tertiary',
    'tertiary',
  ]).isRequired,

  /**
   * Provide an optional function to be called when the button element
   * loses focus
   */
  onBlur: PropTypes.func,

  /**
   * Provide an optional function to be called when the button element
   * is clicked
   */
  onClick: PropTypes.func,

  /**
   * Provide an optional function to be called when the button element
   * receives focus
   */
  onFocus: PropTypes.func,

  /**
   * Provide an optional function to be called when the mouse
   * enters the button element
   */
  onMouseEnter: PropTypes.func,

  /**
   * Provide an optional function to be called when the mouse
   * leaves the button element
   */
  onMouseLeave: PropTypes.func,

  /**
   * Optional prop to allow overriding the icon rendering.
   * Can be a React component class
   */
  renderIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),

  /**
   * Optional prop to specify the role of the Button
   */
  role: PropTypes.string,

  /**
   * Specify the size of the button, from a list of available sizes.
   * For `default` buttons, this prop can remain unspecified or use `default`.
   * In the next major release of Carbon, `default`, `field`, and `small` will be removed
   */
  size: PropTypes.oneOf(['default', 'field', 'small', 'sm', 'md', 'lg', 'xl', '2xl']),

  /**
   * Optional prop to specify the tabIndex of the Button
   */
  tabIndex: PropTypes.number,

  /**
   * Optional prop to specify the type of the Button
   */
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
};

Button.defaultProps = {
  tabIndex: 0,
  type: 'button',
  disabled: false,
  kind: 'primary',
  size: 'default',
  isExpressive: false,
};
