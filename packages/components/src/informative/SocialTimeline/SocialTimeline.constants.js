import PropTypes from 'prop-types';

export const SOCIAL_TIMELINE_DEFAULT_PROPS = {
  messages: [],
};
export const SOCIAL_TIMELINE_PROP_TYPES = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      actor: PropTypes.shape({
        name: PropTypes.string,
        surnames: PropTypes.string,
        avatar: PropTypes.string,
      }),
      verb: PropTypes.string,
      object: PropTypes.shape({
        id: PropTypes.string,
        definition: PropTypes.shape({
          type: PropTypes.string,
          name: PropTypes.string,
          description: PropTypes.string,
        }),
      }),
      timestamp: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
    })
  ),
};
