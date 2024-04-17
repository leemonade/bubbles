import React from 'react';
import PropTypes from 'prop-types';
import { noop } from 'lodash';
import { RemoveIcon } from '@bubbles-ui/icons/outline';
import { Stack } from '../../../../lib/layout/Stack/Stack';
import { Title } from '../../../typography';
import { Box } from '../../../layout';
import { ActionButton } from '../../../form/ActionButton';
import { TOTAL_LAYOUT_HEADER_HEIGHT } from '../../../layout/TotalLayout';

const RightActions = ({ children }) => <>{children}</>;

function DrawerHeader({ children, title, onClose = noop }) {
  const childrenArray = React.Children.toArray(children);
  const rightActions = childrenArray.find((child) => child.type === RightActions);
  return (
    <Stack
      fullWidth
      justifyContent="space-between"
      alignItems="center"
      sx={(theme) => ({
        padding: `0 16px 0 24px`,
        height: TOTAL_LAYOUT_HEADER_HEIGHT,
        borderBottom: `1px solid ${theme.other.divider.background.color.default}`,
      })}
    >
      <Title order={3}>{title}</Title>
      <Stack spacing={4} alignItems="center">
        {rightActions}
        <ActionButton icon={<RemoveIcon />} onClick={onClose} />
      </Stack>
    </Stack>
  );
}

RightActions.propTypes = {
  children: PropTypes.node,
};
DrawerHeader.RightActions = RightActions;
DrawerHeader.displayName = 'DrawerHeader';
DrawerHeader.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func,
};

export { DrawerHeader };
