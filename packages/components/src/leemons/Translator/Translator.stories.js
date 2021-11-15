import React from 'react';
import Translator from './Translator';

export default {
  component: Translator,
  title: 'Leemons/Translator',
};

const Template = (args) => <Translator {...args} />;

export const Default = Template.bind({});
Default.args = { 
    title: 'Configuration & languages',
    state: '', 
};

