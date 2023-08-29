import React, { useMemo, useState } from 'react';
import { DropdownButtonStyles } from './DropdownButton.styles';
import {
  DROPDOWN_BUTTON_DEFAULT_PROPS,
  DROPDOWN_BUTTON_PROP_TYPES,
} from './DropdownButton.constants';
import { Button } from '../Button';
import { ChevDownIcon } from '@bubbles-ui/icons/outline';
import { Popover } from '../../overlay';
import { Dropdown, Item } from '../../overlay/Dropdown';
import { ImageLoader } from '../../misc';
import { isFunction } from 'lodash';

const DropdownButton = ({ itemComponent, data, ...props }) => {
  const [opened, setOpened] = useState(false);

  const handleOnOption = (onOption) => {
    return () => {
      isFunction(onOption) && onOption();
      setOpened(false);
    };
  };

  function renderIcon(icon) {
    if (!icon) return;
    if (typeof icon === 'string') {
      return <ImageLoader className={classes.icon} src={icon} fillCurrent />;
    }
    return icon;
  }

  const handledData = useMemo(() => {
    return data.map((item) => {
      const handledOnClick = handleOnOption(item.onClick);
      return { ...item, onClick: handledOnClick };
    });
  }, [data]);

  const { classes, cx } = DropdownButtonStyles({}, { name: 'DropdownButton' });
  return (
    <Popover
      opened={opened}
      offset={0}
      target={
        <Button
          {...props}
          rightIcon={<ChevDownIcon height={18} width={18} />}
          onClick={() => setOpened(!opened)}
          textAlign="appart"
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
        {handledData.map((item, index) => (
          <Item
            key={item.id || `DropdownButton Item ${index}`}
            {...item}
            icon={renderIcon(item.icon)}
          />
        ))}
      </Dropdown>
    </Popover>
  );
};

DropdownButton.defaultProps = DROPDOWN_BUTTON_DEFAULT_PROPS;
DropdownButton.propTypes = DROPDOWN_BUTTON_PROP_TYPES;

export { DropdownButton };
