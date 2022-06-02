import PropTypes from 'prop-types';

export const USER_DISPLAY_ITEM_LIST_DEFAULT_PROPS = {
  labels: {
    showMore: '',
    showLess: '',
  },
  limit: 3,
  data: [],
};
export const USER_DISPLAY_ITEM_LIST_PROP_TYPES = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      surnames: PropTypes.string,
      avatar: PropTypes.string,
    })
  ),
  limit: PropTypes.number,
  labels: PropTypes.shape({
    showMore: PropTypes.string,
    showLess: PropTypes.string,
  }),
};
