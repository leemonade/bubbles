import propTypes from 'prop-types';

export const PROGRESSBOTTOMBAR_RADIUS = ['xs', 'sm', 'md', 'lg', 'xl'];
export const PROGRESSBOTTOMBAR_SIZES = ['xs', 'sm', 'md', 'lg', 'xl'];

// SECTIONS PROP EXAMPLE
// If you want to use sections prop, you need to pass an array of objects with value, color and label keys.
// only value and color keys are required.
//
// sections={[
//   { value: 33, color: 'pink', label: 'Documents', tooltip: 'Document – 33 Gb' },
//   { value: 28, color: 'grape', label: 'Apps', tooltip: 'Apps – 28 Gb' },
//   { value: 25, color: 'violet', label: 'Other', tooltip: 'Other – 25 Gb' },
// ]}

export const PROGRESSBOTTOMBAR_DEFAULT_PROPS = {
  animate: false,
  color: 'orange',
  label: '',
  labelLeft: 'labelLeft',
  labelRight: 'LabelRight',
  radius: 'lg',
  sections: null,
  size: 'sm',
  striped: false,
  value: 100,
};

export const PROGRESSBOTTOMBAR_PROP_TYPES = {
  animate: propTypes.bool,
  color: propTypes.string,
  label: propTypes.string,
  labelLeft: propTypes.string,
  labelRight: propTypes.string,
  radius: propTypes.oneOf(PROGRESSBOTTOMBAR_RADIUS),
  sections: propTypes.array,
  size: propTypes.oneOf(PROGRESSBOTTOMBAR_SIZES),
  striped: propTypes.bool,
  value: propTypes.number,
};
