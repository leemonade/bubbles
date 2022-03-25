import React, { useState } from 'react';
import { Box, Stack } from '../../layout';
import { Button } from '../../form/Button';
import { Modal } from './Modal';
import { MODAL_DEFAULT_PROPS, MODAL_SIZES } from './Modal.constants';
import mdx from './Modal.mdx';
import { Paragraph } from '../../typography';

export default {
  title: 'Molecules/Overlay/Modal',
  parameters: {
    component: Modal,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {
    // myBooleanProp: { control: { type: 'boolean' } },
    size: { options: MODAL_SIZES, control: { type: 'select' } },
  },
};

const Template = ({ ...props }) => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal {...props} opened={opened} onClose={() => setOpened(false)}>
        <Box>
          <Paragraph>Aquí un texto guapetón</Paragraph>
        </Box>
        <Stack fullWidth justifyContent="space-between">
          <Button variant="light" onClick={() => setOpened(false)}>
            Cancel
          </Button>

          <Button onClick={() => setOpened(false)}>Confirm</Button>
        </Stack>
      </Modal>

      <Stack fullWidth justifyContent="center">
        <Box>
          <Button onClick={() => setOpened(true)}>Open Modal</Button>
        </Box>
      </Stack>
    </>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  ...MODAL_DEFAULT_PROPS,
  title: 'Introduce yourself!',
};
