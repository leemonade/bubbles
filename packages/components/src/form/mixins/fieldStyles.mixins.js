import { Group, Text } from '@mantine/core';
export function getInputStyle(theme) {
  return {
    color: theme.colors.text02,
    marginBottom: theme.spacing['1'],
    background: theme.colors.uiBackground04,
    fontFamily: "'Inter', sans-serif",
    fontWeight: 400,
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
  };
}

export function getDescriptionStyle(theme) {
  return {
    color: theme.colors.text04,
    marginBottom: theme.spacing['2'],
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

