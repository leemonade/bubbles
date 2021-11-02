import React, { useState, forwardRef } from 'react';
import { InformationCircleIcon, StarIcon } from '@heroicons/react/solid';
import { Paragraph } from './../../typography';
import { Tab } from './Tab/Tab';
import { Tabs, TABS_POSITION } from './Tabs';
import mdx from './Tabs.mdx';

export default {
  title: 'Navigation/Tabs',
  parameters: {
    component: Tabs,
    docs: {
      page: mdx,
    },
  },
  argTypes: {
    grow: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
    position: { options: TABS_POSITION, control: { type: 'select' } },
  },
};

const Template = ({ orientation, variant, grow, position, initialTab, ...props }) => {
  return (
    <Tabs
      orientation={orientation}
      variant={variant}
      grow={grow}
      position={position}
      initialTab={initialTab}
    >
      <Tab label="React" {...props}>
        <Paragraph>A JavaScript library for building user interfaces</Paragraph>
        <Paragraph>
          React makes it painless to create interactive UIs. Design simple views for each state in
          your application, and React will efficiently update and render just the right components
          when your data changes.
        </Paragraph>
        <Paragraph>
          Build encapsulated components that manage their own state, then compose them to make
          complex UIs.
        </Paragraph>
      </Tab>

      <Tab
        label="Angular"
        leftIcon={<InformationCircleIcon style={{ width: 14, color: '#B9BEC4' }} />}
        {...props}
      >
        <Paragraph>The modern web developer&apos;s platform</Paragraph>
        <Paragraph>
          Learn one way to build applications with Angular and reuse your code and abilities to
          build apps for any deployment target. For web, mobile web, native mobile and native
          desktop.
        </Paragraph>
        <Paragraph>
          Achieve the maximum speed possible on the Web Platform today, and take it further, via Web
          Workers and server-side rendering.
        </Paragraph>
      </Tab>

      <Tab
        label="VueJS"
        rightIcon={<StarIcon style={{ width: 14, color: '#B9BEC4' }} />}
        {...props}
      >
        <Paragraph>The Progressive JavaScript Framework</Paragraph>
        <Paragraph>
          Already know HTML, CSS and JavaScript? Read the guide and start building things in no
          time!
        </Paragraph>
        <Paragraph>
          An incrementally adoptable ecosystem that scales between a library and a full-featured
          framework.
        </Paragraph>
      </Tab>
    </Tabs>
  );
};

export const DefaultTabs = Template.bind({});

DefaultTabs.args = {
  position: 'left',
  orientation: 'horizontal',
  position: 'left',
  grow: false,
  disabled: false,
};
