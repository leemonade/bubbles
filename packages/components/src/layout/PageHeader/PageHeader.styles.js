import { createStyles } from '@mantine/styles';

export const PageHeaderStyles = createStyles((theme, { withDivider }) => {
  const { global } = theme.other;
  return {
    root: {
      backgroundColor: global.background.color.surface.default,
      paddingBlock: global.spacing.padding['xlg'],
      paddingInline: global.spacing.padding['3xlg'],
      borderBottom: `${global.border.width.sm} solid ${
        withDivider ? global.border.color.line.muted : 'transparent'
      }`,
      gap: global.spacing.gap.lg,
    },
    iconContainer: {
      color: global.content.color.icon.emphasis,
      paddingTop: global.spacing.padding['2xsm'],
      fontSize: '1.8rem',
    },
    titleContainer: {
      gap: global.spacing.gap.lg,
      width: '100%',
      display: 'flex',
      alignItems: 'center',
    },
    buttonWrapper: {
      display: 'flex',
      gap: global.spacing.gap.lg,
      alignItems: 'center',
      marginLeft: 16,
    },
    title: {
      color: global.content.color.text.emphasis,
      ...global.content.typo.heading.xlg,
    },
    description: {
      color: global.content.color.text.default,
      ...global.content.typo.body.xlg,
      maxWidth: '80ch',
    },
  };
});
