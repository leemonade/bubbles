import { createStyles } from '@mantine/styles';
import { pxToRem } from '../../theme.mixins';

export const ProgressColorBarStyles = createStyles(() => ({
  topLabelsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: pxToRem(8),
  },
}));

export default ProgressColorBarStyles;
