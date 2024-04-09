import { createStyles } from '@mantine/styles';
import { TOTAL_LAYOUT_HEADER_HEIGHT } from '../TotalLayoutHeader/TotalLayoutHeader.constants';

const TotalLayoutStepContainerStyles = createStyles(
  (theme, { hasFooter, clean, fullWidth, noMargin, footerPadding }) => ({
    root: {},
    stepContainer: {
      padding: clean ? 0 : '30px 0 0 0 ',
      marginLeft: fullWidth && !noMargin ? theme.spacing[5] : 0,
      marginRight: fullWidth && !noMargin ? theme.spacing[5] : 0,
      height: '100%',
      width: fullWidth ? '100%' : 928,
      '@media (min-width: 1920px)': {
        width: 1400,
      },
    },
    formContainer: {
      backgroundColor: !clean && 'white',
      padding: !clean && 24,
      paddingBottom: footerPadding ?? (hasFooter ? TOTAL_LAYOUT_HEADER_HEIGHT : 24),
    },
    stepName: {
      marginBottom: 12,
    },
  }),
);

export { TotalLayoutStepContainerStyles };
