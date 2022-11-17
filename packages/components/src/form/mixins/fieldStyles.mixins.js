import { getPaddings, getFontProductive } from '../../theme.mixins';

export function getInputStyle(theme, variant) {
  return {
    ...getFontProductive(null, 400),
    color: theme.colors.text02,
    // marginBottom: theme.spacing['1'],
    background: variant === 'filled' ? theme.colors.ui03 : theme.colors.uiBackground04,
    borderColor: variant === 'filled' ? theme.colors.ui03 : theme.colors.ui01,

    '&:disabled': {
      cursor: 'not-allowed',
      color: theme.colors.text06,
      background: theme.colors.ui03,
    },
    '&:focus': {
      borderColor: theme.colors.ui01,
      boxShadow: `0 0 0 3px ${theme.colors.interactive03h}`,
      background: theme.colors.uiBackground04,
    },
    '&:focus-within': {
      borderColor: theme.colors.ui01,
      boxShadow: `0 0 0 3px ${theme.colors.interactive03h}`,
    },

    '&::placeholder': {
      opacity: 1,
      color: theme.colors.text05,
    },
    '&[aria-invalid=true]': {
      borderColor: theme.colors.fatic01,
    },
  };
}

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
export const getInputSizes = (size, spacing, includeHeight = true) => {
  return {
    xs: {
      height: includeHeight ? spacing['7'] : 'auto',
      minHeight: !includeHeight ? spacing['7'] : 'auto',
      ...getPaddings(spacing['1'], spacing['2']),
    },

    sm: {
      height: includeHeight ? 38 : 'auto',
      minHeight: !includeHeight ? 38 : 'auto',
      ...getPaddings(spacing['2'], spacing['2']),
    },
  }[size];
};

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
