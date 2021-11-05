import React, { useState, useEffect, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Menu, Box } from '@mantine/core';
import { ChevronRightIcon } from '@heroicons/react/outline';
import { Button } from './../../../form';
import { DropdownStyles } from './Dropdown.styles';

export const Dropdown = forwardRef(({ tabs, rtl, onTabClick }, ref) => {
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
    const ele = document.getElementById(selectedItemId);
    if (ele && ele.scrollIntoView) {
      ele.scrollIntoView(false);
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
        control={
          <Button color="ghost" iconOnly rounded onClick={() => setOpen(true)}>
            <ChevronRightIcon style={{ width: 16 }} />
          </Button>
        }
        withArrow
        closeOnScroll={false}
        position="bottom"
        placement="end"
        opened={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        styles={(theme) => ({
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
              if (onTabClick && typeof onTabClick === 'function') onTabClick(tab.key, e);
            }}
          >
            {tab.label}
          </Menu.Item>
        ))}
      </Menu>
    </Box>
  );
});

Dropdown.propTypes = {
  id: PropTypes.string,
  tabs: PropTypes.any,
  rtl: PropTypes.bool,
  tabBarGutter: PropTypes.number,
  activeKey: PropTypes.string,
  onTabClick: PropTypes.func,
  tabMoving: PropTypes.bool,
};
