import React, { useMemo, useState, useRef, useEffect } from 'react';
import { ChevDownIcon, ChevUpIcon } from '@bubbles-ui/icons/outline';
import { noop } from 'lodash';
import { DropdownButtonStyles } from './DropdownButton.styles';
import {
  DROPDOWN_BUTTON_DEFAULT_PROPS,
  DROPDOWN_BUTTON_PROP_TYPES,
} from './DropdownButton.constants';
import { Button } from '../Button';
import { Popover } from '../../overlay/Popover';
import { Dropdown, Item } from '../../overlay/Dropdown';
import { ImageLoader } from '../../misc';

const DropdownButton = ({ itemComponent, data, chevronUp, position, ...props }) => {
  const [opened, setOpened] = useState(false);
  const [buttonWidth, setButtonWidth] = useState(0);
  const buttonRef = useRef(null);

  const handleOnOption =
    (onOption = noop) =>
    () => {
      onOption();
      setOpened(false);
    };
  const { classes, cx } = DropdownButtonStyles({}, { name: 'DropdownButton' });

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

  useEffect(() => {
    if (buttonRef.current) {
      setButtonWidth(buttonRef.current.offsetWidth - 10);
    }
  }, []);

  return (
    <Popover
      opened={opened}
      offset={4}
      position={position}
      target={
        <Button
          ref={buttonRef}
          {...props}
          rightIcon={
            chevronUp ? (
              <ChevUpIcon height={18} width={18} />
            ) : (
              <ChevDownIcon height={18} width={18} />
            )
          }
          onClick={() => setOpened(!opened)}
          textAlign="apart"
        />
      }
      closeOnEscape
      closeOnClickOutside={true}
      onClose={() => setOpened(false)}
      trapFocus
      // width={buttonWidth || null}
      styles={{
        dropdown: {
          minWidth: buttonWidth,
          maxWidth: 150,
        },
      }}
    >
      <Dropdown>
        {handledData.map((item, index) => (
          <Item
            key={item.id || `DropdownButton Item ${index}`}
            {...item}
            icon={renderIcon(item.icon)}
            style={{
              minWidth: buttonWidth,
              maxWidth: 200,
            }}
          />
        ))}
      </Dropdown>
    </Popover>
  );
};

DropdownButton.defaultProps = DROPDOWN_BUTTON_DEFAULT_PROPS;
DropdownButton.propTypes = DROPDOWN_BUTTON_PROP_TYPES;

export { DropdownButton };
