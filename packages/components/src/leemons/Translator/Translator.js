import React, { useState} from 'react';
import { Box, Container, Title, Text, Group } from '@mantine/core';
import { ExclamationCircleIcon, StarIcon } from '@heroicons/react/solid';
import { TextInput } from '../../form/TextInput/TextInput';
import { Tabs } from '../../navigation/Tabs/Tabs';
import { TabPane as Tab } from '../../navigation/Tabs/TabPanelList/TabPane';
 
import { TranslatorStyles } from './Translator.styles';
import { Button } from '../../form';


export default function Translator({ title, state }) {
    const { classes, cx } = TranslatorStyles({});

   return (
     <Container size="sm" context="" action="" level="">

       <Title order={2} className={classes.title}>
         {title}
       </Title>
       <Tabs>
         <Tab
           key="1"
           label="Spanish"
           rightIcon={<StarIcon style={{ width: 14, color: '#B9BEC4' }} />}
         >
           <Box>
             <TextInput
               orientation="horizontal"
               placeholder="Nombre"
               label="Nombre"
               description="Nombre visible de este archivo"
             ></TextInput>
             <TextInput
               orientation="horizontal"
               placeholder="Texto de ayuda"
               label="Texto de ayuda"
               description="Escriba un texto para orientar al usuario a rellenar el contenido esperado"
             ></TextInput>
             <TextInput
               orientation="horizontal"
               placeholder="Error humano"
               label="Error humano text"
               description="La validación y el formato requeridos se harán automáticamente"
             ></TextInput>
           </Box>
         </Tab>
         <Tab key="2" label="English">
           <Box>
             <TextInput
               orientation="horizontal"
               placeholder="Label"
               label="Label"
               description="Visible name on the file."
             ></TextInput>
             <TextInput
               orientation="horizontal"
               placeholder="Help text"
               label="Help text"
               description="Use this text to orient the user to the expected content."
             ></TextInput>
             <TextInput
               orientation="horizontal"
               placeholder="Human error"
               label="Human error text"
               description="Required validation and format will added automatically."
             ></TextInput>
           </Box>
         </Tab>
         <Tab key="3" label="French" hasError={true}>
           <Box>
             <TextInput
               orientation="horizontal"
               placeholder="Étiqueter "
               label="Étiqueter "
               description="Nom visible sur le fichier. "
             ></TextInput>
             <TextInput
               orientation="horizontal"
               placeholder="Texte d'aide"
               label="Texte d'aide"
               description="Utilisez ce texte pour orienter l'utilisateur vers le contenu attendu "
             ></TextInput>
             <TextInput
               orientation="horizontal"
               placeholder="Erreur de texte humain "
               label="Erreur de texte humain "
               description="La validation et le format requis seront ajoutés automatiquement. "
             ></TextInput>
           </Box>
         </Tab>
       </Tabs>
       <Box>
         <Box className={classes.moduleLegend}>
           <Text hasError={true} component="span" className={classes.moduleLegendTitle}>
             {' '}
             Option translations <ExclamationCircleIcon className={classes.errorIcon} />
           </Text>
           <Text className={classes.moduleLegendDescription} component="span">
             Untranslated content will appear in the default language
           </Text>
         </Box>
       </Box>
       <Group className={classes.buttonsGroup01} position="apart">
         <Button variant="link">Cancel</Button>
         <Button>Save</Button>
       </Group>
     </Container>
   );
}
 