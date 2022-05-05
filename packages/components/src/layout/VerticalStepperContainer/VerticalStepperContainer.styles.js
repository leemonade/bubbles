import { createStyles } from '@mantine/styles';
import { isNumber } from 'lodash';
import { pxToRem } from '../../theme.mixins';

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
        width: navWidth,
        height: 'fit-content',
      },
      content: {
        paddingLeft: disableContentPadding ? 0 : theme.spacing[10],
        width: '100%',
      },
    };
  }
);
