import React from 'react';
import { Box } from '../Box';
import { Button } from '../../form/Button';
import { DropdownButton } from '../../form/DropdownButton';
import { Stack } from '../Stack';
import { TotalLayoutFooterStyles } from './TotalLayoutFooter.styles';
import { TOTAL_LAYOUT_FOOTER_PROP_TYPES } from './TotalLayout.constants';

const TotalLayoutFooter = ({
  leftOffset,
  activeStep,
  showFooterShadow,
  onBack,
  onNext,
  finalActions,
  footerActionsLabels,
  minStepNumberForDraftSave,
  onSave,
  isLastStep,
}) => {
  const { classes } = TotalLayoutFooterStyles(
    { showFooterShadow, leftOffset },
    { name: 'TotalLayoutFooter' },
  );

  const renderFinalActions = () => {
    // It's not the final step
    if (!isLastStep) return <Button onClick={onNext}>{footerActionsLabels.next}</Button>;

    // It's the final step and there's more than one final action
    if (finalActions?.length > 1) {
      return (
        <DropdownButton data={finalActions}>
          {footerActionsLabels.dropdownLabel || 'Finalizar'}
        </DropdownButton>
      );
    }

    // It's the final step and there's only one final action
    return <Button onClick={finalActions[0].onClick}>{finalActions[0].label}</Button>;
  };

  return (
    <Stack justifyContent="center" fullWidth>
      <Box className={classes.footer}>
        <Stack fullWidth style={{ height: 72, padding: '16px 24px' }}>
          {activeStep > 0 && (
            <Box noFlex>
              {/* BACK */}
              <Button variant="outline" onClick={onBack}>
                {footerActionsLabels.back}
              </Button>
            </Box>
          )}
          <div></div>
          <Stack direction="row" spacing={2} noFlex>
            {/* SAVE? */}
            {!Number.isNaN(minStepNumberForDraftSave) &&
              activeStep >= minStepNumberForDraftSave && (
                <Button variant="link" onClick={onSave}>
                  {footerActionsLabels.save}
                </Button>
              )}
            {/* NEXT OR FINAL ACTIONS */}
            {renderFinalActions()}
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};

TotalLayoutFooter.propTypes = TOTAL_LAYOUT_FOOTER_PROP_TYPES;

export default TotalLayoutFooter;
