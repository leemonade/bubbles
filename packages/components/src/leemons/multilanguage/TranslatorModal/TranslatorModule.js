import React, { useContext, useState, useEffect } from 'react';
import { Box, Group } from '@mantine/core';
import { Button } from '../../../form';
import { Title } from '../../../typography';
import { Stack } from '../../../layout';
import { TranslatorModalStyles } from './TranslatorModal.styles';

export const TranslatorModule = ({ children, labels, onCancel, onSave }) => {
  const { classes, cx } = TranslatorModalStyles({});

  return (
    <Stack direction="column" spacing={4} fullWidth>
      <Title order={4}>{labels.title}</Title>
      <Box>{children}</Box>
      <Group className={classes.buttonsGroup01} position="apart">
        <Button variant="link" onClick={onCancel}>
          {labels.cancel}
        </Button>
        <Button onClick={onSave}>{labels.save}</Button>
      </Group>
    </Stack>
  );
};
