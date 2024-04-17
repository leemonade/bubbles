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
      paddingLeft: '30px !important',
    },
    timeInput: {
      lineHeight: inputStyle.lineHeight,
      border: 'none',
      ...inputTheme.content.typo,
      '&::placeholder': {
        textAlign: 'center',
      },
    },
    controls: {
      height: '100%',
    },
    icon: {
      width: 32,
      color: inputTheme.content.color.icon,
    },
  };
});

export { TimeInputStyles };
