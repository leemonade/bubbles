import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../../theme.mixins';

export const CustomLegendStyles = createStyles((theme, {}) => {
  return {
    root: {},
    legendIcon: { color: theme.colors.mainWhite },
    legendSlash: { fill: theme.colors.mainWhite, fontWeight: 600, fontSize: pxToRem(17) },
  };
});
