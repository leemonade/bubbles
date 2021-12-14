import { Anchor, Text, List } from '@mantine/core';
import { classes } from 'istanbul-lib-coverage';
import React from 'react';
import { Breadcrumbs } from './Breadcrumbs';
import mdx from './Breadcrumbs.mdx';

export default {
  title: 'Molecules/Navigation/Breadcrumbs',
  parameters: {
    component: Breadcrumbs,
    docs: {
      page: mdx,
    },
  },
};

/* const Template = (props) => {
    return (
     <Breadcrumbs>{algo}</Breadcrumbs>
  );
};

export const DefaultBreadcrumbs = Template.bind({});

DefaultInput.args = {

};
 */
const Template = (props) => {
  const items = [
    { title: 'Mantine', href: 'https://mantine.dev' },
    { title: 'Mantine hooks', href: 'https://mantine.dev/hooks/getting-started' },
    { title: 'use-id', href: 'https://mantine.dev/hooks/use-id' },
    { title: 'use-id' },
  ].map(
    (item, index) => (
      console.log(item.href),
      (
        <Anchor href={item.href} key={index}>
          <Text component="span"></Text> {item.title}{' '}
        </Anchor>
      )
    )
  );
  return <Breadcrumbs separator="›">{items}</Breadcrumbs>;
};
export const DefaultBreadcrumbs = Template.bind({});

DefaultBreadcrumbs.args = {};
