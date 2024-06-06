import { createStyles } from '@mantine/styles';
import { pxToRem } from '../../theme.mixins';

const ProgressBottomBarStyles = createStyles((theme) => ({
  topLabelContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: pxToRem(8),
  },
  labelTop: {
    color: theme.other.progress.content.color.text,
    ...theme.other.progress.content.typo,
  },
}));

export { ProgressBottomBarStyles };
