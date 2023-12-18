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
  const [showFooterBorder, setShowFooterBorder] = React.useState(false);
  const { classes } = TotalLayoutFooterStyles(
    { showFooterBorder, leftOffset },
    { name: 'TotalLayoutFooter' },
  );

  // Define scroll and window resizing behavior
  const handleScroll = () => {
    const div = scrollRef.current;
    if (div) {
      const { scrollTop, scrollHeight, clientHeight } = div;
      const atTheBottom = scrollHeight - scrollTop === clientHeight;
      const isScrollable = scrollHeight > clientHeight;
      if (isScrollable && !atTheBottom && !showFooterBorder) {
        setShowFooterBorder(true);
      } else if ((!isScrollable && showFooterBorder) || (atTheBottom && showFooterBorder)) {
        setShowFooterBorder(false);
      }
    }
  };
  React.useEffect(() => {
    const body = scrollRef.current;
    if (body) {
      handleScroll();
      body.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', handleScroll);
      return () => {
        body.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleScroll);
      };
    }
    return () => {};
  }, [scrollRef?.current, handleScroll]);

  const renderFinalActions = () => {
    // It's not the final step
    if (!isLastStep) return <Button onClick={onNext}>{footerActionsLabels.next}</Button>;

    // It's the final step and there's more than one final action
    if (finalActions?.length > 1) {
      return (
        <DropdownButton data={finalActions} loading={isLoading} disabled={isLoading}>
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
