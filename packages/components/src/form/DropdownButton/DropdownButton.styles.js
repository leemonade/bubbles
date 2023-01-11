import { createStyles } from '@mantine/styles';
import { pxToRem } from '../../theme.mixins';

export const DropdownButtonStyles = createStyles((theme, {}) => {
  return {
    icon: {
      width: pxToRem(16),
      margin: '0 auto'
    }

  };
});
