import React, { useContext } from 'react';
import { Box, Group } from '@mantine/core';
import { StarIcon } from '@heroicons/react/solid';
import { IconError, IconSuccess } from '../../assets/FaticIcons';
import { Button, TextInput } from '../../form';
import { Tabs, Tab } from '../../navigation';
import { Title, Text } from '../../typography';
import { Stack } from '../../layout';
import { TranslatorContext } from './TranslatorContext';
import { TranslatorStyles } from './Translator.styles';

export const TranslatorModule = ({ moduleTitle, ...args }) => {
  const { errorLang } = useContext(TranslatorContext);
  const hasError = errorLang?.length;
  const { classes, cx } = TranslatorStyles({});

  return (
    <Stack direction="column" spacing={4} fullWidth>
      <Title order={4}>{moduleTitle}</Title>
      <Tabs>
        <Tab
          key="1"
          label="Spanish"
          hasError={hasError && errorLang?.includes('es')}
          rightIcon={<StarIcon style={{ width: 14, color: '#B9BEC4' }} />}
        >
          <Box mt={20}>
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
        <Tab key="2" label="English" hasError={hasError && errorLang?.includes('en')}>
          <Box mt={20}>
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
        <Tab key="3" label="French" hasError={hasError && errorLang?.includes('fr')}>
          <Box mt={20}>
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
          <Text component="span" className={classes.moduleLegendTitle}>
            Option translations {hasError ? <IconError /> : <IconSuccess />}
          </Text>
          <Text role="productive">Untranslated content will appear in the default language</Text>
        </Box>
      </Box>
      <Group className={classes.buttonsGroup01} position="apart">
        <Button variant="link">Cancel</Button>
        <Button>Save</Button>
      </Group>
    </Stack>
  );
};
