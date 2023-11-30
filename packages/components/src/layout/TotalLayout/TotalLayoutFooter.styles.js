import { createStyles } from '@mantine/styles';

const TotalLayoutFooterStyles = createStyles((theme, { showFooterShadow, leftOffset }) => ({
  root: {},
  footer: {
    maxWidth: 928,
    width: '100%',
    marginLeft: leftOffset,
    backgroundColor: 'white',
    borderTop: showFooterShadow && `1px solid ${theme.other.divider.background.color.default}`,
    zIndex: 1,
  },
}));

export { TotalLayoutFooterStyles };
