import { createStyles } from '@mantine/styles';
import { getInputSizes, getInputStyle } from '../mixins/fieldStyles.mixins';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../theme.mixins';

export const MultiSelectStyles = createStyles((theme, { size, rightEvents, hasIcon }) => {
  const inputSizes = {
    xs: {
      minHeight: theme.spacing[7],
    },
    sm: {
      minHeight: 38,
    },
  }[size];

  const inputTheme = theme.other.input;
  return {
    wrapper: {
      padding: 3,
      margin: -3,
      overflow: 'visible !important',
    },
    searchInput: {
      ...getFontProductive(theme.fontSizes['2']),
    },
    input: {
      ...getInputStyle(inputTheme, theme.other.global),
      // ...getInputSizes(size || 'md', inputTheme.spacing.padding, hasIcon),
      ...inputSizes,
      paddingTop: 1,
    },
    rightSection: {
      color: theme.colors.text02,
      bottom: 2,
      right: 3,
      pointerEvents: rightEvents ? 'auto' : 'none',
      cursor: 'pointer',
    },
    item: {
      paddingBlock: 4,
    },
  };
});
