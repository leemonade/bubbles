import React from 'react';
import { Box } from '../Box';
import { Button } from '../../form/Button';
import { DropdownButton } from '../../form/DropdownButton';
import { Stack } from '../Stack';
import { TotalLayoutFooterStyles } from './TotalLayoutFooter.styles';
import { TOTAL_LAYOUT_FOOTER_PROP_TYPES } from './TotalLayout.constants';

const TotalLayoutFooter = ({
  leftOffset,
  totalSteps,
  activeStep,
  onBack,
  onNext,
  onSave,
  onFinishActions,
  showFooterShadow,
}) => {
  const { classes } = TotalLayoutFooterStyles(
    { showFooterShadow, leftOffset },
    { name: 'TotalLayoutFooter' },
  );

  return (
    <Stack justifyContent="center" fullWidth>
      <Box className={classes.footer}>
        <Stack fullWidth style={{ height: 72, padding: '16px 24px' }}>
          {activeStep > 0 && (
            <Box noFlex>
              <Button variant="outline" onClick={onBack}>
                Anterior
              </Button>
            </Box>
          )}
          <div></div>
          <Stack direction="row" spacing={2} noFlex>
            <Button variant="link" onClick={onSave}>
              Guardar borrador
            </Button>
            {activeStep < totalSteps - 1 ? (
              <Button onClick={onNext}>Siguiente</Button>
            ) : (
              <DropdownButton data={onFinishActions}>Finalizar</DropdownButton>
            )}
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};

TotalLayoutFooter.propTypes = TOTAL_LAYOUT_FOOTER_PROP_TYPES;

export default TotalLayoutFooter;
