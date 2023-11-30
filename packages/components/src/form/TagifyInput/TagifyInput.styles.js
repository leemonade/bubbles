import { createStyles } from '@mantine/styles';
import { getFontProductive } from '../../theme.mixins';
import { getInputSizes, getInputStyle } from '../mixins/fieldStyles.mixins';

const TagifyInputStyles = createStyles((theme, { size }) => {
  const fontSizes = {
    xs: theme.fontSizes['1'],
    sm: theme.fontSizes['2'],
    md: theme.fontSizes['3'],
  };
  const inputTheme = theme.other.input;
  return {
    root: {
      marginBottom: theme.spacing['1'],
      '&.tagify': {
        border: 0,
        borderRadius: 4,
        borderColor: theme.colors.ui01,
        color: theme.colors.text02,
        lineHeight: 0,
      },
      '& .tagify__input': {
        ...getInputSizes(size || 'md', inputTheme.spacing.padding, false),
        ...getInputStyle(inputTheme, theme.other.global),
        borderRadius: 4,
        fontSize: fontSizes[size],
      },

      '&.tagify--focus': {
        // borderColor: theme.colors.ui01,
        // boxShadow: `0 0 0 3px ${theme.colors.interactive03h}`,
      },

      '.tagify__tag > div': {
        ...getFontProductive(14, 400),
      },

      '.tagify__tag > div::before': {
        borderRadius: 9999,
        height: 20,
        top: -1,
        background: theme.colors.interactive03h,
        boxShadow: 'none',
      },

      '.tagify__tag:focus div::before, .tagify__tag:hover:not([readonly]) div::before': {
        top: -1,
        right: 0,
        left: 0,
        background: theme.colors.interactive03h,
        boxShadow: 'none',
      },
    },
  };
});

export { TagifyInputStyles };
