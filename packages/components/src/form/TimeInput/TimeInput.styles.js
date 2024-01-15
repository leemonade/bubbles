import { createStyles } from '@mantine/styles';
import { getInputStyle, getInputSizes } from '../mixins/fieldStyles.mixins';

const TimeInputStyles = createStyles((theme, { size }) => {
  const inputTheme = theme.other.input;
  const inputStyle = getInputStyle(inputTheme, theme.other.global);
  return {
    root: {},
    input: {
      ...getInputSizes(size || 'md', inputTheme.spacing.padding),
      ...inputStyle,
      paddingTop: 0,
      minHeight: 40,
      display: 'flex',
      alignItems: 'center',
    },
    timeInput: {
      lineHeight: inputStyle.lineHeight,
      border: 'none',
    },
    controls: {
      height: '100%',
    },
  };
});

export { TimeInputStyles };
