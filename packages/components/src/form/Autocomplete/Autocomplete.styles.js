import { createStyles } from '@mantine/styles';
import { pxToRem, getFontExpressive, getFontProductive } from '../../theme.mixins';

const AutocompleteStyles = createStyles((theme, { multiple }) => ({
  root: {
    ...getFontExpressive(theme.fontSizes['2']),
    overflow: 'visible !important',
  },
  label: {
    ...getFontProductive(theme.fontSizes['2'], 500),
    color: theme.colors.text01,
  },
  input: {
    border: `1px solid ${theme.colors.ui01}`,
    padding: multiple ? 0 : `${pxToRem(8)} ${pxToRem(8)} ${pxToRem(12)} ${pxToRem(8)}`,
    display: 'flex',
    lineHeight: pxToRem(16),
    '&:focus-within': {
      boxShadow: '0px 0px 0px 3px #E8EDF4',
      borderColor: theme.colors.ui01,
    },
    '::placeholder': {
      ...getFontProductive(theme.fontSizes['2']),
      color: theme.colors.text05,
      lineHeight: pxToRem(16),
    },
    minHeight: 40,
  },
  searchInput: {
    ...getFontProductive(theme.fontSizes['2'], 400),
    color: theme.colors.text03,
    padding: 0,
    margin: 0,
    height: pxToRem(14),
    '::placeholder': {
      ...getFontProductive(theme.fontSizes['2']),
      color: theme.colors.text05,
      lineHeight: pxToRem(16),
    },
  },
  values: {
    padding: `${pxToRem(8)}`,
    margin: 0,
    minheight: pxToRem(40),
    display: 'flex',
    gap: pxToRem(8),
  },
  value: {
    margin: 0,
  },
  dropdown: {
    borderColor: theme.colors.ui02,
    borderRadius: pxToRem(2),
    boxShadow: '0px 10px 36px rgba(35, 43, 60, 0.05), 0px 2px 0px rgba(51, 63, 86, 0.05)',
    display: 'flex',
    padding: 0,
    flexDirection: 'column',
  },
  itemsWrapper: {
    padding: 0,
  },
  item: {
    ...getFontProductive(theme.fontSizes['2'], 400),
    paddingTop: pxToRem(12),
    paddingBottom: pxToRem(12),
    color: theme.colors.text01,
  },
  hovered: {
    backgroundColor: theme.colors.interactive03,
    borderRadius: 0,
  },
  deleteIcon: {
    color: theme.colors.text06,
    cursor: 'pointer',
    '&:hover': {
      transform: 'scale(1.2)',
    },
  },
  nothingFound: {
    ...getFontProductive(theme.fontSizes['2']),
    color: theme.colors.text01,
    textAlign: 'left',
    padding: `${pxToRem(12)} ${pxToRem(8)}`,
  },
}));

export { AutocompleteStyles };
