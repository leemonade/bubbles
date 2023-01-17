import React, { useEffect } from 'react';
import { Box } from '../../layout';
import { Text } from '../../typography';
import { COLORS } from '../../theme.tokens';
import { DrawerPush } from './DrawerPush';
import { DRAWER_PUSH_DEFAULT_PROPS, DRAWER_PUSH_DIRECTIONS } from './DrawerPush.constants';
import { BookLaptopIcon, MoveLeftIcon, MoveRightIcon } from '@bubbles-ui/icons/outline';
import mdx from './DrawerPush.mdx';

export default {
  title: 'BB1/DrawerPush',
  parameters: {
    component: DrawerPush,
    docs: {
      page: mdx,
    },
    // design: {
    //   type: 'figma',
    //   // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    // },
  },
  argTypes: {
    direction: { control: { type: 'select' }, options: DRAWER_PUSH_DIRECTIONS },
  },
};

const Template = ({ opened, title, direction, drawerContent, ...props }) => {
  const [isOpened, setIsOpened] = React.useState(false);

  useEffect(() => {
    setIsOpened(opened);
  }, [opened]);

  const isHorizontal = direction === 'ltr' || direction === 'rtl';
  const isLeftToRight = direction === 'ltr';
  const isVertical = direction === 'ttb' || direction === 'btt';
  const isTopToBottom = direction === 'ttb';

  const drawerPush = (
    <DrawerPush
      opened={isOpened}
      direction={direction}
      {...props}
      style={{
        borderRight: isHorizontal && isLeftToRight && isOpened && `1px solid ${COLORS.ui01}`,
        borderLeft: isHorizontal && !isLeftToRight && isOpened && `1px solid ${COLORS.ui01}`,
        borderBottom: isVertical && isTopToBottom && isOpened && `1px solid ${COLORS.ui01}`,
        borderTop: isVertical && !isTopToBottom && isOpened && `1px solid ${COLORS.ui01}`,
      }}
    >
      <Box
        style={{
          padding: 32,
          paddingLeft: 48,
        }}
      >
        <Box
          style={{
            marginBottom: 34,
            '*': {
              color: COLORS.text04,
            },
          }}
        >
          <Box style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <BookLaptopIcon width={16} height={16} />
            <Text size="md">Scores</Text>
          </Box>
          <Text size="md" style={{ marginLeft: 24 }} strong>
            Scores Basic (admin)
          </Text>
        </Box>
        <Text
          style={{ display: 'block', marginBottom: 48, lineHeight: '22.4px' }}
          role="productive"
        >
          Scores allow you to rating grading and non-grading task and attendance control. Select the
          program and class, then you can filter by time periods, you can save these periods so that
          teachers can use them as evaluation stages.
        </Text>
        <Text
          style={{ display: 'block', marginBottom: 24 }}
          role="productive"
          strong
          color="soft"
          size="xs"
          transform="uppercase"
        >
          Search period
        </Text>
      </Box>
    </DrawerPush>
  );

  return (
    <Box
      style={{
        height: 'calc(100vh - 32px)',
        display: 'flex',
        flexDirection: isVertical ? 'column' : 'row',
      }}
    >
      {isHorizontal && isLeftToRight && drawerPush}
      {isVertical && isTopToBottom && drawerPush}
      <Box style={{ height: '100%', flex: 1, backgroundColor: COLORS.interactive03, padding: 32 }}>
        <Box
          style={{ display: 'flex', alignItems: 'center', gap: 16, cursor: 'pointer' }}
          onClick={() => setIsOpened(!isOpened)}
        >
          {isOpened ? (
            <MoveLeftIcon height={24} width={24} style={{ color: COLORS.text05 }} />
          ) : (
            <MoveRightIcon height={24} width={24} style={{ color: COLORS.text05 }} />
          )}
          <Text color="primary" size="lg">
            {title}
          </Text>
        </Box>
      </Box>
      {isHorizontal && !isLeftToRight && drawerPush}
      {isVertical && !isTopToBottom && drawerPush}
    </Box>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  title: 'Click to open/close',
  drawerContent: 'Drawer is open',
  modalAriaLabel: 'Example of a DrawerPush',
  ...DRAWER_PUSH_DEFAULT_PROPS,
};
