import React, { useState } from 'react';
import { isFunction } from 'lodash';
import { Popover, ColorPicker, Box, Button, Stack } from '@bubbles-ui/components';

const ColorPickerDropdown = ({ open, onClose, target, color, onChange, ...props }) => {
  const [value, setValue] = useState(color);

  const handleOnChange = (val) => {
    if (isFunction(onChange)) onChange(val);
    if (isFunction(onClose)) onClose();
  };

  return (
    <Popover
      {...props}
      opened={open}
      onClose={onClose}
      target={target}
      width={260}
      position="bottom"
    >
      <Box style={{ display: 'flex' }}>
        <ColorPicker compact color={color} onChange={setValue} />
      </Box>
      <Stack justifyContent="space-between" fullWidth>
        <Button
          variant="light"
          color="secondary"
          size="xs"
          compact
          onClick={() => handleOnChange('')}
        >
          Clear
        </Button>
        <Button variant="light" size="xs" compact onClick={() => handleOnChange(value)}>
          Apply
        </Button>
      </Stack>
    </Popover>
  );
};

export { ColorPickerDropdown };
