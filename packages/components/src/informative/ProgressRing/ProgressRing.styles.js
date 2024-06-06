import { createStyles } from '@mantine/styles';
import { getFontExpressive } from '../../theme.mixins';

const ProgressRingStyles = createStyles((theme, { rootColor }) => ({
  root: {
    ...getFontExpressive(theme.fontSizes['2']),
    '& svg > circle:nth-of-type(1)': {
      stroke: rootColor,
    },
  },
}));

export default ProgressRingStyles;
export { ProgressRingStyles };
