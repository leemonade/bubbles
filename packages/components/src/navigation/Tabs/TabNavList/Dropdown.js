import React, { useState, useEffect, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { isFunction } from 'lodash';
import { Menu, Box } from '@mantine/core';
import { ChevronDownIcon } from '@bubbles-ui/icons/outline';
import { IconButton } from '../../../form/IconButton';
import { DropdownStyles } from './Dropdown.styles';

const Dropdown = forwardRef(({ tabs, onTabClick }, ref) => {
  // ········································································
  // Dropdown
  const [open, setOpen] = useState(false);
  const [selectedKey, setSelectedKey] = useState(null);

  const popupId = `more-popup`;
  const selectedItemId = selectedKey !== null ? `${popupId}-${selectedKey}` : null;

  // ········································································
  // Effect
  useEffect(() => {
    // We use query element here to avoid React strict warning
    const elem = document.getElementById(selectedItemId);
    if (elem?.scrollIntoView) {
      elem.scrollIntoView(false);
    }
  }, [selectedKey]);

  useEffect(() => {
    if (!open) {
      setSelectedKey(null);
    }
  }, [open]);

  // ········································································
  // Render

  const { classes, cx } = DropdownStyles({}, { name: 'Dropdown' });

  return (
    <Box className={cx(classes.root)} ref={ref}>
      <Menu
        control={<IconButton onClick={() => setOpen(true)} icon={<ChevronDownIcon />} />}
        withArrow
        closeOnScroll={false}
        position="bottom"
        placement="end"
        opened={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        styles={() => ({
          body: {
            maxHeight: 300,
            overflowY: 'auto',
          },
        })}
      >
        {tabs.map((tab) => (
          <Menu.Item
            key={tab.key}
            onClick={(e) => {
              if (isFunction(onTabClick)) onTabClick(tab.key, e);
            }}
          >
            {tab.label}
          </Menu.Item>
        ))}
      </Menu>
    </Box>
  );
});

Dropdown.displayName = 'Dropdown';

Dropdown.propTypes = {
  id: PropTypes.string,
  tabs: PropTypes.any,
  rtl: PropTypes.bool,
  tabBarGutter: PropTypes.number,
  activeKey: PropTypes.string,
  onTabClick: PropTypes.func,
  tabMoving: PropTypes.bool,
};

export { Dropdown };
