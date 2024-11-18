import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { isFunction } from 'lodash';
import { Menu, Box } from '@mantine/core';
import { ChevronDownIcon } from '@bubbles-ui/icons/outline';
import { IconButton } from '../../../form/IconButton';
import { DropdownStyles } from './Dropdown.styles';

const Dropdown = forwardRef(({ tabs, onTabClick }, ref) => {
  const { classes, cx } = DropdownStyles({}, { name: 'Dropdown' });

  return (
    <Box className={cx(classes.root)} ref={ref}>
      <Menu shadow="md" width={200} position="bottom-end" offset={4}>
        <Menu.Target>
          <IconButton
            className={cx(classes.buttonIcon)}
            icon={<ChevronDownIcon className={classes.icon} />}
          />
        </Menu.Target>

        <Menu.Dropdown position="bottom-end" offset={4}>
          {tabs.map((tab) => (
            <Menu.Item
              key={tab.key}
              className={cx(classes.item)}
              onClick={(e) => {
                if (isFunction(onTabClick)) onTabClick(tab.key, e);
              }}
            >
              {tab.label}
            </Menu.Item>
          ))}
        </Menu.Dropdown>
      </Menu>
    </Box>
  );
});

Dropdown.displayName = 'Dropdown';

Dropdown.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.node.isRequired,
    }),
  ).isRequired,
  onTabClick: PropTypes.func,
};

export { Dropdown };
