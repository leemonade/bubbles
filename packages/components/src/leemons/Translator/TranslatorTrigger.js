import React, { useState, useContext } from 'react';
import { Box } from '@mantine/core';
import { IconError, IconSuccess } from '../../assets/FaticIcons';
import { Stack } from '../../layout';
import { Button } from '../../form';
import { Title, Text } from '../../typography';
import { Drawer } from '../../overlay';
import { TranslatorModule } from './TranslatorModule';
import { TranslatorContext } from './TranslatorContext';
import { TranslatorStyles } from './Translator.styles';

export default function TranslatorTrigger({ moduleTitle, state }) {
  const { classes, cx } = TranslatorStyles({});
  const [opened, setOpened] = useState(false);
  const { errorLang } = useContext(TranslatorContext);

  const hasError = errorLang?.length;

  return (
    <Box>
      <Stack direction="row" alignItems="baseline" spacing={4}>
        <Box>
          <Button variant="link" onClick={() => setOpened(true)}>
            Translations
          </Button>
          {hasError ? <IconError /> : <IconSuccess />}
        </Box>

        <Text role="productive" size="xs">
          Untranslated content will appear in the default language
        </Text>
      </Stack>

      <Drawer opened={opened} onClose={() => setOpened(false)} size={760} noOverlay>
        <TranslatorModule moduleTitle={moduleTitle} />
      </Drawer>
    </Box>
  );
}
