import { createStyles } from '@mantine/styles';
import { pxToRem, getFontProductive, getBoxShadowFromToken } from '../../../theme.mixins';

const CheckboxStyles = createStyles((theme, { disabled, labelPosition }) => {
  const checkboxTheme = theme.other.checkbox;
  const labelTheme = theme.other.label;

  return {
    root: {
      gap: 8,
      justifyContent: 'left',
    },
    input: {
      cursor: 'pointer',
      backgroundColor: checkboxTheme.background.color.default,
      borderColor: checkboxTheme.border.color.default,
      borderWidth: 1,
      '&:checked': {
        backgroundColor: checkboxTheme.background.color.default,
        borderColor: checkboxTheme.border.color.select,
      },
      '&:hover': {
        borderColor: checkboxTheme.border.color.select,
        ...getBoxShadowFromToken(checkboxTheme.shadow.hover),
      },
      '&:focus': {
        borderColor: checkboxTheme.border.color.selected,
        borderWidth: 2,
      },
      '&:focus-visible': {
        outline: `1px solid ${checkboxTheme.border.color.selected}`,
        outlineOffset: 0,
      },
      borderRadius: 2,
    },
    body: {
      flexDirection: labelPosition === 'end' ? 'row' : 'row-reverse',
      gap: 8,
    },
    icon: {
      width: 14,
      color: `${checkboxTheme.content.color.icon} !important`,
    },
    label: {
      cursor: 'pointer',
      color: labelTheme.content.color.default,
      ...labelTheme.content.typo['02'],
      lineHeight: pxToRem(17),
      padding: 0,
    },
  };
});

export { CheckboxStyles };
