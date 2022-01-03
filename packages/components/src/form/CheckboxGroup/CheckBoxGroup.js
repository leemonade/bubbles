import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox, CHECKBOX_VARIANTS } from '../Checkbox/Checkbox';
import { Stack, STACK_DIRECTIONS } from '../../layout/Stack';
import { CheckBoxGroupStyles } from './CheckBoxGroup.styles';

export const DEFAULT_PROPS = { direction: 'column', variant: 'default', fullWidth: false };

const CheckBoxGroup = ({ data, variant, direction, fullWidth, onChange, ...props }) => {
  const { classes, cx } = CheckBoxGroupStyles(
    { direction, variant, fullWidth },
    { name: 'CheckBoxGroup' }
  );

  return (
    <Stack className={classes.group} direction={direction} fullWidth={fullWidth} {...props}>
      {data.map((item, index) => (
        <Checkbox key={index} variant={variant} {...item} onChange={onChange} />
      ))}
    </Stack>
  );
};

CheckBoxGroup.defaultProps = DEFAULT_PROPS;

CheckBoxGroup.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string.isRequired,
      help: PropTypes.string,
      helpPosition: PropTypes.string,
      disabled: PropTypes.bool,
      indeterminate: PropTypes.bool,
      checked: PropTypes.bool,
    })
  ),
  onChange: PropTypes.func,
  direction: PropTypes.oneOf(STACK_DIRECTIONS),
  variant: PropTypes.oneOf(CHECKBOX_VARIANTS),
  fullWidth: PropTypes.bool,
};

export { CheckBoxGroup };
