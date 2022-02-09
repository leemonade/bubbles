import {
  createStyles,
  pxToRem,
  getPaddings,
  getFontExpressive,
  getFontProductive,
} from '@bubbles-ui/components';

export const LibraryCardContentStyles = createStyles((theme, {}) => {
  return {
    root: {},
    descriptionContainer: {
      minHeight: 86,
      padding: `${pxToRem(14)} ${pxToRem(16)}`,
    },
    description: {
      color: theme.colors.text02,
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
      color: theme.colors.text05,
    },
    value: {
      color: theme.colors.text02,
    },
  };
});
