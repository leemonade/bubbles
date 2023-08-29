import PropTypes from 'prop-types';

export const SPOTLIGHT_DEFAULT_PROPS = {
  actions: [],
  shortcut: 'mod + K',
  searchPlaceholder: 'Search...',
  nothingFoundMessage: 'Nothing found.',
  highlightQuery: true,
  useRouter: false,
  limit: 10,
};
export const SPOTLIGHT_PROP_TYPES = {
  actions: PropTypes.arrayOf(PropTypes.any),
  searchPlaceholder: PropTypes.string,
  shortcut: PropTypes.string,
  nothingFoundMessage: PropTypes.string,
  highlightQuery: PropTypes.bool,
  useRouter: PropTypes.bool,
  limit: PropTypes.number,
};
