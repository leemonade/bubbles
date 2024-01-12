import { createStyles } from '@mantine/styles';

const TotalLayoutHeaderStyles = createStyles(
  (theme, { children, direction, compact, hasIcon, iconLarge }) => ({
    root: {},
    headerContainer: {
      padding: `12px 24px`,
      backgroundColor: 'white',
      minHeight: 72,
    },
    header: { height: '40px' },
    headerTools: { marginTop: '12px' },
    iconContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: iconLarge ? '2.8rem' : '1.4rem',
      width: iconLarge ? 48 : 32,
      height: iconLarge ? 48 : 32,
      textAlign: 'center',
      marginRight: 16,
      borderRadius: !hasIcon && 4,
      backgroundColor: !hasIcon && '#C4C4C4',
    },
    headerTitle: { fontSize: '18px', fontWeight: 600, lineHeight: '24px' },
    headerSubtitle: {
      fontSize: '18px',
      fontWeight: 400,
      lineHeight: '24px',
      // marginLeft: !compact && '40px',
    },
  }),
);

export { TotalLayoutHeaderStyles };
