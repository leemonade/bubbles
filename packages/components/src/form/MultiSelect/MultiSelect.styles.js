import { createStyles } from '@mantine/styles';
import { getInputSizes, getInputStyle } from '../mixins/fieldStyles.mixins';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../theme.mixins';

export const MultiSelectStyles = createStyles((theme, { size, rightEvents, hasIcon }) => {
  const inputTheme = theme.other.input;
  const inputSizes = getInputStyle(inputTheme, theme.other.global);
  const inputStyles = getInputSizes(size || 'md', inputTheme.spacing.padding, hasIcon);
  return {
    wrapper: {
      overflow: 'visible !important',
    },
    // This is done because in this case Multiselect has a different structure than other inputs.
    // So we have to apply styles and sizes to both "inputs" elements and override some properties.
    input: {
      ...inputSizes,
      ...inputStyles,
    },
    searchInput: {
      ...inputStyles,
      ...inputSizes,
      backgroundColor: 'inherit !important',
      boxShadow: 'none !important',
      margin: 0,
      padding: 0,
    },
    values: {
      ...inputSizes,
      backgroundColor: 'inherit !important',
      boxShadow: 'none !important',
      margin: 0,
      padding: 0,
      gap: 4,
    },
    value: {
      marginBlock: 1,
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
    itemsWrapper: {
      padding: 0,
    },
  };
});
