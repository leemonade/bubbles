import {
  createStyles,
  pxToRem,
  getPaddings,
  getFontExpressive,
  getFontProductive,
} from '@bubbles-ui/components';

export const ScoresBasicTableStyles = createStyles((theme, { overFlowLeft, overFlowRight }) => {
  return {
    root: {
      display: 'flex',
      position: 'relative',
      overflow: 'hidden',
    },
    table: {
      width: '100%',
      overflowX: 'auto',
      minWidth: '650px !important',
      backgroundColor: theme.colors.mainWhite,
      display: 'flex',
      '::-webkit-scrollbar': {
        display: 'block',
        overflow: 'auto',
        width: 'calc(100% - 200px)',
        height: 6,
      },
      '::-webkit-scrollbar-track': {
        marginLeft: 200,
        marginRight: 300,
        backgroundColor: theme.colors.ui02,
      },
      '::-webkit-scrollbar-thumb': {
        backgroundColor: '#999999',
        cursor: 'pointer',
        borderRadius: 4,
      },
    },
    tableHeader: {},
    tableHeaderRow: {},
    tableHeaderCell: {
      '&:first-of-type': {
        maxWidth: 296,
      },
      backgroundColor: theme.colors.mainWhite,
    },
    tableBody: {
      borderTop: '2px solid #F2F2F2',
    },
    bodyRow: {
      borderBottom: '1px solid #F2F2F2',
      '& > div:first-of-type': {},
    },
    shadowBox: {
      zIndex: 4,
      width: 198,
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: -6,
      boxShadow:
        overFlowLeft &&
        '32px 0px 32px rgba(35, 43, 60, 0.05), 100px 0px 60px rgba(51, 63, 86, 0.03)',
    },
    bodyCell: {
      '&:first-of-type': {
        maxWidth: 296,
      },
      transition: 'margin-left 0.2s ease-in-out',
    },
    students: {
      padding: 16,
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'flex-end',
    },
    studentsCells: {
      padding: 1,
      borderRight: '1px solid #F2F2F2',
      paddingLeft: 10,
      backgroundColor: theme.colors.mainWhite,
    },
    rightBody: {
      position: 'sticky',
      right: 0,
      backgroundColor: theme.colors.mainWhite,
      width: '300px',
      minWidth: '300px',
      display: 'flex',
      flexDirection: 'column',
      boxShadow:
        overFlowRight &&
        '-32px 0px 32px rgba(35, 43, 60, 0.05), -100px 0px 60px rgba(51, 63, 86, 0.03)',
      transition: 'box-shadow 0.2s ease-in-out',
    },
    rightBodyHeader: {
      height: 120,
      borderBottom: '2px solid #F2F2F2',
    },
    headerAvg: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 28,
      gap: 4,
    },
    columnHeader: {
      display: 'inline-block',
      width: '50%',
      textAlign: 'center',
      verticalAlign: 'middle',
      paddingTop: 24,
    },
    rightBodyContent: {
      flex: 1,
    },
    contentRow: {
      display: 'flex',
      height: 49,
      boxSizing: 'border-box',
      borderBottom: '1px solid #F2F2F2',
    },
    studentInfo: {
      width: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    separator: {
      width: 4,
      height: 49,
      backgroundColor: theme.colors.ui03,
      transform: 'translateX(-2px)',
    },
  };
});
