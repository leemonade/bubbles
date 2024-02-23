import { createStyles } from '@mantine/styles';
import { getBoxShadowFromToken } from '../../theme.mixins';

const SliderStyles = createStyles((theme) => {
  const checkboxTheme = theme.other.checkbox;
  return {
    root: {},
    track: {
      height: 1,
      backgroundColor: checkboxTheme.border.color.default,
    },
    bar: {
      backgroundColor: checkboxTheme.border.color.select,
    },
    thumb: {
      borderWidth: 1,
      borderColor: checkboxTheme.border.color.default,
      '&:hover': {
        borderColor: checkboxTheme.border.color.select,
        ...getBoxShadowFromToken(checkboxTheme.shadow.hover),
      },
    },
  };
});

export { SliderStyles };
