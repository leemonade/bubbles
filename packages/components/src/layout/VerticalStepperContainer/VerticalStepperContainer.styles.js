import { createStyles } from '@mantine/styles';
import { isNaN, isNumber } from 'lodash';
import { pxToRem } from '../../theme.mixins';

function parseWidth(value) {
  const result = parseInt(value);

  console.log('value:', value);
  console.log('result:', result);

  if (
    isNaN(result) &&
    ([('vh', 'vw', 'em', 'em')].includes(value.slice(-2)) || ['%'].includes(value.slice(-1)))
  ) {
    return value;
  }

  return result;
}

export const VerticalStepperContainerStyles = createStyles(
  (theme, { disableContentPadding, navWidth, stickyAt }) => {
    return {
      root: {
        position: 'relative',
        display: 'flex',
        width: '100%',
      },
      stepper: {
        position: isNumber(stickyAt) ? 'sticky' : 'relative',
        top: isNumber(stickyAt) ? `${pxToRem(stickyAt)}` : 0,
        width: parseWidth(navWidth),
        height: 'fit-content',
      },
      content: {
        paddingLeft: disableContentPadding ? 0 : theme.spacing[10],
        width: '100%',
      },
    };
  }
);
