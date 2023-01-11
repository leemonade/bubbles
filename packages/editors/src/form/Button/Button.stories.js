import React from 'react';
import { Button, BUTTON_DEFAULT_PROPS, BUTTON_POSITIONS } from './Button';
import { StarIcon } from '@bubbles-ui/icons/solid/';
import isFunction from 'lodash/isFunction';
import mdx from './Button.mdx';

export default {
  title: 'Atom/Form/Button',
  parameters: {
    component: Button,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {
    onClick: { action: 'onClick' },
    position: { control: { type: 'select' }, options: BUTTON_POSITIONS },
  },
};

const Template = ({ onClick, ...props }) => {
  const [actived, setActived] = React.useState(props.actived);

  const onClickHandler = () => {
    isFunction(onClick) && onClick();
    setActived(!actived);
  };

  return <Button {...props} onClick={onClickHandler} actived={actived}></Button>;
};

export const Playground = Template.bind({});

Playground.args = {
  ...BUTTON_DEFAULT_PROPS,
  icon: <StarIcon />,
  label: 'Star',
  disabled: false,
};
