import { createStyles } from '@mantine/styles';
import { isNumber } from 'lodash';
import { pxToRem } from '../../theme.mixins';

export const HorizontalStepperContainerStyles = createStyles((theme, { stickyAt }) => {
  return {
    root: {
      position: 'relative',
      display: 'flex',
      width: '100%',
      flexDirection: 'column',
    },
    stepper: {
      position: isNumber(stickyAt) ? 'sticky' : 'relative',
      top: isNumber(stickyAt) ? `${pxToRem(stickyAt)}` : 0,
      width: '100%',
      height: 'fit-content',
    },
    content: {
      width: '100%',
    },
  };
});
