import React, { useState} from 'react';
import { Box, Text,} from '@mantine/core';
import { ExclamationCircleIcon, StarIcon } from '@heroicons/react/solid';
import { TranslatorStyles } from './Translator.styles';
import { Button } from '../../form'; 


        <Box className={classes.moduleLegend}>
          <Button
            variant="link"
            hasError="true"
            component="span"
            className={classes.moduleLegendTitle}
          >
            Translations <ExclamationCircleIcon className={classes.errorIcon} />
          </Button>
          <Text className={classes.moduleLegendDescription} component="span">
            Untranslated content will appear in the default language
          </Text>
        </Box>;