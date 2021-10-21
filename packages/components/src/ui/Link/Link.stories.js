import React from 'react';
import { Link } from './Link';
import mdx from './Link.mdx';

export default {
  title: 'Components/Link',
  parameters: {
    component: Link,
    docs: {
      page: mdx,
    },
  },
};

const Template = (args) => <Link {...args}>Link</Link>;

export const Basic = Template.bind({});
Basic.args = {
  href: 'https://www.leemons.io',
};
