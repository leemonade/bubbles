import { createStyles } from '@mantine/styles';

const TotalLayoutFooterStyles = createStyles((theme, { showFooterBorder, leftOffset }) => ({
  root: {},
  footer: {
    minWidth: 928,
    maxWidth: 928,
    width: '100%',
    marginLeft: leftOffset,
    backgroundColor: 'white',
    borderTop: showFooterBorder && `1px solid ${theme.other.divider.background.color.default}`,
    zIndex: 1,
  },
}));

export { TotalLayoutFooterStyles };
