import { createStyles } from '@mantine/styles';
import { isNaN, isNumber } from 'lodash';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../theme.mixins';

function parseWidth(value, isVertical) {
  if (isVertical && (value === 'auto' || !value)) {
    return 276;
  }

  const result = parseInt(value);

  if (
    isNaN(result) ||
    [('vh', 'vw', 'em', 'em')].includes(value.slice(-2)) ||
    ['%'].includes(value.slice(-1))
  ) {
    return value;
  }

  return result;
}

export const StepperStyles = createStyles(
  (theme, { isVertical, navWidth, stickyAt, usePageContainer }) => {
    const stepsProps = {
      position: isNumber(stickyAt) ? 'sticky' : 'relative',
      top: isNumber(stickyAt) ? `${pxToRem(stickyAt)}` : 0,
      height: 'fit-content',
    };

    const stepProps = {
      flex: 1,
      flexDirection: !isVertical && 'column',
    };
    const separatorProps = {
      borderTop: `1px dashed ${theme.colors.ui01}`,
      backgroundColor: 'transparent',
    };
    const separatorActiveProps = {
      borderStyle: 'solid',
      backgroundColor: 'transparent',
      borderColor: `${theme.colors.ui01} !important`,
    };
    const stepCompletedIcon = {
      backgroundColor: `${theme.colors.interactive01} !important`,
      borderColor: `${theme.colors.interactive01} !important`,
    };

    if (isVertical) {
      stepProps.flex = 0;
      // stepProps.flexDirection = 'row';
      stepProps.width = '100%';
      stepProps.padding = `${pxToRem(12)} ${pxToRem(10)}`;
      stepProps.paddingLeft = isVertical ? pxToRem(24) : 0;

      separatorProps.flex = 0;
      separatorProps.marginTop = '-24px !important';
      separatorProps.marginBottom = 0;
      separatorProps.transform = 'translate(-14px, 14px)';
      separatorProps.borderRight = `1px dashed ${theme.colors.ui01}`;
      separatorProps.borderTopWidth = 0;

      separatorActiveProps.borderColor = `${theme.colors.ui01} !important`;

      stepCompletedIcon.backgroundColor = `${theme.colors.fatic02} !important`;
      stepCompletedIcon.borderColor = `${theme.colors.fatic02} !important`;
    }

    return {
      root: {
        display: 'flex',
        flexDirection: isVertical ? 'row' : 'column',
        position: 'relative',
        maxWidth: usePageContainer && theme.breakpoints['lg'],
      },
      steps: {
        ...stepsProps,
        width: parseWidth(navWidth, isVertical),
        backgroundColor: !isVertical && theme.colors.interactive03,
        borderRadius: !isVertical && '4px',
      },
      step: {
        ...stepProps,
        gap: isVertical ? 20 : 15,
        padding: isVertical ? `${pxToRem(10)} ${pxToRem(10)}` : `${pxToRem(15)} ${pxToRem(10)}`,
        borderRadius: !isVertical && '3px',
      },
      stepBody: {
        flex: 1,
        margin: 0,
      },
      separator: {
        ...separatorProps,
      },
      separatorActive: {
        ...separatorActiveProps,
      },
      stepCompleted: {
        backgroundColor: isVertical && theme.colors.interactive03,
        '.mantine-Stepper-stepIcon': {
          ...stepCompletedIcon,
          width: `20px !important`,
          height: `20px !important`,
          margin: '0px !important',
        },
      },
      stepLabel: {
        ...getFontExpressive(theme.fontSizes[2]),
        color: theme.colors.text04,
        textAlign: 'left',
      },
      stepIcon: {
        backgroundColor: 'transparent !important',
        borderColor: `${theme.colors.text08} !important`,
        borderWidth: '1px !important',
        fontSize: '0.8em',
        margin: '4px !important',
      },
      stepProgress: {
        backgroundColor: !isVertical && `#FFFFFF !important`,
        margin: !isVertical && '2px !important',

        '.mantine-Stepper-stepIcon': {
          color: theme.colors.interactive01,
          borderColor: `${theme.colors.interactive01} !important`,
          backgroundColor: '#FFFFFF !important',
          borderWidth: '2px !important',
          width: `20px !important`,
          height: `20px !important`,
          margin: '0px !important',
        },
        '.mantine-Stepper-stepLabel': {
          color: theme.colors.text01,
        },
      },
      stepCompletedIcon: {},
      content: {
        paddingTop: isVertical ? 0 : theme.spacing[6],
        paddingLeft: isVertical ? theme.spacing[8] : 0,
        paddingRight: isVertical ? theme.spacing[5] : 0,
        flex: 1,
      },
    };
  }
);
