import { createStyles } from '@mantine/styles';

const TotalLayoutHeaderStyles = createStyles((theme, { children, direction, compact }) => {
  const expandedHeader = direction === 'column' && children;
  return {
    root: {},
    headerContainer: {
      padding: `${!expandedHeader ? '16px' : '12px'} 24px`,
      backgroundColor: 'white',
    },
    header: { height: '40px' },
    headerTools: { marginTop: '12px' },
    iconContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.4rem',
      width: '32px',
      height: '32px',
      textAlign: 'center',
      marginRight: '8px',
    },
    headerTitle: { fontSize: '18px', fontWeight: 600, lineHeight: '24px' },
    headerSubtitle: {
      fontSize: '18px',
      fontWeight: 400,
      lineHeight: '24px',
      marginLeft: !compact && '40px',
    },
  };
});

export { TotalLayoutHeaderStyles };
