import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../theme.mixins';

export const UserDisplayItemStyles = createStyles((theme, { variant, layout }) => {
  const isBlock = variant === 'block';
  const isRol = variant === 'rol';
  const isEmail = variant === 'email';
  const isRight = layout === 'right';

  return {
    root: {
      ...getFontExpressive(theme.fontSizes['2']),
      display: 'flex',
      alignItems: 'center',
      flexDirection: isRight && 'row-reverse',
      gap: pxToRem(8),
    },
    name: {
      lineHeight: isBlock ? pxToRem(17.5) : isRol ? pxToRem(20) : pxToRem(24),
      fontWeight: isBlock && 600,
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
    },
    email: {
      fontSize: pxToRem(13),
      lineHeight: pxToRem(15.7),
      marginRight: isRight && pxToRem(4),
    },
    emailIcon: {
      color: theme.colors.interactive01,
      marginRight: !isRight && pxToRem(4),
    },
    userInfo: {
      display: 'flex',
      flexDirection: isEmail ? (isRight ? 'row-reverse' : 'row') : 'column',
      alignItems: isEmail ? 'center' : isRight ? 'flex-end' : null,
    },
  };
});
