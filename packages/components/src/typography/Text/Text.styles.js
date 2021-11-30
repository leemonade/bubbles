import { createStyles } from '@mantine/styles';
import { getFontExpressive } from '../../theme.mixins';

export const TextStyles = createStyles((theme, {}) => {
  return {
    root: {
      ...getFontExpressive(),
    },
  };
});
