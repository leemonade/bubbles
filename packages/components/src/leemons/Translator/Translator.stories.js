import React, { useState, useContext} from 'react'; 
import Translator from './Translator';    


const LANGUAGES = ['en', 'es', 'fr'];

export default {
  component: Translator,
  title: 'Leemons/Translator',
  argTypes: {
    langError: { options: LANGUAGES, control: { type: 'multi-select' } },
  },
};



const Template = ({langError, ...args}) => {  
     
  return (
    <>
      <Translator {...args} lang={langError} />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  moduleTitle: 'Configuration & languages',

};
