import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../theme.mixins';

export const HorizontalStepperStyles = createStyles(
  (theme, { allowStepClick, currentStep, stepWidth, dataLenght }) => {
    const isStart = currentStep === 0;
    const isEnd = currentStep === dataLenght - 1;

    const translateDistance = `${currentStep * stepWidth}px`;

    return {
      root: {
        display: 'flex',
        borderRadius: 4,
        border: `2px solid #EDEFF5`,
        backgroundColor: theme.colors.interactive03,
        position: 'relative',
        overflow: 'hidden',
      },
      step: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 16,
        paddingBottom: 18,
        position: 'relative',
        cursor: allowStepClick && 'pointer',
        zIndex: 2,
        overflow: 'hidden',
      },
      selectedStep: {
        position: 'absolute',
        height: '100%',
        width: stepWidth,
        borderRadius: 4,
        backgroundColor: theme.colors.mainWhite,
        transform: `translateX(${translateDistance})`,
        transition: 'transform 0.2s ease-in-out',
      },
      stepDot: {
        width: 14,
        height: 14,
        borderRadius: '50%',
        border: `1.5px solid ${theme.colors.text06}`,
        position: 'absolute',
        zIndex: 4,
        transition: 'border-color 0.2s ease-in-out',
      },
      currentDot: {
        borderColor: '#3C72C2',
      },
      checkIcon: {
        color: '#3C72C2',
        height: 8,
        width: 8,
        opacity: 0,
        transform: 'translateY(6px)',
        transition: 'opacity 0.1s ease-in-out, transform 0.1s ease-in-out',
      },
      leftSide: {
        position: 'absolute',
        height: 1,
        width: 'calc(50% - 6px)',
        backgroundColor: theme.colors.text06,
        top: '22.5px',
        right: 'calc(50% + 6px)',
        transition: 'background-color 0.2s ease-in-out',
      },
      rightSide: {
        position: 'absolute',
        height: 1,
        width: 'calc(50% - 6px)',
        backgroundColor: theme.colors.text06,
        top: '22.5px',
        left: 'calc(50% + 6px)',
        transition: 'background-color 0.2s ease-in-out',
      },
      label: {
        fontWeight: 500,
        color: theme.colors.text04,
        marginTop: 30,
        textAlign: 'center',
        transition: 'all 0.1s ease-in-out',
      },
      currentLabel: {
        color: theme.colors.text01,
        fontWeight: 600,
      },
      isCurrentOrPrev: {
        backgroundColor: theme.colors.ui01,
      },
      isPrev: {
        backgroundColor: '#3C72C2',
      },
    };
  }
);
