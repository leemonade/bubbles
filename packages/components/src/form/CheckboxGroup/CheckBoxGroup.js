import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox, CHECKBOX_VARIANTS } from '../Checkbox/Checkbox';
import { Stack, STACK_DIRECTIONS } from '../../layout/Stack';
import { CheckboxGroupStyles } from './CheckboxGroup.styles';

export const DEFAULT_PROPS = { direction: 'column', variant: 'default' };

const CheckboxGroup = ({ data, variant, direction, ...props }) => {
  const { classes, cx } = CheckboxGroupStyles({ direction, variant }, { name: 'CheckboxGroup' });

  return (
    <Stack className={classes.container} direction={direction} {...props}>
      {data.map((item, index) => (
        <Checkbox key={index} variant={variant} {...item} />
      ))}
    </Stack>
  );
};

CheckboxGroup.defaultProps = DEFAULT_PROPS;

CheckboxGroup.propTypes = {
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

export { CheckboxGroup };
