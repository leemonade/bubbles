import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../theme.mixins';

export const UserCardsStyles = createStyles(
  (theme, { variantStates, layoutStates, error, selected }) => {
    const { isFull, isSimple, isLarge, isContact } = variantStates;
    const { isHorizontal, isVertical } = layoutStates;

    return {
      root: {
        ...getFontExpressive(theme.fontSizes['2']),
        backgroundColor:
          isContact && error
            ? theme.colors.fatic01v0
            : selected
            ? theme.colors.interactive01v1
            : null,
      },
      container: {
        padding: pxToRem(16),
        display: 'flex',
        flexDirection: isVertical && (isFull || isSimple) ? 'column' : null,
        alignItems: isVertical && (isFull || isSimple) ? 'center' : 'flex-start',
        gap: pxToRem(16),
      },
      userInfo: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: isVertical && (isFull || isSimple) ? 'center' : null,
      },
      rol: {
        ...getFontProductive(theme.fontSizes['1']),
        lineHeight: pxToRem(14),
        marginBottom: pxToRem(16),
        backgroundColor: theme.colors.interactive03,
        padding: `${pxToRem(4)} ${pxToRem(8)}`,
        borderRadius: 100,
      },
      name: {
        ...getFontExpressive(theme.fontSizes['3']),
        fontSize: isLarge ? pxToRem(24) : pxToRem(16),
        lineHeight: isLarge ? pxToRem(28) : pxToRem(20),
      },
      number: {
        ...getFontProductive(theme.fontSizes['2'], 400),
        lineHeight: pxToRem(28),
      },
      email: {
        ...getFontProductive(theme.fontSizes['1']),
        marginTop: pxToRem(8),
        color: isContact && theme.colors.text04,
        svg: {
          color: theme.colors.interactive01,
          marginRight: pxToRem(4),
        },
        // display: 'inline-block',
        // overflow: 'hidden',
        // whiteSpace: 'nowrap',
        // textOverflow: 'ellipsis',
      },
      birthdayContainer: {
        marginTop: pxToRem(28),
        display: 'flex',
        flexDirection: isVertical && (isFull || isSimple) ? 'row' : 'column',
        alignItems: isVertical && (isFull || isSimple) && 'baseline',
        svg: {
          color: theme.colors.fatic03,
          marginLeft: pxToRem(11),
        },
      },
      birthday: {
        fontSize: pxToRem(12),
      },
      date: {
        ...getFontProductive(theme.fontSizes['2'], 400),
        marginLeft: ((isFull && isVertical) || (isSimple && isVertical)) && pxToRem(10),
        lineHeight: pxToRem(20),
      },
      error: {
        ...getFontProductive(theme.fontSizes['2']),
        color: theme.colors.fatic01,
        marginTop: pxToRem(16),
        span: {
          color: theme.colors.fatic01,
          marginLeft: pxToRem(4),
        },
      },
      icon: {
        color: theme.colors.interactive01,
        minHeight: pxToRem(20),
        minWidth: pxToRem(20),
      },
      // header: {
      //   display: 'flex',
      //   alignItems: 'center',
      // },
      // avatar: {
      //   marginLeft: pxToRem(16),
      // },
      // name: {
      //   ...getFontExpressive(theme.fontSizes['3']),
      //   lineHeight: pxToRem(20),
      //   marginLeft: pxToRem(16),
      //   marginRight: pxToRem(26),
      // },
      // column: {
      //   display: 'flex',
      //   flexDirection: 'column',
      //   // textAlign: 'center',
      // },
      // email: {
      //   marginTop: pxToRem(8),
      //   marginLeft: pxToRem(68),
      //   ...getFontProductive(theme.fontSizes['1']),
      // },

      // birthdayContainer: {
      //   marginTop: pxToRem(28),
      //   display: 'flex',
      //   flexDirection: 'column',
      // },
    };
  }
);
