import React from 'react';
import { Tooltip } from './Tooltip';
import { TOOLTIP_COLORS, TOOLTIP_POSITION, TOOLTIP_SIZES } from './Tooltip.constants';
import mdx from './Tooltip.mdx';
import { Button } from '../../form/Button';
import { Stack } from '../../layout';

export default {
  title: 'Atoms/Overlay/Tooltip',
  parameters: {
    component: Tooltip,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/c3MWm2gVHU4JfYlVfr5VvB/%F0%9F%8D%8B%F0%9F%92%A7-Bubbles-SD-v2?node-id=3652%3A33471',
    },
  },
  argTypes: {
    size: { options: TOOLTIP_SIZES, control: { type: 'select' } },
    color: { options: TOOLTIP_COLORS, control: { type: 'select' } },
    position: { options: TOOLTIP_POSITION, control: { type: 'select' } },
  },
};

const Template = ({ children, label, ...props }) => {
  return (
    <Stack justifyContent="center" alignItems="center" fullWidth style={{ height: '100px' }}>
      <Tooltip {...props} label={label}>
        <Button variant="outline">{children}</Button>
      </Tooltip>
    </Stack>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  size: 'xs',
  color: 'primary',
  children: 'test',
  position: 'top',
  withArrow: true,
  label: 'Tooltip label',
};
