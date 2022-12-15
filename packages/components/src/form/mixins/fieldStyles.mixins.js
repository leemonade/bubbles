import { getBoxShadowFromToken, getFontProductive } from '../../theme.mixins';

export function getInputStyle(theme, globalTheme, disabled) {
  return {
    height: 'unset',
    minHeight: 'unset',
    backgroundColor: theme.background.color.default,
    borderColor: theme.border.color.default,
    borderRadius: theme.border.radius.md,
    borderWidth: theme.border.width,
    borderStyle: 'solid',
    color: theme.content.color.default,
    ...theme.content.typo,

    '&:hover': {
      backgroundColor: !disabled && theme.background.color.hover,
    },
    '&:focus-visible': {
      ...getBoxShadowFromToken(globalTheme.focus.default),
      borderColor: theme.border.color.default,
      outline: 'none',
    },
    '&:focus-within': {
      ...getBoxShadowFromToken(globalTheme.focus.default),
      borderColor: theme.border.color.default,
      outline: 'none',
    },
    '&:disabled': {
      cursor: 'not-allowed',
      backgroundColor: globalTheme.background.color.disabled,
      borderColor: globalTheme.border.color.disabled.default,
      color: globalTheme.content.color.disabled,
    },
    '&::placeholder': {
      color: `${theme.content.color.placeholder}!important`,
    },
    '&:disabled::placeholder': {
      color: `${globalTheme.content.color.disabled}!important`,
    },
    '&[aria-invalid=true]': {
      color: !disabled && theme.content.color.default,
      borderColor: !disabled && globalTheme.border.color.negative.default,
    },
  };
}

export const getInputSizes = (size, padding, hasIcon) => {
  return {
    sm: {
      padding: `${padding.vertical.sm} ${padding.horizontal.md}`,
      paddingLeft: hasIcon && `calc(24px + ${padding.horizontal.md}) !important`,
    },
    md: {
      padding: `${padding.vertical.md} ${padding.horizontal.md}`,
      paddingLeft: hasIcon && `calc(24px + ${padding.horizontal.md}) !important`,
    },
  }[size];
};

export const getSelectDividerStyle = (theme, globalTheme) => {
  const dropdownTheme = theme.other.dropdown;
  return {
    separator: {
      padding: dropdownTheme.spacing.padding.md,
      color: dropdownTheme.content.color['default--alt'],
      display: 'flex',
      alignItems: 'center',
      '& [role="separator"]': {
        flex: 1,
      },
    },
    separatorLabel: {
      ...globalTheme.content.typo.caption,
      lineHeight: '16px',
      color: dropdownTheme.content.color['default--alt'],
      gap: dropdownTheme.spacing.gap,
      marginTop: '0px !important',
      '&:after': {
        margin: 0,
        borderColor: theme.other.divider.background.color.default,
      },
    },
  };
};

export function getErrorStyle(theme) {
  return {
    color: theme.colors.text01,
    ...getFontProductive(theme.fontSizes['1']),
  };
}

export function getLabelStyle(theme) {
  return {
    color: theme.colors.text01,
    ...getFontProductive(theme.fontSizes['2'], 500),
    gridArea: 'label',
  };
}

export function getHelpStyle(theme) {
  return {
    ...getFontProductive(theme.fontSizes['1'], 400),
    color: theme.colors.text04,
  };
}

export function getRightSection(theme) {
  return {
    color: theme.colors.text05,
  };
}

export const getOrientation = (orientation, spacing) => {
  const layout = {
    vertical: {},
    horizontal: {
      display: 'grid',
      gridTemplateColumns: `calc(${spacing['2']}px * 23) auto`,
      gridTemplateRows: `${spacing['5']}px ${spacing['4']}px auto  auto`,
      gridTemplateAreas: "'label input''description input' 'description error' 'description . ' ",
      gap: `0 ${spacing['5']}px`,

      '& .mantine-Select-root .mantine-Select-root': {
        display: 'revert',
      },
      '& .mantine-PasswordInput-root': {
        display: 'revert',
      },
      '& .mantine-Textarea-root': {
        display: 'revert',
      },
    },
  };
  return layout[orientation];
};
