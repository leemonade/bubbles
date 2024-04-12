import React from 'react';
import { Drawer, DRAWER_DEFAULT_PROPS, DRAWERS_SIZES } from './Drawer';
import mdx from './Drawer.mdx';
import { ContextContainer, Stack } from '../../layout';
import { Paragraph } from '../../typography';
import { Button } from '../../form';

export default {
  title: 'Molecules/Overlay/Drawer',
  parameters: {
    component: Drawer,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {
    size: {
      options: DRAWERS_SIZES,
      control: { type: 'select' },
    },
    contentLoading: {
      control: { type: 'boolean' },
    },
  },
};

const Template = ({ contentLoading, ...props }) => {
  const [opened, setOpened] = React.useState(props.opened);

  React.useEffect(() => {
    setOpened(props.opened);
  }, [props.opened]);

  return (
    <>
      <Stack>
        <Button onClick={() => setOpened(true)}>Open Drawer</Button>
      </Stack>
      <Drawer {...props} opened={opened} onClose={() => setOpened(false)}>
        <Drawer.Header title="Drawer Title">
          <Drawer.Header.RightActions>
            <span>Holaa</span>
          </Drawer.Header.RightActions>
        </Drawer.Header>
        <Drawer.Content loading={contentLoading}>
          <ContextContainer title="Drawer Content - Part I">
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </Paragraph>
          </ContextContainer>
          <ContextContainer title="Drawer Content - Part II">
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </Paragraph>
          </ContextContainer>
          <ContextContainer title="Drawer Content - Part III">
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </Paragraph>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </Paragraph>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </Paragraph>
          </ContextContainer>
        </Drawer.Content>
        <Drawer.Footer>
          <Drawer.Footer.LeftActions>
            <Button variant="outline">Cancel</Button>
          </Drawer.Footer.LeftActions>
          <Drawer.Footer.RightActions>
            <Button>Accept</Button>
          </Drawer.Footer.RightActions>
        </Drawer.Footer>
      </Drawer>
    </>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  ...DRAWER_DEFAULT_PROPS,
  opened: true,
  modalAriaLabel: 'Example of a Drawer',
  contentLoading: false,
};
