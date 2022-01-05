import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mantine/core';
import { isString, isFunction } from 'lodash';
import { IconError, IconSuccess } from '../../../assets/FaticIcons';
import { Stack } from '../../../layout';
import { Button } from '../../../form';
import { Text } from '../../../typography';
import { Drawer } from '../../../overlay';
import { TranslatorModule } from './TranslatorModule';
import { TranslatorModalStyles } from './TranslatorModal.styles';

export const TRANSLATOR_MODAL_DEFAULT_PROPS = {
  labels: { title: '', trigger: '', help: '', close: '', save: '', cancel: '' },
};

export const TRANSLATOR_MODAL_PROP_TYPES = {
  labels: PropTypes.shape({
    title: PropTypes.string,
    trigger: PropTypes.string,
    help: PropTypes.string,
    close: PropTypes.string,
    save: PropTypes.string,
    cancel: PropTypes.string,
  }),
  hasError: PropTypes.bool,
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
  onClose: PropTypes.func,
};

const TranslatorModal = ({ children, labels, hasError, onSave, onClose, onCancel }) => {
  const { classes, cx } = TranslatorModalStyles({});
  const [opened, setOpened] = useState(false);

  // ···········································································
  // HANDLERS

  const handleClose = () => {
    setOpened(false);
    if (isFunction(onClose)) onClose();
  };

  const handleCancel = () => {
    setOpened(false);
    if (isFunction(onCancel)) onCancel();
  };

  const handleSave = () => {
    if (isFunction(onSave)) onSave();
  };

  return (
    <Box>
      <Stack direction="row" alignItems="baseline" spacing={4}>
        {isString(labels.trigger) && labels.trigger !== '' && (
          <Box>
            <Button variant="link" onClick={() => setOpened(true)}>
              {labels.trigger}
            </Button>

            {hasError ? <IconError /> : <IconSuccess />}
          </Box>
        )}
        {isString(labels.help) && labels.help !== '' && (
          <Text role="productive" size="xs">
            {labels.help}
          </Text>
        )}
      </Stack>

      <Drawer opened={opened} onClose={handleClose} size={715} close={labels.close} noOverlay>
        <TranslatorModule onCancel={handleCancel} onSave={handleSave} labels={labels}>
          {children}
        </TranslatorModule>
      </Drawer>
    </Box>
  );
};

TranslatorModal.defaultProps = TRANSLATOR_MODAL_DEFAULT_PROPS;
TranslatorModal.propTypes = TRANSLATOR_MODAL_PROP_TYPES;

export { TranslatorModal };
