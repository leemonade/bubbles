import { from } from 'form-data';
import React, { useState, useContext} from 'react';
import Translator from './Translator';    


export default {
  component: Translator,
  title: 'Leemons/Translator',
  argTypes: {
  },
};


const Template = (args) => {  
  
  return (
    <>
      <Translator {...args} lang='fr' />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  moduleTitle: 'Configuration & languages',

};
