import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../../theme.mixins';

export const CustomBarStyles = createStyles((theme, {}) => {
  return {
    root: {
      height: '100%',
      userSelect: 'none',
      'svg > g g:nth-of-type(2) line': {
        stroke: `${theme.colors.uiBackground03} !important`,
        strokeWidth: '2px !important',
        strokeOpacity: 0.4,
      },
      'svg > g g:nth-last-of-type(2) line:first-of-type': {
        display: 'none',
      },
      'svg > g g:last-child line': {
        transform: 'translateY(-0.5%)',
      },
    },
    label: {
      ...getFontProductive(theme.fontSizes['1']),
      fill: theme.colors.mainWhite,
      fontWeight: 600,
    },
    barPercentage: {
      ...getFontExpressive(theme.fontSizes['3']),
      fill: theme.colors.text02,
      fontWeight: 600,
    },
  };
});
