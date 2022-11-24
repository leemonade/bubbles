import { createStyles } from '@mantine/styles';
import { getInputSizes, getInputStyle } from '../mixins/fieldStyles.mixins';

export const SelectStyles = createStyles((theme, { size, rightEvents, variant, hasIcon }) => {
  // const isUnstyled = variant === 'unstyled';
  // const isFilled = variant === 'filled';
  const inputTheme = theme.other.input;
  return {
    input: {
      ...getInputSizes(size || 'md', inputTheme.spacing.padding, hasIcon),
      ...getInputStyle(inputTheme, theme.other.global),
      paddingRight: 30,
      textOverflow: 'ellipsis',
      // backgroundColor: isUnstyled ? 'transparent' : isFilled && theme.colors.interactive03,
      // '&:focus': {
      //   backgroundColor: isUnstyled ? 'transparent' : isFilled && theme.colors.interactive03,
      // },
      // '&:focus, &:focus-within': {
      //   borderColor: isUnstyled ? 'transparent' : `${theme.colors.ui01} !important`,
      //   boxShadow: isUnstyled ? 'none' : `0 0 0 3px ${theme.colors.ui04}`,
      // },
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
  };
});
