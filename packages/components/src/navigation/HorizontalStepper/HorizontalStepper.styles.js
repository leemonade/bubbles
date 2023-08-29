import { createStyles } from '@mantine/styles';

export const HorizontalStepperStyles = createStyles(
  (theme, { }) => {
    const stepperTheme = theme.other.stepper;
    // const translateDistance = `${currentStep * stepWidth}px`;

    return {
      root: {
        display: 'flex',
        borderRadius: 4,
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
        zIndex: 2,
        overflow: 'hidden',
      },
      clickableStep: {
        cursor: 'pointer'
      },
      // selectedStep: {
      //   position: 'absolute',
      //   height: '100%',
      //   width: stepWidth,
      //   borderRadius: 4,
      //   backgroundColor: theme.colors.mainWhite,
      //   transform: `translateX(${translateDistance})`,
      //   transition: 'transform 0.2s ease-in-out',
      // },
      stepDot: {
        width: 20,
        height: 20,
        borderRadius: '50%',
        border: `1px solid ${stepperTheme.border.color.default}`,
        position: 'absolute',
        zIndex: 4,
        transition: 'border-color 0.2s ease-in-out, background-color 0.2s ease-in-out',
      },
      currentDot: {
        borderColor: stepperTheme.border.color.active,
        backgroundColor: stepperTheme.background.color.active,
      },
      prevDot: {
        backgroundColor: 'none',
        borderColor: stepperTheme.border.color.completed,
      },
      checkIcon: {
        color: stepperTheme.border.color.completed,
        height: 10,
        width: 10,
        opacity: 0,
        transform: 'translateY(6px)',
        transition: 'opacity 0.1s ease-in-out, transform 0.1s ease-in-out',
      },
      leftSide: {
        position: 'absolute',
        height: 2,
        width: 'calc(50% - 6px)',
        backgroundColor: stepperTheme.border.color.default,
        top: '24.5px',
        right: 'calc(50% + 13px)',
        transition: 'background-color 0.2s ease-in-out',
      },
      rightSide: {
        position: 'absolute',
        height: 2,
        width: 'calc(50% - 6px)',
        backgroundColor: stepperTheme.border.color.default,
        top: '24.5px',
        left: 'calc(50% + 13px)',
        transition: 'background-color 0.2s ease-in-out',
      },
      label: {
        ...stepperTheme.content.typo,
        lineHeight: '20px',
        color: stepperTheme.content.color.default,
        marginTop: 30,
        transition: 'all 0.1s ease-in-out',
        userSelect: 'none',
      },
    };
  }
);
