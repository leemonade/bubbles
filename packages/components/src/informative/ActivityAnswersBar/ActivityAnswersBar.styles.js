import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../theme.mixins';

export const ActivityAnswersBarStyles = createStyles((theme, { styles, graphicHeight }) => {
  return {
    root: {
      height: '100%',
      width: '100%',
      ...styles,
    },
    graphicWrapper: {
      width: '100%',
      height: graphicHeight,
      'svg > g g:nth-of-type(2) line': {
        stroke: `${theme.colors.uiBackground03} !important`,
        strokeWidth: '2px !important',
        strokeOpacity: 0.4,
      },
      'svg > g g:last-of-type line:first-of-type': {
        display: 'none',
      },
    },
  };
});
