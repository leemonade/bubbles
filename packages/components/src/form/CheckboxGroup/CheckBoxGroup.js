import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox, CHECKBOX_VARIANTS } from '../Checkbox/Checkbox';
import { Stack, STACK_DIRECTIONS } from '../../layout/Stack';
import { CheckBoxGroupStyles } from './CheckBoxGroup.styles';

export const DEFAULT_PROPS = { direction: 'column', variant: 'default' };

const CheckBoxGroup = ({ data, variant, direction, ...props }) => {
  const { classes, cx } = CheckBoxGroupStyles({ direction, variant }, { name: 'CheckBoxGroup' });

  return (
    <Stack className={classes.container} direction={direction} {...props}>
      {data.map((item, index) => (
        <Checkbox key={index} variant={variant} {...item} />
      ))}
    </Stack>
  );
};

CheckBoxGroup.defaultProps = DEFAULT_PROPS;

CheckBoxGroup.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      help: PropTypes.string,
      helpPosition: PropTypes.string,
      disabled: PropTypes.bool,
      indeterminate: PropTypes.bool,
      checked: PropTypes.bool,
    })
  ),
  direction: PropTypes.oneOf(STACK_DIRECTIONS),
  variant: PropTypes.oneOf(CHECKBOX_VARIANTS),
};

export { CheckBoxGroup };
