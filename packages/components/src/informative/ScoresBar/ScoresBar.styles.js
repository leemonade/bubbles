import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../theme.mixins';

export const ScoresBarStyles = createStyles((theme, { withMarker }) => {
  return {
    root: {
      height: '100%',
      'svg > g g:nth-of-type(2) line': {
        stroke: `${theme.colors.uiBackground03} !important`,
        strokeWidth: '2px !important',
        strokeOpacity: 0.4,
      },
      'svg > g g:last-child line:first-of-type': {
        display: !withMarker && 'none',
      },
    },
    label: {
      ...getFontProductive(theme.fontSizes['1']),
      fill: theme.colors.mainWhite,
      fontWeight: 600,
    },
  };
});
