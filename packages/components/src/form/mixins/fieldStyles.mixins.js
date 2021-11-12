import { getPaddings } from '../../theme.mixins';

export function getInputStyle(theme) {
  return {
    color: theme.colors.text02,
    marginBottom: theme.spacing['1'],
    background: theme.colors.uiBackground04,
    fontFamily: "'Inter', sans-serif",
    fontWeight: 400,
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
  };
}

export function getErrorStyle(theme) {
  return {
    color: theme.colors.text01,
    fontSize: '0.79rem',
    margin: theme.spacing['1'],
    gridArea: 'error',
  };
}

export function getDescriptionStyle(theme) {
  return {
    color: theme.colors.text04,
    marginBottom: theme.spacing['2'],
    gridArea: 'description',
    //ui02m
    fontSize: '0.79rem',
  };
}

export function getLabelStyle(theme) {
  return {
    color: theme.colors.text01,
    fontWeight: 600,
    fontFamily: "'Inter', sans-serif",
    marginBottom: theme.spacing['1'],
    gridArea: 'label',
  };
}

export function getRequiredStyle(theme) {
  return {
    color: theme.colors.text04,
    fontFamily: "'Inter', sans-serif",
  };
}


export function getRightSection(theme){
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
      gridTemplateColumns: `calc(${spacing['2']}px * 22) auto`,
      gridTemplateRows: `${spacing['5']}px ${spacing['5']}px auto  auto`,
      gridTemplateAreas: "'label input''description input' 'description error' 'description . ' ",
      gap: `0 ${spacing['4']}px`,
    },
  };
  return layout[orientation];
};