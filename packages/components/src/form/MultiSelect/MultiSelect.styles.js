import { createStyles } from '@mantine/styles';
import { getInputSizes, getInputStyle, getSelectDividerStyle } from '../mixins/fieldStyles.mixins';

export const MultiSelectStyles = createStyles((theme, { size, rightEvents, hasIcon }) => {
  const inputTheme = theme.other.input;
  const inputSizes = getInputSizes(size || 'md', inputTheme.spacing.padding, hasIcon);
  const inputStyles = getInputStyle(inputTheme, theme.other.global);
  return {
    wrapper: {
      overflow: 'visible !important',
    },
    // This is done because in this case Multiselect has a different structure than other inputs.
    // So we have to apply styles and sizes to both "inputs" elements and override some properties.
    input: {
      ...inputSizes,
      ...inputStyles,
      padding: 0,
      paddingLeft: 0,
      margin: 0,
      backgroundColor: 'transparent',
    },
    searchInput: {
      ...inputStyles,
      margin: 0,
      padding: 0,
      lineHeight: '24px',
      border: 'none',
      backgroundColor: 'inherit !important',
      boxShadow: 'none !important',
    },
    values: {
      ...inputStyles,
      ...inputSizes,
      paddingRight: 30,
      backgroundColor: 'inherit !important',
      boxShadow: 'none !important',
      margin: 0,
      gap: 4,
      border: 'none',
    },
    value: {
      margin: 0,
      marginBlock: 1,
    },
    withIcon: {
      paddingLeft: 0,
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
    ...getSelectDividerStyle(theme, theme.other.global),
  };
});
