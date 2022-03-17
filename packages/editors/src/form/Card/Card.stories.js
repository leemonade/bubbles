import { Box, COLORS } from '@bubbles-ui/components';
import { Card, CARD_DEFAULT_PROPS } from './Card';

export default {
  title: 'Atom/Form/Card',
  parameters: {
    component: Card,
    docs: {
      // page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {},
};

const Template = ({ onClick, ...props }) => {
  return (
    <Box style={{ maxWidth: 760 }}>
      <Card {...props}></Card>
    </Box>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  ...CARD_DEFAULT_PROPS,
  node: {
    attrs: {
      title: 'PLAYER VIDEO/AUDIO',
      description:
        'We’ve always been told that the brain contains billions of neurons, which, of course, have an essential role in all the processes…',
      color: COLORS.ui01,
      fileType: 'video',
      image:
        'https://images.unsplash.com/photo-1646596504587-c3771cf62e81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0NjkyNjM3OA&ixlib=rb-1.2.1&q=80&w=1080',
    },
  },
};
