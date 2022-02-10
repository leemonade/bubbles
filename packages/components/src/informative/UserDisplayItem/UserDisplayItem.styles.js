import { createStyles } from '@mantine/styles';
import { getFontExpressive, pxToRem } from '../../theme.mixins';

function infoFromSize(size) {
  switch (size) {
    case 'xs':
      return {
        root: {},
        name: {
          lineHeight: pxToRem(12),
          fontSize: pxToRem(14),
        },
        rol: {
          fontSize: pxToRem(11),
          lineHeight: pxToRem(12),
        },
      };
      break;
    default:
      return {
        root: {},
        name: {},
        rol: {},
      };
      break;
  }
}

export const UserDisplayItemStyles = createStyles((theme, { variant, layout, size }) => {
  const isBlock = variant === 'block';
  const isRol = variant === 'rol';
  const isEmail = variant === 'email';
  const isRight = layout === 'right';
  const inf = infoFromSize(size);

  return {
    root: {
      ...getFontExpressive(theme.fontSizes['2']),
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
    },
    surname: {
      display: !isBlock && 'none',
      lineHeight: pxToRem(16.25),
      fontSize: pxToRem(13),
    },
    rol: {
      color: theme.colors.text04,
      display: !isRol && 'none',
      fontSize: pxToRem(12),
      lineHeight: pxToRem(15),
      ...inf.rol,
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
