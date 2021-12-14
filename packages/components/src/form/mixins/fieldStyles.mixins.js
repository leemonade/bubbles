import { getPaddings, getFontProductive } from '../../theme.mixins';

export function getInputStyle(theme) {
  return {
    ...getFontProductive(null, 400),
    color: theme.colors.text02,
    marginBottom: theme.spacing['1'],
    background: theme.colors.uiBackground04,
    gridArea: 'input',
    '&:disabled': {
      cursor: 'not-allowed',
      color: theme.colors.text06,
      background: theme.colors.ui03,
    },
    '&:focus': {
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
    gridArea: 'error',
  };
}

export function getDescriptionStyle(theme) {
  return {
    color: theme.colors.text04,
    ...getFontProductive(),
    marginBottom: theme.spacing['2'],
    gridArea: 'description',
  };
}

export function getLabelStyle(theme) {
  return {
    color: theme.colors.text01,
    ...getFontProductive(null, 500),
    marginBottom: theme.spacing['2'],
    gridArea: 'label',
  };
}

export function getRequiredStyle(theme) {
  return {
    color: theme.colors.text04,
    ...getFontProductive(),
  };
}

export function getRightSection(theme) {
  return {
    color: theme.colors.text05,
  };
}

export const getSizes = (size, spacing) => {
  return {
    xs: {
      height: spacing['7'],
      ...getPaddings(spacing['1'], spacing['4']),
    },

    sm: {
      height: spacing['8'],
      ...getPaddings(spacing['3'], spacing['4']),
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
    },
  };
  return layout[orientation];
};
