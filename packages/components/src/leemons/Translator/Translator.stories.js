import { from } from 'form-data';
import React, { useState, useContext} from 'react';
import Translator from './Translator';    


export default {
  component: Translator,
  title: 'Leemons/Translator',
 
};


const Template = (args) => {
  const [opened, setOpened] = useState(false); 
  return (
    <>
      <Translator {...args} />
     
    </>
     
  );
};

export const Default = Template.bind({});
Default.args = {
  moduleTitle: 'Configuration & languages',
};
