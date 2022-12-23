import PropTypes from 'prop-types';

export const SCHEMA_NAV_DEFAULT_ACCEPTS = [
  { type: 'heading', attrs: { level: 1 } },
  { type: 'heading', attrs: { level: 2 } },
];

export const SCHEMA_NAV_DEFAULT_PROPS = {
  accept: SCHEMA_NAV_DEFAULT_ACCEPTS,
};
export const SCHEMA_NAV_PROP_TYPES = {
  value: PropTypes.any,
  accept: PropTypes.arrayOf(
    PropTypes.shape({ type: PropTypes.string, attrs: PropTypes.any, component: PropTypes.node })
  ),
  onSelect: PropTypes.func,
};
