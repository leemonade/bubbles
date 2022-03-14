import { ModalComp, MODALCOMP_DEFAULT_PROPS } from './ModalComp';

export default {
  title: 'Atom/Form/ModalComp',
  parameters: {
    component: ModalComp,
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
  return <ModalComp {...props}></ModalComp>;
};

export const Playground = Template.bind({});

Playground.args = {
  ...MODALCOMP_DEFAULT_PROPS,
  labels: {
    input: 'Item from library',
    select: 'Select item',
  },
};
