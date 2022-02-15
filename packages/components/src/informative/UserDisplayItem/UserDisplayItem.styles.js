import { createStyles } from '@mantine/styles';
import { pxToRem } from '../../theme.mixins';

function infoFromSize(size, theme) {
  let result = {
    root: {},
    name: {},
    rol: {},
  };

  switch (size) {
    case 'xs':
      result = {
        root: {},
        rol: {
          fontSize: pxToRem(11),
          lineHeight: 1,
        },
        name: {
          fontSize: theme.fontSizes[1],
          lineHeight: 1,
          marginTop: 2,
        },
      };
      break;
    default:
      break;
  }

  return result;
}

export const UserDisplayItemStyles = createStyles((theme, { variant, layout, size, noBreak }) => {
  const isBlock = variant === 'block';
  const isRol = variant === 'rol';
  const isEmail = variant === 'email';
  const isRight = layout === 'right';
  const inf = infoFromSize(size, theme);
  const breakProps = noBreak
    ? {
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
      }
    : {};

  return {
    root: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: isRight && 'row-reverse',
      gap: pxToRem(8),
      ...inf.root,
    },
    name: {
      lineHeight: isBlock ? pxToRem(17.5) : isRol ? pxToRem(20) : pxToRem(24),
      fontWeight: isBlock && 600,
      ...inf.name,
      ...breakProps,
    },
    surname: {
      display: !isBlock && 'none',
      lineHeight: pxToRem(16.25),
      fontSize: pxToRem(13),
      ...breakProps,
    },
    rol: {
      color: theme.colors.text04,
      display: !isRol && 'none',
      fontSize: pxToRem(12),
      lineHeight: pxToRem(15),
      ...inf.rol,
      ...breakProps,
    },
    email: {
      fontSize: pxToRem(13),
      lineHeight: pxToRem(15.7),
      marginRight: isRight && pxToRem(4),
      textDecoration: 'none',
      color: theme.colors.interactive01,
    },
    emailIcon: {
      color: theme.colors.interactive01,
      marginRight: !isRight && pxToRem(4),
      cursor: 'pointer',
    },
    userInfo: {
      display: 'flex',
      flexDirection: isEmail ? (isRight ? 'row-reverse' : 'row') : 'column',
      alignItems: isEmail ? 'center' : isRight ? 'flex-end' : null,
    },
  };
});
