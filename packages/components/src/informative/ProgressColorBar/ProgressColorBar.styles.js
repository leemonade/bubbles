import { createStyles } from '@mantine/styles';
import { pxToRem } from '../../theme.mixins';

export const ProgressColorBarStyles = createStyles((theme, { trackColor }) => {
  const root = {};

  if (trackColor) {
    root.backgroundColor = trackColor;
  }

  return {
    root,
    topLabelsContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: pxToRem(8),
    },
    labels: {
      color: theme.other.progress.content.color.text,
      ...theme.other.progress.content.typo,
    },
  };
});

export default ProgressColorBarStyles;
