import React from 'react';
import { Box } from '../Box';
import { Button } from '../../form/Button';
import { DropdownButton } from '../../form/DropdownButton';
import { TotalLayoutFooterStyles } from './TotalLayoutFooter.styles';
import { TOTAL_LAYOUT_FOOTER_PROP_TYPES } from './TotalLayout.constants';
import { TotalLayoutFooterContainer } from './TotalLayoutFooterContainer/TotalLayoutFooterContainer';

const TotalLayoutFooter = ({
  leftOffset,
  activeStep,
  scrollRef,
  onBack,
  onNext,
  finalActions,
  footerActionsLabels,
  minStepNumberForDraftSave,
  onSave,
  isLastStep,
  isLoading,
}) => {
  const { classes } = TotalLayoutFooterStyles({}, { name: 'TotalLayoutFooter' });

  const renderFinalActions = () => {
    // It's not the final step
    if (!isLastStep) return <Button onClick={onNext}>{footerActionsLabels.next}</Button>;

    // It's the final step and there's more than one final action
    if (finalActions?.length > 1) {
      return (
        <DropdownButton
          chevronUp
          width="auto"
          data={finalActions}
          loading={isLoading}
          disabled={isLoading}
        >
          {footerActionsLabels.dropdownLabel || 'Finalizar'}
        </DropdownButton>
      );
    }

    // It's the final step and there's only one final action
    return <Button onClick={finalActions[0].onClick}>{finalActions[0].label}</Button>;
  };

  return (
    <TotalLayoutFooterContainer
      leftOffset={leftOffset}
      scrollRef={scrollRef}
      leftZone={
        <>
          {activeStep > 0 && (
            <Box noFlex>
              {/* BACK */}
              <Button variant="outline" onClick={onBack}>
                {footerActionsLabels.back}
              </Button>
            </Box>
          )}
        </>
      }
      rightZone={
        <>
          {/* SAVE? */}
          {!Number.isNaN(minStepNumberForDraftSave) && activeStep >= minStepNumberForDraftSave && (
            <Button variant="link" onClick={onSave}>
              {footerActionsLabels.save}
            </Button>
          )}
          {/* NEXT OR FINAL ACTIONS */}
          {renderFinalActions()}
        </>
      }
    />
  );
};

TotalLayoutFooter.propTypes = TOTAL_LAYOUT_FOOTER_PROP_TYPES;

export default TotalLayoutFooter;
