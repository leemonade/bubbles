/* eslint-disable import/prefer-default-export */
import { createStyles } from '@mantine/styles';
import { pxToRem, getFontExpressive } from '../../theme.mixins';

export const FileIconStyles = createStyles((theme, { size, color }) => ({
  root: {
    ...getFontExpressive(theme.fontSizes['2']),
    display: 'inline-flex',
    alignItems: 'center',
    color,
  },
  label: {
    marginLeft: pxToRem(size / 1.5),
    fontSize: pxToRem(size),
    color,
  },
}));
