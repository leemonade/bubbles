import React, { useState, useContext} from 'react';
import { Box, Container, Title, Text, Drawer } from '@mantine/core';
import { IconError, IconSuccess } from '../../assets/FaticIcons';
import {Button} from '../../form/Button/Button';
import TranslatorModule from './TranslatorModule';
import { TranslatorContext } from './TranslatorContext';
import { TranslatorStyles } from './Translator.styles';
 


export default function TranslatorTrigger({ moduleTitle, state }) {
    const { classes, cx } = TranslatorStyles({});
    const [opened, setOpened] = useState(false);
    const { errorLang } = useContext(TranslatorContext);

    const hasError = errorLang?.length;
    
   return (
     <Container>
       <Box className={classes.moduleLegend}>
         <Text component="span" className={classes.moduleLegendTitle}>
           <Button variant="link" onClick={() => setOpened(true)}>
             Translations
           </Button>
           {hasError ? <IconError /> : <IconSuccess />}
         </Text>
         <Text className={classes.moduleLegendDescription} component="span">
           Untranslated content will appear in the default language
         </Text>
       </Box>
       <Drawer
         opened={opened}
         onClose={() => setOpened(false)}
         title=""
         position="right"
         padding="xl"
         shadow="lg"
         size="760px"
         noOverlay
       >
         <TranslatorModule moduleTitle={moduleTitle} />
       </Drawer>
     </Container>
   );
}
 