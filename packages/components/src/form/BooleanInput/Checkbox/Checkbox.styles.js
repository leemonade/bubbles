import { createStyles } from '@mantine/styles';
import { pxToRem, getFontProductive } from '../../../theme.mixins';

export const CheckboxStyles = createStyles((theme, { disabled, labelPosition }) => {
  return {
    root: {
      gap: 8,
      justifyContent: 'left',
    },
    input: {
      cursor: 'pointer',
      '&:checked': {
        backgroundColor: disabled ? theme.colors.ui01 : theme.colors.interactive01,
        borderColor: disabled ? theme.colors.ui01 : theme.colors.interactive01,
      },
      borderRadius: 2,
    },
    body: {
      flexDirection: labelPosition === 'end' ? 'row' : 'row-reverse',
      gap: 8,
    },
    icon: {
      width: 14,
    },
    label: {
      cursor: 'pointer',
      color: theme.colors.text01,
      ...getFontProductive(theme.fontSizes['2'], 500),
      lineHeight: pxToRem(17),
      padding: 0,
    },
  };
});
