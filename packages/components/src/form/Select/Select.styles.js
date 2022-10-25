import { createStyles } from '@mantine/styles';
import { getInputSizes, getInputStyle } from '../mixins/fieldStyles.mixins';

export const SelectStyles = createStyles((theme, { size, rightEvents, variant }) => {
  const isUnstyled = variant === 'unstyled';
  const isFilled = variant === 'filled';

  return {
    input: {
      ...getInputSizes(size || 'md', theme.spacing),
      ...getInputStyle(theme),
      paddingRight: 30,
      textOverflow: 'ellipsis',
      backgroundColor: isUnstyled ? 'transparent' : isFilled && theme.colors.interactive03,
      '&:focus': {
        backgroundColor: isUnstyled ? 'transparent' : isFilled && theme.colors.interactive03,
      },
      '&:focus, &:focus-within': {
        borderColor: isUnstyled ? 'transparent' : `${theme.colors.ui01} !important`,
        boxShadow: isUnstyled ? 'none' : `0 0 0 3px ${theme.colors.ui04}`,
      },
    },
    rightSection: {
      color: theme.colors.text02,
      pointerEvents: rightEvents ? 'auto' : 'none',
      cursor: 'pointer',
    },
  };
});
