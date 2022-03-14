import PropTypes from 'prop-types';

export const LIBRARYCARD_COVER_DIRECTIONS = ['vertical', 'horizontal'];

export const LIBRARY_CARD_DEADLINE_PROP_TYPES = {
  labels: PropTypes.shape({
    title: PropTypes.string,
    new: PropTypes.string,
    deadline: PropTypes.string,
  }),
  icon: PropTypes.oneOfType([
    PropTypes.element,
    (props, propName, componentName) => validateURL(props, propName, componentName),
  ]),
  locale: PropTypes.string,
  deadline: PropTypes.instanceOf(Date),
  direction: PropTypes.oneOf(LIBRARYCARD_COVER_DIRECTIONS),
  parentHovered: PropTypes.bool,
};
