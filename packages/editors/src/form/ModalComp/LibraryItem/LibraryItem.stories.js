import { LibraryItem, MODALCOMP_DEFAULT_PROPS } from './LibraryItem';

export default {
  title: 'Atom/Form/LibraryItem',
  parameters: {
    component: LibraryItem,
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

const Template = ({ content, numberOfTools, ...props }) => {
  return <LibraryItem {...props}></LibraryItem>;
};

export const Playground = Template.bind({});

Playground.args = {
  ...MODALCOMP_DEFAULT_PROPS,
  card: {
    name: 'Forrarmesa',
    image: 'https://cdn.pixabay.com/photo/2014/02/17/10/20/statue-of-liberty-267948__480.jpg',
    fileExtension: 'pdf',
    fileType: 'audio',
    date: '2022-06-12',
  },
};
