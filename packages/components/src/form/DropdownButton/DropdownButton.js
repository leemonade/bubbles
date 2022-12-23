import React, { useState } from 'react';
// import { DropdownButtonStyles } from './DropdownButton.styles';
import {
  DROPDOWN_BUTTON_DEFAULT_PROPS,
  DROPDOWN_BUTTON_PROP_TYPES,
} from './DropdownButton.constants';
import { Button } from '../Button';
import { ChevDownIcon } from '@bubbles-ui/icons/outline';
import { Popover } from '../../overlay';
import { Dropdown, Item } from '../../overlay/Dropdown';

const DropdownButton = ({ itemComponent, data, ...props }) => {
  const [opened, setOpened] = useState(false);
  // const { classes, cx } = DropdownButtonStyles({}, { name: 'DropdownButton' });

  return (
    <Popover
      opened={opened}
      offset={0}
      target={
        <Button
          {...props}
          rightIcon={<ChevDownIcon height={18} width={18} />}
          onClick={() => setOpened(!opened)}
          textAlign="left"
        />
      }
      width="target"
      closeOnEscape
      closeOnClickOutside
      onClose={() => setOpened(false)}
      trapFocus
      styles={{ boxShadow: 'none', border: 'none' }}
    >
      <Dropdown>
        {data.map((item) => (
          <Item {...item} />
        ))}
      </Dropdown>
    </Popover>
  );
};

DropdownButton.defaultProps = DROPDOWN_BUTTON_DEFAULT_PROPS;
DropdownButton.propTypes = DROPDOWN_BUTTON_PROP_TYPES;

export { DropdownButton };
