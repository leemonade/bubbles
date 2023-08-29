import { createStyles } from '@mantine/styles';
import { isNumber } from 'lodash';
import { pxToRem } from '../../theme.mixins';

export const HorizontalStepperContainerStyles = createStyles((theme, { fullHeight }) => {
  const globalTheme = theme.other.global;

  return {
    root: {
      position: 'relative',
      display: 'flex',
      width: '100%',
      minHeight: fullHeight ? '100vh' : undefined,
      flexDirection: 'column',
      backgroundColor: globalTheme.background.color.surface.subtle,
    },
  };
});
