import { createStyles } from '@mantine/styles';
import { getInputSizes, getInputStyle, getSelectDividerStyle } from '../mixins/fieldStyles.mixins';

export const SelectStyles = createStyles((theme, { size, rightEvents, variant, hasIcon }) => {
  const inputTheme = theme.other.input;
  return {
    input: {
      ...getInputSizes(size || 'md', inputTheme.spacing.padding, hasIcon),
      ...getInputStyle(inputTheme, theme.other.global),
      paddingRight: 30,
      textOverflow: 'ellipsis',
    },
    icon: {
      width: 32,
      color: inputTheme.content.color.icon,
    },
    rightSection: {
      color: theme.colors.text02,
      pointerEvents: rightEvents ? 'auto' : 'none',
      cursor: 'pointer',
    },
    itemsWrapper: {
      padding: 0,
    },
    ...getSelectDividerStyle(theme, theme.other.global),
  };
});
