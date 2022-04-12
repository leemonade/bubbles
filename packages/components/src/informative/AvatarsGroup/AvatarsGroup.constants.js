import PropTypes from 'prop-types';
import { AVATAR_SIZES } from '../Avatar/Avatar';

export const AVATARS_GROUP_DEFAULT_PROPS = {
  size: 'sm',
  limit: 3,
  data: [],
};
export const AVATARS_GROUP_PROP_TYPES = {
  size: PropTypes.oneOf(AVATAR_SIZES),
  limit: PropTypes.number,
  total: PropTypes.number,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      color: PropTypes.string,
      initials: PropTypes.string,
      fullName: PropTypes.string,
    })
  ),
};
