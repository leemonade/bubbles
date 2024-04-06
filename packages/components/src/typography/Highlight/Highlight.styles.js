import { createStyles } from '@mantine/styles';
import { getFontProductive } from '../../theme.mixins';

export const HighlightStyles = createStyles((theme) => ({
  root: {
    ...getFontProductive(),
  },
}));
