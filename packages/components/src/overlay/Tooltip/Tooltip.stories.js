import React, { useEffect, useState } from 'react';
import { Box, Button, Group } from '@mantine/core';
import { Tooltip, TOOLTIP_COLORS, TOOLTIP_POSITION, TOOLTIP_PLACEMENT, TOOLTIP_SIZES } from './Tooltip';
import mdx from './Tooltip.mdx';
import { ChevronRightIcon } from '@heroicons/react/outline';

export default {
  title: 'Overlay/Tooltip',
  parameters: {
    component: Tooltip,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {
    size: { options: TOOLTIP_SIZES, control: { type: 'select' } },
    color: { options: TOOLTIP_COLORS, control: { type: 'select' } },
    position: { options: TOOLTIP_POSITION, control: { type: 'select' } },
    placement: { options: TOOLTIP_PLACEMENT, control: { type: 'select' } },
  },
};

const Template = ({children, label, ...props }) => {
  
  const [opened, setOpened] = useState(true);
  label = label || <> Share <ChevronRightIcon style={{ height: '1.2rem' }} /></>;

  useEffect(() => {
    return () => {
      setOpened(false)
    }
  },[]);

  return (
    <>
       <Group style={{
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'center',
         height: '130px'
       }}>
        <Tooltip {...props} label={label} opened={opened} >
          <Button variant="outline" onClick={() => setOpened((o) => !o)}>
            {children}
          </Button>
        </Tooltip>
       </Group>
    </>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  size: 'xs',
  color: 'primary',
  children: 'test',
  position: 'top',
  placement: 'center',
  withArrow: true,
  label: '',
};
