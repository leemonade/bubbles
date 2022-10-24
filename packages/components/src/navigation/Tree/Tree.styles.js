import { createStyles } from '@mantine/styles';
import { pxToRem } from '../../theme.mixins';

export const TreeStyles = createStyles((theme, { canSelectItems }) => {
  return {
    root: {
      position: 'relative',
      display: 'flex'
    },
    tree: {
      overflow: 'hidden',
      width: '100%',
      backgroundColor: theme.colors.mainWhite,
      // padding: pxToRem(16),
      padding: 0,
      margin: 0,
      ul: {
        margin: 0,
        padding: 0
      },
      li: {
        listStyle: 'none',
        margin: 0,
        padding: 0
      }
    },
    treePlaceholderContainer: {
      position: 'relative'
    },
    treeDraggingSource: {
      '& .mantine-Tree-treeNode': {
        backgroundColor: theme.colors.ui02,
        border: theme.colors.ui02,

        '& .mantine-Tree-treeNodeLines': {
          border: theme.colors.ui02
        }
      }
    },
    treeDropTarget: {},
    treeNodeLines: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      border: `0 solid ${theme.colors.ui01}`,
      borderBottomWidth: 1,
      borderLeftWidth: 1,
      width: pxToRem(12),
      transform: 'translateX(-160%) translateY(-0.9rem)'
    },
    treeNodeLinesFirstItem: {
      height: pxToRem(16)
    },
    treeNodeLinesItems: {
      height: pxToRem(32)
    },
    treeNodeLinesAlone: {
      borderBottomLeftRadius: pxToRem(4)
    },
    treeNode: {
      position: 'relative',
      alignItems: 'center',
      display: 'grid',
      gridTemplateColumns: 'auto 1fr auto',
      gridTemplateAreas: '\'toggle content actions\'',
      height: pxToRem(32),
      borderRadius: pxToRem(4)
    },
    treeNodePlaceholder: {
      backgroundColor: theme.colors.interactive01,
      height: 1,
      position: 'absolute',
      right: 0,
      transform: 'translateY(-100%)'
    },
    nodeWithChildren: {
      background: theme.colors.mainWhite,
      cursor: canSelectItems ? 'pointer' : 'default',
      '&:hover': {
        backgroundColor: canSelectItems ? theme.colors.ui03 : theme.colors.mainWhite,
      },
    },
    nodeNoChildren: {
      paddingLeft: pxToRem(8),
      border: `1px solid transparent`,
      '&:hover': {
        backgroundColor: theme.colors.mainWhite,
        borderColor: canSelectItems ? theme.colors.interactive02 : 'transparent'
      }
    },
    nodeDefault: {
      paddingRight: pxToRem(8)
    },
    nodeDefaultHover: {
      backgroundColor: theme.colors.ui03
    },
    nodeSelected: {
      paddingLeft: pxToRem(8),
      backgroundColor: theme.colors.interactive01v1,
      border: `1px dashed ${theme.colors.interactive01}}`
    },
    nodeButton: {
      opacity: 1,
      transitionProperty: 'all',
      transitionTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
      transitionDuration: '150ms',
      transform: 'translateX(0)'
    },
    nodeHiddenButton: {
      opacity: 0,
      transform: 'translateX(-8px)'
    },
    nodeShowButton: {
      opacity: 1
    },
    nodeHidden: {
      display: 'none'
    },
    nodeDragPreviewRoot: {
      display: 'flex',
      transform: 'translate(-16px, -16px)'
    },
    nodeDragPreview: {
      display: 'flex',
      alignItems: 'center',
      height: pxToRem(32),
      paddingLeft: pxToRem(8),
      paddingRight: pxToRem(16),
      borderRadius: pxToRem(4),
      border: `1px solid ${theme.colors.interactive01}`,
      background: theme.colors.mainWhite,
      boxShadow: theme.shadows.shadow03
    },
    nodeDragPreviewHandler: {
      paddingBottom: pxToRem(4),
      marginRight: pxToRem(8),
      color: theme.colors.interactive01
    },
    nodeDragPreviewContent: {},
    nodePlaceholderRoot: {
      position: 'absolute',
      top: 0,
      right: 0,
      height: 1,
      transform: 'translateY(0px)',
      background: theme.colors.interactive01,
      zIndex: 40
    },
    nodePlaceholder: {
      position: 'absolute',
      top: 0,
      left: 0,
      height: 3,
      width: 3,
      transform: 'translateY(-1px)',
      borderRadius: 9,
      background: theme.colors.interactive01
    },
    toggle: {
      gridArea: 'toggle',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transitionProperty: 'transform',
      transitionTimingFunction: 'linear',
      transitionDuration: '150ms',
      transform: 'translateX(0)',
      height: pxToRem(24),
      width: pxToRem(32)
    },
    toggleOpened: {
      transform: 'rotate(0deg)'
    },
    toggleClosed: {
      transform: 'rotate(-90deg)'
    },
    toggleIcon: {
      color: theme.colors.text02
    },
    toggleIconHover: {
      color: theme.colors.text01
    },
    dragHandler: {
      paddingBottom: pxToRem(4),
      marginRight: pxToRem(8),
      color: theme.colors.ui01,
      cursor: 'drag'
    },
    dragHandlerHover: {
      color: theme.colors.text05
    },
    buttonWrapper: {
      display: 'flex',
      flex: 1,
      paddingRight: pxToRem(4),
      marginBottom: pxToRem(4)
    },
    nodeTextDefault: {
      color: theme.colors.text02,
      lineHeight: '1.3em',
    },
    nodeTextDefaultHover: {
      color: theme.colors.text01,
      lineHeight: '1.3em',
    },
    nodeTextSelected: {
      color: theme.colors.interactive01,
      lineHeight: '1.3em',
    },
    nodeContent: {
      gridArea: 'content',
      display: 'flex',
      alignItems: 'center'
    },
    nodeActions: {
      gridArea: 'actions'
    }
  };
});
