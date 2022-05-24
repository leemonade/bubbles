import PropTypes from 'prop-types';

export const SWIPER_VARIANTS = ['dashboard'];

export const SWIPER_DEFAULT_PROPS = {
  breakAt: {},
  styles: {},
  slideStyles: {},
  buttonStyles: {},
  nextButtonStyles: {},
  prevButtonStyles: {},
  disableSelectedStyles: false,
  deselectable: true,
};
export const SWIPER_PROP_TYPES = {
  children: PropTypes.arrayOf(PropTypes.element),
  variant: PropTypes.oneOf(SWIPER_VARIANTS),
  breakAt: PropTypes.object,
  selectable: PropTypes.bool,
  deselectable: PropTypes.bool,
  disableSelectedStyles: PropTypes.bool,
  onSelectIndex: PropTypes.func,
  styles: PropTypes.object,
  slideStyles: PropTypes.object,
  buttonStyles: PropTypes.object,
  nextButtonStyles: PropTypes.object,
  prevButtonStyles: PropTypes.object,
};
