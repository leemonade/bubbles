import { createStyles } from '@mantine/styles';
import { pxToRem } from '../../theme.mixins';

function infoFromSize(size, theme) {
  let result = {
    root: {},
    name: {},
    rol: {},
  };

  if (size === 'xs') {
    result = {
      root: {},
      rol: {
        fontSize: pxToRem(11),
        lineHeight: 1.2,
      },
      name: {
        fontSize: theme.fontSizes[1],
        lineHeight: 1.2,
        marginTop: 2,
      },
    };
  }

  return result;
}

const getColor = (theme, severity) => {
  if (!severity) return {};
  return {
    warning: {
      background: `${theme.colors.fatic03v0} !important`,
    },
    error: {
      background: `${theme.colors.fatic01v0} !important`,
    },
  }[severity];
};

const UserDisplayItemStyles = createStyles(
  (theme, { variant, layout, size, noBreak, severity }) => {
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

    function getNameLineHeight() {
      if (isBlock) return pxToRem(18.5);
      if (isRol) return pxToRem(20);
      return pxToRem(24);
    }

    function getUserInfoFlexProps() {
      if (isEmail) {
        return {
          flexDirection: isRight ? 'row-reverse' : 'row',
          alignItems: 'center',
        };
      }
      return {
        flexDirection: 'column',
        alignItems: isRight ? 'flex-end' : null,
      };
    }

    return {
      root: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: isRight && 'row-reverse',
        gap: pxToRem(isRol ? 16 : 8),
        ...inf.root,
        ...getColor(theme, severity),
        padding: theme.spacing[1],
      },
      severityIcon: {
        marginLeft: pxToRem(4),
        verticalAlign: 'middle',
      },
      name: {
        lineHeight: getNameLineHeight(),
        fontWeight: isBlock && 600,
        ...inf.name,
        // ...breakProps,
        paddingRight: theme.spacing[1],
      },
      surnames: {
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
        ...getUserInfoFlexProps(),
      },
    };
  },
);

export { UserDisplayItemStyles };
