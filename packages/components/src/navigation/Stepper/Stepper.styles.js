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
      stepProps.width = '100%';
      stepProps.padding = `${pxToRem(12)} ${pxToRem(10)}`;
      stepProps.paddingLeft = isVertical ? pxToRem(24) : 0;

      stepCompletedIcon.backgroundColor = `${theme.colors.fatic02} !important`;
      stepCompletedIcon.borderColor = `${theme.colors.fatic02} !important`;
    }

    return {
      root: {
        display: 'flex',
        flexDirection: isVertical ? 'row' : 'column',
        position: 'relative',
        maxWidth: usePageContainer && theme.breakpoints['xl'],
      },
      steps: {
        ...stepsProps,
        width: parseWidth(navWidth, isVertical),
        backgroundColor: !isVertical && theme.colors.interactive03,
        borderRadius: !isVertical && '4px',
        overflow: isVertical && 'hidden',
      },
      step: {
        ...stepProps,
        gap: isVertical ? 20 : 15,
        padding: isVertical ? `10px 10px` : `${pxToRem(15)} ${pxToRem(10)}`,
        borderRadius: !isVertical && '3px',
        marginTop: isVertical && 0,
        alignItems: isVertical && 'center',
        '&[data-progress]': {
          backgroundColor: !isVertical && `#FFFFFF !important`,
          margin: !isVertical && '2px !important',
          '.mantine-Stepper-stepLabel': {
            color: theme.colors.text01,
          },
        },
        '&[data-completed]': {
          backgroundColor: isVertical && theme.colors.interactive03,
        },
        overflow: 'visible',
      },
      lastStep: {
        '.mantine-Stepper-stepWrapper': isVertical && {
          '&:after': {
            position: 'absolute',
            backgroundColor: 'white',
            content: '""',
            right: 'calc(50% - 2px)',
            top: '50%',
            width: 4,
            bottom: -100,
            zIndex: 100,
          },
        },
        '&[data-completed]': {
          '.mantine-Stepper-stepWrapper': isVertical && {
            '&:after': {
              backgroundColor: isVertical && theme.colors.interactive03,
            },
          },
        },
      },
      stepBody: {
        flex: 1,
        margin: 0,
      },
      separator: {
        ...separatorProps,
      },
      verticalSeparator: {
        ...separatorProps,
        flex: 0,
        marginBottom: 0,
        borderRight: `1px dashed ${theme.colors.ui01}`,
        borderLeft: 'none',
        borderTopWidth: 0,
        left: 9.5,
        top: 0,
      },
      stepWrapper: {},
      separatorActive: {
        ...separatorActiveProps,
      },
      verticalSeparatorActive: {
        borderColor: `${theme.colors.ui01} !important`,
      },
      stepLabel: {
        ...getFontExpressive(theme.fontSizes[2]),
        color: theme.colors.text04,
        textAlign: 'left',
      },
      stepIcon: {
        backgroundColor: isVertical ? '#FFF' : 'transparent',
        borderColor: `${theme.colors.text08} !important`,
        borderWidth: '1px',
        fontSize: '0.8em',
        margin: '4px',
        zIndex: 999,
        '&[data-progress]': {
          color: theme.colors.interactive01,
          borderColor: `${theme.colors.interactive01} !important`,
          backgroundColor: '#FFFFFF !important',
          borderWidth: '2px !important',
          width: `20px !important`,
          height: `20px !important`,
          margin: '0px !important',
        },
        '&[data-completed]': {
          ...stepCompletedIcon,
          width: `20px !important`,
          height: `20px !important`,
          margin: '0px !important',
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
