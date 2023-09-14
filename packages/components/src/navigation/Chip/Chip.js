import React, { useState } from 'react';
import { Chip as MantineChip } from '@mantine/core';
import { ChipStyles } from './Chip.styles';
import {
  CHIP_PROP_TYPES,
  CHIP_DEFAULT_PROPS,
  CHIP_SIZES,
  CHIP_TYPE,
  CHIP_VARIANTS,
  CHIP_COLORS,
  CHIP_RADIUS,
} from './Chip.constants';
import { Text } from '../../typography';

const Chip = ({
  checked,
  defaultChecked,
  children,
  color: colorProp,
  // defaultChecked,
  id,
  onChange,
  radius: radiusProp,
  size: sizeProp,
  type: typeProp,
  variant: variantProp,
  disabled,
  ...props
}) => {
  const [isChecked, setIsChecked] = useState(() => (defaultChecked ? true : checked));
  const color = CHIP_COLORS.includes(colorProp) ? colorProp : CHIP_COLORS[0];
  const radius = CHIP_RADIUS.includes(radiusProp) ? radiusProp : CHIP_DEFAULT_PROPS[2];
  const size = CHIP_SIZES.includes(sizeProp) ? sizeProp : CHIP_SIZES[1];
  const type = CHIP_TYPE.includes(typeProp) ? typeProp : CHIP_TYPE[0];
  const variant = CHIP_VARIANTS.includes(variantProp) ? variantProp : CHIP_VARIANTS[0];
  const textColor = {
    primary: '#FFF',
    secondary: '#FFF',
  };
  const { classes, sx } = ChipStyles({ size, variant, color, disabled });
  return (
    <MantineChip
      {...props}
      color={color}
      radius={radius}
      size={size}
      type={type}
      variant={'outlined'}
      checked={isChecked}
      classNames={classes}
      onChange={() => {
        props.defaultChecked && setIsChecked(true);
        onChange(!isChecked);
      }}
    >
      <Text size={size} sx={{ color: textColor[color] }} transform="uppercase">
        {children}
      </Text>
    </MantineChip>
  );
};

Chip.displayName = 'Chip';
Chip.defaultProps = CHIP_DEFAULT_PROPS;
Chip.propTypes = CHIP_PROP_TYPES;
export { Chip };
