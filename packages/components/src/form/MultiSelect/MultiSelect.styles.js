import { createStyles } from '@mantine/styles';
import { getInputStyle, getOrientation, getRequiredStyle } from '../mixins/fieldStyles.mixins';
import { getFocusStyles } from '../../theme.mixins';

export const MultiSelectStyles = createStyles((theme, { size, orientation }) => {
  const inputSizes = {
    xs: {
      minHeight: theme.spacing['7'],
    },
    sm: {
      minHeight: theme.spacing['8'],
    },
  }[size];
  return {
    root: {},
    description: {
      gridArea: 'description',
    },
    error: {
      gridArea: 'error',
    },
    required: {
      ...getRequiredStyle(theme),
    },
    input: {
      ...getInputStyle(theme),
      ...inputSizes,
    },
    rightSection: {
      color: theme.colors.text02,
    },
  };
});
