import propTypes from 'prop-types';

export const PROGRESSCOLORBAR_RADIUS = ['xs', 'sm', 'md', 'lg', 'xl'];
export const PROGRESSCOLORBAR_SIZES = ['xs', 'sm', 'md', 'lg', 'xl'];

export const PROGRESSCOLORBAR_DEFAULT_PROPS = {
  animate: false,
  label: '',
  labelLeft: 'labelLeft',
  labelRight: 'LabelRight',
  radius: 'lg',
  sections: null,
  size: 'sm',
  striped: false,
  value: 100,
};

export const PROGRESSCOLORBAR_PROP_TYPES = {
  animate: propTypes.bool,
  color: propTypes.string,
  label: propTypes.string,
  labelLeft: propTypes.string,
  labelRight: propTypes.string,
  radius: propTypes.oneOf(PROGRESSCOLORBAR_RADIUS),
  sections: propTypes.array,
  size: propTypes.oneOf(PROGRESSCOLORBAR_SIZES),
  striped: propTypes.bool,
  value: propTypes.number,
  trackColor: propTypes.string,
};
