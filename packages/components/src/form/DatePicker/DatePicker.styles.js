import { createStyles } from '@mantine/styles';
import { getInputStyle, getRightSection, getInputSizes } from '../mixins/fieldStyles.mixins';

export const DatePickerStyles = createStyles((theme, { size, date, range }) => {
  const checkDate = () => {
    if (range) {
      if (Array.isArray(date)) return date?.every((value) => !!value);
      return false;
    }
    return !!date;
  };

  return {
    root: {},
    input: {
      ...getInputSizes(size || 'md', theme.spacing),
      ...getInputStyle(theme),
      textOverflow: 'ellipsis !important',
      paddingRight: checkDate() && 30,
    },
    dropdown: {
      padding: `16px 10px`,
    },
  };
});
