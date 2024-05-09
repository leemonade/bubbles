import { createStyles } from '@mantine/styles';
import { getPaddings } from '../../theme.mixins';

const TableStyles = createStyles(
  (theme, { disabled, canAdd, hideHeaderBorder, headerStyles = {}, isAssetList } = {}) => {
    const reset = {
      margin: 0,
      padding: 0,
      border: 0,
      outline: 0,
    };
    const assetBorderBoxLeft = {
      border: `1px solid ${theme.other.table.border.color.default}`,
      borderRight: 'none',
      borderTopLeftRadius: 4,
      borderBottomLeftRadius: 4,
      paddingLeft: 16,
      height: '100%',
      alignContent: 'center',
    };
    const assetBorderBoxCenter = {
      border: `1px solid ${theme.other.table.border.color.default}`,
      borderRight: 'none',
      borderLeft: 'none',
      height: '100%',
      alignContent: 'center',
    };
    const assetBorderBoxRight = {
      border: `1px solid ${theme.other.table.border.color.default}`,
      borderLeft: 'none',
      borderTopRightRadius: 4,
      borderBottomRightRadius: 4,
      height: '100%',
      alignContent: 'center',
    };
    return {
      root: {
        ...reset,
        width: '100%',
        borderCollapse: 'separate',
        borderSpacing: isAssetList ? '0 16px' : '0',
      },
      trHeader: {
        ...headerStyles,
      },
      tr: {
        ...reset,
        '& td': {
          borderBottom: isAssetList ? undefined : `1px solid rgba(0, 0, 0, 0.5)`,
        },
        '& th': {
          borderBottom: disabled && `1px solid rgba(0, 0, 0, 0.05)`,
        },
        '&:after': !disabled && {
          content: '"@"',
          display: 'block',
          lineHeight: '16px',
          textIndent: -99999,
        },
      },
      trSelectable: {
        '& td, & th': {
          borderTop: '1px solid transparent',
        },
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: theme.colors.ui03,
        },
      },
      trActive: {
        '& td': {
          borderColor: theme.colors.interactive01d,
          backgroundColor: theme.colors.interactive01v1,
          borderBottom: `1px solid ${theme.colors.interactive01d}`,
        },
        '& td:first-of-type': {
          borderLeft: `1px solid ${theme.colors.interactive01d}`,
          borderTopLeftRadius: 3,
          borderBottomLeftRadius: 3,
        },
        '& td:last-child': {
          borderRight: `1px solid ${theme.colors.interactive01d}`,
          borderTopRightRadius: 3,
          borderBottomRightRadius: 3,
        },
      },
      trAsset: {
        display: 'none',
      },
      th: {
        ...reset,
        ...getPaddings(theme.spacing['2'], theme.spacing['3']),
        textAlign: 'left',
        borderBottom: hideHeaderBorder ? 0 : `1px solid rgba(0, 0, 0, 0.05)`,
      },
      td: {
        ...reset,
        verticalAlign: 'middle',
      },
      sortIcon: {
        color: theme.other.buttonAction.content.color.primary.default,
        cursor: 'grab',
      },
      assetBorderBoxLeft: {
        ...(isAssetList ? assetBorderBoxLeft : {}),
      },
      assetBorderBoxCenter: {
        ...(isAssetList ? assetBorderBoxCenter : {}),
      },
      assetBorderBoxRight: {
        ...(isAssetList ? assetBorderBoxRight : {}),
      },
    };
  },
);

export { TableStyles };
