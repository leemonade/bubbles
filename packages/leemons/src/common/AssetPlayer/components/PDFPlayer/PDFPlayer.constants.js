import PropTypes from 'prop-types';

export const PDF_PLAYER_DEFAULT_PROPS = {
  labels: {
    pageLabel: '',
    paginatorLabel: '',
  },
  useThumbnails: false,
};
export const PDF_PLAYER_PROP_TYPES = {
  labels: PropTypes.shape({
    pageLabel: PropTypes.string,
    paginatorLabel: PropTypes.string,
  }),
  useThumbnails: PropTypes.bool,
};
