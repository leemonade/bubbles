import PropTypes from 'prop-types';
import { CONTEXT_CONTAINER_PROP_TYPES } from '../../layout/ContextContainer';

export const LOADER_LABEL_POSITIONS = ['right', 'bottom'];

export const LOADER_DEFAULT_PROPS = {
  padded: false,
  label: '',
  labelPosition: LOADER_LABEL_POSITIONS[0],
  useAria: true,
};
export const LOADER_PROP_TYPES = {
  /** Controls the amount of padding */
  padded: CONTEXT_CONTAINER_PROP_TYPES.padded,
  /** Controls if there is text */
  label: PropTypes.string,
  /** Controls the label position */
  labelPosition: PropTypes.oneOf(LOADER_LABEL_POSITIONS),
  /** Controls if Loader uses aria role */
  useAria: PropTypes.bool,
};
