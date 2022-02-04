import {
  createStyles,
  pxToRem,
  getPaddings,
  getFontExpressive,
  getFontProductive,
} from '@bubbles-ui/components';

export const LibraryCardContentStyles = createStyles((theme, {}) => {
  return {
    root: {
      ...getFontExpressive(theme.fontSizes['2']),
    },
    descriptionContainer: {
      minHeight: 86,
      padding: `${pxToRem(8)} ${pxToRem(16)}`,
    },
    description: {
      ...getFontProductive(theme.fontSizes['2'], 500),
      color: theme.colors.text05,
      fontWeight: 500,
    },
    tagsContainer: {
      minHeight: 38,
      display: 'flex',
      gap: pxToRem(10),
      alignItems: 'center',
      flexWrap: 'wrap',
      padding: `${pxToRem(8)} ${pxToRem(16)}`,
    },
    label: {
      ...getFontProductive(theme.fontSizes['2'], 500),
      color: theme.colors.text05,
      minWidth: 80,
      display: 'inline-block',
      lineHeight: pxToRem(16),
      fontSize: pxToRem(12.5),
    },
    value: {
      ...getFontProductive(theme.fontSizes['2'], 400),
      marginLeft: pxToRem(16),
      color: theme.colors.text02,
      lineHeight: pxToRem(16),
      fontSize: pxToRem(12.5),
    },
  };
});
