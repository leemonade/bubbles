import { ActionButton } from '@bubbles-ui/components';
import { ButtonStyles } from './Button.styles';
import PropTypes from 'prop-types';

export const BUTTON_DEFAULT_PROPS = {
  label: '',
  actived: false,
};

export const BUTTON_PROP_TYPES = {
  icon: PropTypes.node,
  label: PropTypes.string,
  actived: PropTypes.bool,
  onClick: PropTypes.func,
};

const Button = ({ icon, label, actived, onClick }) => {
  const { classes, cx } = ButtonStyles({ actived });
  return (
    <ActionButton icon={icon} classNames={classes} tooltip={label} onClick={onClick}></ActionButton>
  );
};

Button.defaultProps = BUTTON_DEFAULT_PROPS;

Button.propTypes = BUTTON_PROP_TYPES;

export { Button };
