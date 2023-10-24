/* eslint-disable import/prefer-default-export */
import { createStyles } from '@mantine/styles';
import { getFontExpressive } from '../../theme.mixins';

export const AutocompleteBadgeStyles = createStyles((theme) => ({
  root: {
    ...getFontExpressive(theme.fontSizes['2']),
  },
  item: {
    paddingBlock: 4,
  },
  itemsWrapper: { padding: 50 },
}));
