import React, { useMemo, useState } from 'react';
import { ChevDownIcon, ChevUpIcon } from '@bubbles-ui/icons/outline';
import { noop } from 'lodash';
import { DropdownButtonStyles } from './DropdownButton.styles';
import {
  DROPDOWN_BUTTON_DEFAULT_PROPS,
  DROPDOWN_BUTTON_PROP_TYPES,
} from './DropdownButton.constants';
import { Button } from '../Button';
import { Popover } from '../../overlay';
import { Dropdown, Item } from '../../overlay/Dropdown';
import { ImageLoader } from '../../misc';

const DropdownButton = ({ itemComponent, data, chevronUp, width, ...props }) => {
  const [opened, setOpened] = useState(false);

  const handleOnOption =
    (onOption = noop) =>
    () => {
      onOption();
      setOpened(false);
    };

  function renderIcon(icon) {
    if (!icon) return null;
    if (typeof icon === 'string') {
      return <ImageLoader className={classes.icon} src={icon} fillCurrent />;
    }
    return icon;
  }

  const handledData = useMemo(
    () =>
      data.map((item) => {
        const handledOnClick = handleOnOption(item.onClick);
        return { ...item, onClick: handledOnClick };
      }),
    [data],
  );

  const { classes, cx } = DropdownButtonStyles({}, { name: 'DropdownButton' });
  return (
    <Popover
      opened={opened}
      offset={4}
      target={
        <Button
          {...props}
          rightIcon={
            chevronUp ? (
              <ChevUpIcon height={18} width={18} />
            ) : (
              <ChevDownIcon height={18} width={18} />
            )
          }
          onClick={() => setOpened(!opened)}
          textAlign="appart"
        />
      }
      width={width}
      closeOnEscape
      closeOnClickOutside={true}
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
